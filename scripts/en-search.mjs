import {readFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import ts from 'typescript';

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pageSize = 100;
const filterFlags = new Map([
  ['--kind', 'kind'], ['--type', 'type'], ['--topic', 'topic'], ['--concept-question', 'concept_question'],
  ['--min-relevance', 'min_relevance'], ['--min-evidence-strength', 'min_evidence_strength'],
  ['--min-reproducibility', 'min_reproducibility'], ['--min-transferability', 'min_transferability'],
  ['--min-priority', 'min_priority'],
]);
const usage = `Local EN extraction CLI (no site server required)

  node scripts/en-search.mjs findings --all [selection filters]
  node scripts/en-search.mjs findings --ids work-id,work-id [selection filters]
  node scripts/en-search.mjs answers --all --question-ids Q01,Q75 [--include-nonreported]
  node scripts/en-search.mjs search "cooperation norms" [--all | --ids work-id,work-id]

Selection filters: --kind/--type, --topic, --concept-question,
  --min-relevance, --min-evidence-strength, --min-reproducibility,
  --min-transferability, --min-priority. Use --root PATH to read another
  clone or a fixture. JSON goes to stdout; the coverage summary goes to stderr.`;

class CliError extends Error {
  constructor(code, message) { super(message); this.code = code; }
}

function parseArgs(argv) {
  const [command, ...rest] = argv;
  if (command === '--help' || command === '-h' || rest.includes('--help') || rest.includes('-h')) return {help: true};
  if (command !== 'findings' && command !== 'answers' && command !== 'search') throw new CliError('usage', usage);
  const options = {command, selection: {}, root: siteRoot, query: null};
  let sawAll = false, sawIds = false, sawRoot = false, sawQuestionIds = false, sawNonreported = false;
  for (let i = 0; i < rest.length; i++) {
    const flag = rest[i];
    if (flag === '--all') {
      if (sawAll) throw new CliError('usage', '--all may be supplied only once.');
      sawAll = true;
      options.selection.scope = 'all';
    } else if (flag === '--ids') {
      if (sawIds || !rest[i + 1] || rest[i + 1].startsWith('--')) throw new CliError('usage', '--ids requires one comma-separated ID list.');
      sawIds = true;
      options.selection.ids = rest[++i].split(',').map(id => id.trim());
    } else if (flag === '--root') {
      if (sawRoot || !rest[i + 1] || rest[i + 1].startsWith('--')) throw new CliError('usage', '--root requires one path.');
      sawRoot = true;
      options.root = path.resolve(process.cwd(), rest[++i]);
    } else if (flag === '--question-ids') {
      if (sawQuestionIds || !rest[i + 1] || rest[i + 1].startsWith('--')) throw new CliError('usage', '--question-ids requires one comma-separated Q-ID list.');
      sawQuestionIds = true;
      options.selection.question_ids = rest[++i].split(',').map(id => id.trim());
    } else if (flag === '--include-nonreported') {
      if (sawNonreported) throw new CliError('usage', '--include-nonreported may be supplied only once.');
      sawNonreported = true;
      options.selection.include_nonreported = true;
    } else if (filterFlags.has(flag)) {
      const key = filterFlags.get(flag);
      if (options.selection[key] !== undefined || !rest[i + 1] || rest[i + 1].startsWith('--')) throw new CliError('usage', `${flag} requires one value and may be supplied only once.`);
      const value = rest[++i];
      options.selection[key] = key.startsWith('min_') ? Number(value) : value;
    } else if (flag.startsWith('--')) {
      throw new CliError('usage', `Unknown option: ${flag}`);
    } else if (command === 'search' && options.query === null) {
      options.query = flag;
    } else {
      throw new CliError('usage', command === 'search' ? 'Search accepts one query string.' : 'Unexpected argument.');
    }
  }
  if (sawAll && sawIds) throw new CliError('usage', 'Choose either --all or --ids.');
  if ((command === 'findings' || command === 'answers') && options.selection.scope === undefined && options.selection.ids === undefined && options.selection.kind === undefined && options.selection.type === undefined) {
    throw new CliError('invalid_selection', 'Choose --all, --ids, or --kind/--type.');
  }
  if (command === 'answers' && !sawQuestionIds) throw new CliError('invalid_selection', 'Answer extraction requires --question-ids.');
  if (command !== 'answers' && (sawQuestionIds || sawNonreported)) throw new CliError('invalid_selection', '--question-ids and --include-nonreported require the answers command.');
  if (command === 'search') {
    if (!options.query?.trim()) throw new CliError('usage', 'Search requires a nonempty query string.');
    if (options.selection.scope === undefined && options.selection.ids === undefined && options.selection.kind === undefined && options.selection.type === undefined) options.selection.scope = 'all';
  }
  return options;
}

async function loadExtractor() {
  const source = readFileSync(path.join(siteRoot, 'lib', 'english-extractions.ts'), 'utf8');
  const compiled = ts.transpileModule(source, {compilerOptions: {target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext}}).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
}

function sameJson(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

async function extractAll(api, selection, fields) {
  try { process.chdir(selection.root); }
  catch { throw new CliError('snapshot_unavailable', 'Snapshot root is unavailable.'); }
  const request = {...selection.selection, fields, limit: pageSize};
  let cursor;
  let firstPage;
  const works = new Map();
  const fragments = new Map();
  do {
    const page = api.extract({...request, ...(cursor ? {cursor} : {})});
    if (!firstPage) firstPage = page;
    else if (page.snapshot !== firstPage.snapshot || !sameJson(page.coverage, firstPage.coverage) || !sameJson(page.selection, firstPage.selection)) {
      throw new CliError('snapshot_changed', 'Snapshot page metadata changed during traversal.');
    }
    for (const part of page.works) {
      let work = works.get(part.id);
      if (!work) {
        const metadata = {...part};
        delete metadata.part_index;
        delete metadata.part_count;
        delete metadata.finding_fragment;
        delete metadata.findings;
        work = {...metadata, ...(fields.includes('findings') ? {findings: []} : {})};
        works.set(part.id, work);
      } else {
        for (const [key, value] of Object.entries(part)) {
          if (!['part_index', 'part_count', 'finding_fragment', 'findings'].includes(key) && work[key] === undefined) work[key] = value;
        }
      }
      if (part.finding_fragment) {
        const fragment = part.finding_fragment;
        if (typeof fragment.finding_id !== 'string' || !fragment.finding_id || !Number.isSafeInteger(fragment.index) || !Number.isSafeInteger(fragment.count) || fragment.count < 1 || fragment.index < 0 || fragment.index >= fragment.count || typeof fragment.data !== 'string' || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(fragment.data)) {
          throw new CliError('invalid_fragment', 'Snapshot contains an invalid finding fragment.');
        }
        const key = `${part.id}\0${fragment.finding_id}`;
        let entry = fragments.get(key);
        if (!entry) {
          entry = {chunks: Array(fragment.count), position: work.findings.length};
          work.findings.push(null);
          fragments.set(key, entry);
        }
        if (entry.chunks.length !== fragment.count || entry.chunks[fragment.index] !== undefined) throw new CliError('invalid_fragment', 'Snapshot contains inconsistent finding fragments.');
        entry.chunks[fragment.index] = Buffer.from(fragment.data, 'base64');
        if (entry.chunks.filter(Boolean).length === fragment.count) {
          try { work.findings[entry.position] = JSON.parse(Buffer.concat(entry.chunks).toString('utf8')); }
          catch { throw new CliError('invalid_fragment', 'Snapshot finding fragments do not form valid JSON.'); }
          fragments.delete(key);
        }
      } else if (Array.isArray(part.findings)) {
        work.findings.push(...part.findings);
      }
    }
    if (page.truncated && !page.next_cursor) throw new CliError('incomplete_export', 'Snapshot traversal stopped before completion.');
    cursor = page.next_cursor ?? undefined;
    if (!page.truncated) {
      if (!page.complete) throw new CliError('incomplete_export', 'Snapshot traversal stopped before completion.');
      break;
    }
  } while (true);
  if (fragments.size) throw new CliError('incomplete_export', 'Snapshot traversal ended with incomplete findings.');
  return {
    snapshot: firstPage.snapshot,
    selection: firstPage.selection,
    coverage: firstPage.coverage,
    complete: true,
    works: [...works.values()],
  };
}

const findingMetadata = new Set(['finding_id', 'origin', 'evidence']);
const answerMetadata = new Set(['question_id', 'status', 'origin', 'evidence', 'searched_source_refs', 'record_refs']);

function normalized(value) {
  return value.normalize('NFKC').toLocaleLowerCase('en-US').replace(/\s+/g, ' ').trim();
}

function collectText(value, field, excluded, output) {
  if (typeof value === 'string') output.push({field, text: value});
  else if (Array.isArray(value)) value.forEach((item, index) => collectText(item, `${field}[${index}]`, excluded, output));
  else if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) if (!excluded.has(key)) collectText(child, field ? `${field}.${key}` : key, excluded, output);
  }
}

