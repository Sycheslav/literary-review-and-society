import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';

const base = process.argv[2] ?? 'http://localhost:3000';
const publicBase = 'https://literary-review-and-society-production.up.railway.app';
const timeout = () => AbortSignal.timeout(60000);
const local = url => url.replace(publicBase, base);
async function get(p, init) { return fetch(p.startsWith('http') ? local(p) : base + p, { signal: timeout(), ...init }); }
const mr = await get('/knowledge/manifest.json');
assert.equal(mr.status, 200);
const manifest = await mr.json();
let checked = 0;
for (let i = 0; i < manifest.files.length; i += 6) {
  await Promise.all(manifest.files.slice(i, i + 6).map(async f => {
    const r = await get(`/knowledge/${f.path}`);
    assert.equal(r.status, 200, f.path);
    assert.match(r.headers.get('content-type'), f.path.endsWith('.json') ? /application\/json/ : f.path.endsWith('.md') ? /text\/markdown/ : /text\/plain/);
    const data = Buffer.from(await r.arrayBuffer());
    assert.equal(createHash('sha256').update(data).digest('hex'), f.sha256, f.path);
    checked++;
  }));
}
for (const p of ['/knowledge/missing.md', '/knowledge/.env', '/knowledge/works/not-real.md']) assert.equal((await get(p)).status, 404, p);
const entry = await get('/llms.txt');
assert.equal(entry.status, 200); assert.match(await entry.text(), /knowledge\/index\.md/);
const skill = await get('/SKILL.md'); assert.equal(skill.status, 200); assert.match(await skill.text(), /^---\nname:/);
const cached = await get('/knowledge/index.md'); const etag = cached.headers.get('etag');
assert.ok(etag); assert.equal((await get('/knowledge/index.md', { headers: { 'If-None-Match': `W/${etag}` } })).status, 304);
const graph = await (await get('/graph-data')).json();
assert.equal(graph.works.length, manifest.counts.works); assert.ok(Array.isArray(graph.nodes) && Array.isArray(graph.edges));
const sourceGraph = JSON.parse(fs.readFileSync('data/graph.json', 'utf8'));
assert.deepEqual(graph.nodes, sourceGraph.nodes); assert.deepEqual(graph.edges, sourceGraph.edges);
for (const p of ['/agents', '/', '/works/arxiv-2304-03442', '/topics/methodology', '/concept/experiments', '/economics/methodology']) {
  const r = await get(p); assert.equal(r.status, 200, p); const text = await r.text(); assert.match(text, /<h1/); assert.match(text, /Markdown|SKILL|Для ИИ-агентов/);
}
const sitemap = await get('/sitemap.xml'); assert.equal(sitemap.status, 200); assert.match(await sitemap.text(), /\/agents<\/loc>/);
const robots = await get('/robots.txt'); assert.equal(robots.status, 200); assert.match(await robots.text(), /Sitemap:/i);
for (const p of ['/api/search', '/api/search?q=x', '/api/search?q=ok&limit=51', '/api/search?q=ok&type=private', '/api/search?q=ok&topic=bad', '/api/search?q=ok&offset=-1']) assert.equal((await get(p)).status, 400, p);
const query = async (q, extra = '') => {
  const r = await get(`/api/search?q=${encodeURIComponent(q)}&limit=5${extra}`);
  assert.equal(r.status, 200); const body = await r.json(); assert.equal(body.data_version, manifest.data_version); return body;
};
const search = await query('cooperation'); assert.ok(search.total > 0);
assert.ok((await query('частн информац', '&type=concept')).results.length > 0);
for (const result of search.results) assert.equal((await get(result.markdown_url)).status, 200);
const page1 = await query('agent', '&type=work');
const page2 = await query('agent', `&type=work&offset=${page1.next_offset}`);
assert.ok(page1.results.every(a => page2.results.every(b => a.id !== b.id)));
assert.equal((await query('zyxwvu987654321')).total, 0);
const filtered = await query('agent', '&type=work&topic=methodology'); assert.ok(filtered.results.every(r => r.type === 'work'));
for (let i = 0; i < 61; i++) {
  const r = await get('/api/search?q=x', { headers: { 'X-Forwarded-For': '203.0.113.57' } });
  if (i === 60) { assert.equal(r.status, 429); assert.ok(Number(r.headers.get('retry-after')) > 0); }
}

// Agent-style acceptance: discover indexes from llms, follow them and read source
// documents through HTTP only, retaining the evidence trace rather than a model verdict.
const trace = [];
async function read(p) { const r = await get(p); assert.equal(r.status, 200, p); const text = await r.text(); trace.push({ url: p, bytes: Buffer.byteLength(text) }); return text; }
const llms = await read('/llms.txt');
assert.ok(llms.includes('/knowledge/index.md'));
const index = await read('/knowledge/index.md'); assert.ok(index.includes('experiments/index.md'));
const experiments = await read('/knowledge/experiments/index.md'); assert.ok(experiments.includes('../concept/experiments.md'));
const chapter = await read('/knowledge/concept/experiments.md');
assert.match(chapter, /13\.1\./); assert.match(chapter, /13\.8\./); assert.match(chapter, /project_proposal/);
for (const [question, terms, topic] of [
  ['Материалы к первому пилоту: распределение при частной информации', 'сговор', 'economics'],
  ['Устойчивые связи и помощь с издержками', 'reciprocity', 'networks'],
]) {
  // Topic IDs come from the public list, not from the query protocol.
  const topicIndex = await read('/knowledge/topics/index.md');
  const known = topicIndex.includes(`(${topic}.md)`);
  const found = await query(terms, known ? `&type=work&topic=${topic}` : '&type=work');
  assert.ok(found.results.length > 0, question);
  for (const result of found.results.slice(0, 2)) {
    const text = await read(result.markdown_url);
    assert.match(text, /source_url: "https?:/); assert.match(text, /working_summary/); assert.match(text, /Ограничения/);
  }
}
fs.mkdirSync('work/agent-interface', { recursive: true });
fs.writeFileSync('work/agent-interface/http-acceptance.json', JSON.stringify({ base, data_version: manifest.data_version, checked, trace }, null, 2));
console.log(JSON.stringify({ status: 'ok', checked, scenario_reads: trace.length, report: 'work/agent-interface/http-acceptance.json' }));
