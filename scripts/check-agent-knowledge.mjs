import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';

const dir = path.resolve('knowledge');
const read = p => fs.readFileSync(path.join(dir, p), 'utf8');
const manifest = JSON.parse(read('manifest.json'));
const bundle = JSON.parse(read('bundle.json'));
const works = JSON.parse(fs.readFileSync('data/works.json', 'utf8'));
const details = JSON.parse(fs.readFileSync('data/details.json', 'utf8'));
const topics = JSON.parse(fs.readFileSync('data/topics.json', 'utf8'));
const concept = JSON.parse(fs.readFileSync('data/concept.json', 'utf8'));
const allowed = new Set([...manifest.files.map(f => f.path), 'manifest.json']);
const parser = unified().use(remarkParse).use(remarkGfm);
const errors = [];
let links = 0;
const origin = 'https://literary-review-and-society-production.up.railway.app';
const html = new Set(['/', '/concept', '/works', '/topics', '/graph', '/graph/topics', '/graph/works', '/economics', '/economics/models', '/economics/studies', '/economics/calculator', '/economics/infrastructure', '/economics/methodology', '/graph-data', '/llms.txt', '/SKILL.md']);
for (const w of works) {
  html.add(`/works/${w.id}`); html.add(`/economics/studies/${w.id}`);
  if (details[w.id].summaryPath) html.add(`/works/${w.id}/summary`);
  if (details[w.id].textPath) html.add(`/works/${w.id}/text`);
}
topics.forEach(t => html.add(`/topics/${t.id}`));
concept.chapters.forEach(c => html.add(`/concept/${c.slug}`));
for (const f of manifest.files) {
  const data = fs.readFileSync(path.join(dir, f.path));
  assert.equal(data.length, f.bytes, `Size mismatch: ${f.path}`);
  assert.equal(createHash('sha256').update(data).digest('hex'), f.sha256, `Hash mismatch: ${f.path}`);
  assert.ok(!/(^|\/)(?:\.env|fulltext\.|input-notes|node_modules|app\/)/.test(f.path), `Unexpected file: ${f.path}`);
  if (!/\.(?:md|txt)$/.test(f.path)) continue;
  const text = data.toString('utf8');
  assert.ok(!text.includes('\uFFFD'), `Invalid UTF-8: ${f.path}`);
  const body = text.replace(/^---\n[\s\S]*?\n---\n/, '');
  const tree = parser.parse(body);
  function walk(node) {
    if (node.type === 'link' || node.type === 'definition' || node.type === 'image') {
      const url = new URL(node.url, `${origin}/knowledge/${f.path}`);
      links++;
      if (url.origin === origin) {
        if (url.pathname.startsWith('/knowledge/')) {
          const target = decodeURIComponent(url.pathname.slice('/knowledge/'.length));
          if (!allowed.has(target)) errors.push(`${f.path} -> ${node.url} (missing ${target})`);
        } else if (!html.has(url.pathname) && url.pathname !== '/api/search') errors.push(`${f.path} -> ${node.url} (unknown HTML route)`);
      }
    }
    node.children?.forEach(walk);
  }
  walk(tree);
}
assert.equal(bundle.data_version, manifest.data_version);
assert.equal(bundle.documents.length, manifest.counts.documents);
for (const d of bundle.documents) assert.equal(d.text, read(d.path), `Bundle mismatch: ${d.path}`);
const expectCount = (type, n) => assert.equal(bundle.documents.filter(d => d.type === type).length, n, `Coverage: ${type}`);
expectCount('work', works.length); expectCount('topic', topics.length); expectCount('concept', concept.chapters.length);
expectCount('summary', works.filter(w => details[w.id].summaryPath).length);
for (const w of works) {
  const text = read(`works/${w.id}.md`);
  assert.ok(text.includes(w.summary), `Lost annotation: ${w.id}`);
  for (const section of Object.values(details[w.id].sections)) {
    // Link rewriting is the only content transformation.
    assert.equal(section.replace(/\]\([^)]+\)/g, ')').split('\n').every(line => !line || text.replace(/\]\([^)]+\)/g, ')').includes(line)), true, `Lost section: ${w.id}`);
  }
}
for (const c of concept.chapters) assert.ok(read(`concept/${c.slug}.md`).includes(c.body), `Lost chapter: ${c.slug}`);
const nodes = new Set(bundle.graph.nodes.map(n => n.id));
assert.equal(nodes.size, bundle.graph.nodes.length);
for (const e of bundle.graph.edges) {
  assert.ok(nodes.has(e.source) && nodes.has(e.target));
  assert.ok(['belongs_to_topic', 'related_to', 'next_chapter'].includes(e.type));
  assert.ok(e.provenance);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(JSON.stringify({ status: 'ok', files: allowed.size, links, ...manifest.counts, data_version: manifest.data_version }));