function matchingFields(record, root, excluded, terms) {
  const text = [];
  collectText(record, root, excluded, text);
  return text.filter(item => {
    const content = normalized(item.text);
    return terms.every(term => content.includes(term));
  }).map(item => {
    const compact = item.text.replace(/\s+/g, ' ').trim();
    const first = normalized(compact).indexOf(terms[0]);
    const start = Math.max(0, first - 80);
    return {field: item.field, excerpt: `${start ? '…' : ''}${compact.slice(start, start + 240)}${start + 240 < compact.length ? '…' : ''}`};
  });
}

function searchRecords(result, query) {
  // shortcut: linear scan of selected accepted EN text; add an index if measured query time grows with the corpus.
  const terms = normalized(query).split(' ').filter(Boolean);
  const hits = [];
  for (const work of result.works) {
    const noticeRef = work.publication_notice ? {snapshot: result.snapshot, work_id: work.id} : undefined;
    for (const finding of work.findings ?? []) {
      const matches = matchingFields(finding, 'findings', findingMetadata, terms);
      if (matches.length) hits.push({work_id: work.id, kind: work.kind, finding_id: finding.finding_id, matches, evidence: finding.evidence ?? [], ...(noticeRef && {publication_notice_ref: noticeRef})});
    }
    if (work.author_conclusions) {
      const matches = matchingFields(work.author_conclusions, 'author_conclusions', answerMetadata, terms);
      if (matches.length) hits.push({work_id: work.id, kind: work.kind, question_id: work.author_conclusions.question_id, matches, evidence: work.author_conclusions.evidence ?? [], ...(noticeRef && {publication_notice_ref: noticeRef})});
    }
  }
  return hits;
}

function printCoverage(result, count) {
  const coverage = result.coverage;
  process.stderr.write(`coverage snapshot=${result.snapshot} expected=${coverage.expected_ids.length} accepted=${coverage.found_ids.length} full=${coverage.full_ids.length} partial=${coverage.partial_ids.length} unprocessed=${coverage.unprocessed_ids.length} filtered_out=${coverage.filtered_out_ids?.length ?? 0} unknown=${coverage.unknown_ids.length} duplicate=${coverage.duplicate_ids.length} results=${count}\n`);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) { process.stdout.write(`${usage}\n`); return 0; }
  const api = await loadExtractor();
  const fields = options.command === 'findings' ? ['findings'] : options.command === 'answers' ? ['answers'] : ['findings', 'author_conclusions'];
  const result = await extractAll(api, options, fields);
  const output = options.command === 'findings'
    ? {snapshot: result.snapshot, selection: result.selection, coverage: result.coverage, complete: result.complete, findings: result.works}
    : options.command === 'answers'
      ? {snapshot: result.snapshot, selection: result.selection, coverage: result.coverage, complete: result.complete, answers: result.works}
      : {snapshot: result.snapshot, selection: result.selection, coverage: result.coverage, complete: result.complete, query: options.query, publication_notices: result.works.filter(work => work.publication_notice).map(work => ({work_id: work.id, publication_notice: work.publication_notice})), hits: searchRecords(result, options.query)};
  const resultCount = options.command === 'findings' ? result.works.length : options.command === 'answers' ? result.works.reduce((sum, work) => sum + (work.answers?.length ?? 0), 0) : output.hits.length;
  printCoverage(result, resultCount);
  process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
  return 0;
}

try {
  process.exitCode = await main();
} catch (error) {
  const expected = error instanceof CliError || (typeof error?.code === 'string' && Number.isInteger(error?.status) && typeof error?.message === 'string');
  const code = expected ? error.code : 'internal_error';
  const message = expected ? error.message : 'Unable to process the local EN snapshot.';
  process.stderr.write(`${JSON.stringify({error: {code, message}})}\n`);
  process.exitCode = 1;
}
