"""Сборка данных сайта из корпуса обзора и русских переводов.

Входы:
  public/corpus/graph.json          — узлы и связи корпуса
  public/corpus/files/works/*.md    — карточки работ (разделы)
  public/corpus/files/topics/*.md   — тематические разделы
  data/translations.json            — переводы названий и разделов (если есть)
  data/layout.json                  — фиксированные координаты графа (scripts/layout_graph.py)
  data/curation.json                — ревизия корпуса: исключённые записи, артефакты
                                      (код, данные, копии текста), которые становятся
                                      ссылками в карточке основной работы, поправки значимости,
                                      названий и года

Выходы: data/works.json, data/details.json, data/topics.json, data/graph.json

Запуск: python scripts/build_data.py
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CORPUS = os.path.join(ROOT, "public", "corpus")
DATA = os.path.join(ROOT, "data")

SECTIONS = {
    "Дизайн исследования": "design",
    "Техническая реализация": "tech",
    "Промпты и инструкции": "prompts",
    "Опубликованные расходы и вычисления": "costs",
    "Результаты": "results",
    "Выводы авторов": "conclusions",
    "Ограничения и интерпретация": "limits",
}
IMPORTANCE_ORDER = {"core": 0, "supporting": 1, "peripheral": 2}
LINK_LABELS = {
    "project": "Код и материалы",
    "dataset": "Данные",
    "research": "Другая версия статьи",
    "review": "Другая версия статьи",
}


def load(path, default=None):
    if not os.path.exists(path):
        return default
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def dump(name, value):
    with open(os.path.join(DATA, name), "w", encoding="utf-8") as f:
        json.dump(value, f, ensure_ascii=False, separators=(",", ":"))


def is_placeholder(path):
    # Unfinished retelling stubs must not be published as if they were ready.
    with open(path, encoding="utf-8") as f:
        return "ЗАГОТОВКА" in f.read()


def card_sections(path):
    with open(os.path.join(CORPUS, "files", path), encoding="utf-8") as f:
        body = f.read().split("---", 2)[2]
    out = {}
    for part in re.split(r"^## ", body, flags=re.M)[1:]:
        head, _, text = part.partition("\n")
        if head.strip() in SECTIONS:
            out[SECTIONS[head.strip()]] = text.strip()
    return out


def clean_title(title):
    return re.sub(r"\s+", " ", title).strip()


def topic_intro(path):
    with open(os.path.join(CORPUS, "files", path), encoding="utf-8") as f:
        body = f.read().split("---", 2)[2]
    intro = body.split("## Работы по значимости")[0]
    lines = [
        line
        for line in intro.split("\n")
        if not line.startswith("# ")
        and not line.startswith("[← Главная]")
        and not line.startswith("- **Работ в теме")
        and not line.startswith("- **Чаще всего")
    ]
    return "\n".join(lines).strip().replace("\n## ", "\n### ")


def first_sentence(markdown):
    for para in markdown.split("\n\n"):
        para = para.strip()
        if para and not para.startswith("#"):
            text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", para)
            match = re.match(r"(.+?[.!?])(\s|$)", text)
            return match.group(1) if match else text
    return ""


def main():
    graph = load(os.path.join(CORPUS, "graph.json"))
    tr = load(os.path.join(DATA, "translations.json"), {"works": {}, "topics": {}})
    layout = load(os.path.join(DATA, "layout.json"), {})
    curation = load(os.path.join(DATA, "curation.json"), {"remove": {}, "attach": {}, "importance": {}})
    attach = curation["attach"]
    excluded = set(curation["remove"]) | set(attach)

    all_nodes = {n["id"]: n for n in graph["nodes"] if n["type"] == "work"}
    links = {}
    for src, dst in attach.items():
        n = all_nodes[src]
        url = (n.get("source_urls") or [None])[0]
        if url:
            label = LINK_LABELS.get(n.get("source_kind"), "Страница проекта")
            links.setdefault(dst, []).append({"label": label, "url": url})

    work_nodes = [n for n in graph["nodes"] if n["type"] == "work" and n["id"] not in excluded]
    topic_nodes = [n for n in graph["nodes"] if n["type"] == "topic"]
    work_ids = {n["id"] for n in work_nodes}

    related = {wid: set() for wid in work_ids}
    for e in graph["edges"]:
        s, t = e["source"], e["target"]
        if s in work_ids and t in work_ids and s != t:
            related[s].add(t)
            related[t].add(s)

    works, details = [], {}
    for n in work_nodes:
        wid = n["id"]
        t = tr["works"].get(wid, {})
        original = clean_title(n["title"])
        title = clean_title(t.get("title_ru") or original)
        if n.get("language") == "ru":
            title = original
        fix = curation.get("fix", {}).get(wid, {})
        if "title" in fix:
            title, original = fix["title"], fix.get("original", title)
        text_path = next((m for m in n.get("materials", []) if m.endswith("/fulltext.md")), None)
        if text_path and not os.path.exists(os.path.join(CORPUS, "files", text_path)):
            text_path = None
        # Newly recovered originals need not already be listed in the historical graph.
        recovered = f"materials/{wid}/fulltext.md"
        if not text_path and os.path.exists(os.path.join(CORPUS, "files", recovered)):
            text_path = recovered
        summary_candidates = ([text_path.rsplit("/", 1)[0] + "/summary.ru.md"] if text_path else [])
        summary_candidates.append(f"materials/{wid}/summary.ru.md")
        summary_path = next((p for p in summary_candidates
                             if os.path.isfile(os.path.join(CORPUS, "files", p))
                             and not is_placeholder(os.path.join(CORPUS, "files", p))), None)
        summary_meta, summary_words = {}, 0
        if summary_path:
            with open(os.path.join(CORPUS, "files", summary_path), encoding="utf-8") as f:
                summary_words = len(re.findall(r"\b[\w-]+\b", f.read()))
            summary_meta = load(os.path.join(CORPUS, "files", summary_path.replace("summary.ru.md", "summary.meta.json")), {})
            if summary_meta.get("source_status") == "limited" and not summary_meta.get("source_path"):
                # An archived abstract or conference page is not the full paper.
                text_path = None
        urls = n.get("source_urls") or []
        works.append(
            {
                "id": wid,
                "title": title,
                "original": original if original != title else None,
                "authors": n.get("authors") or [],
                "year": fix.get("year") or n.get("year"),
                "kind": n.get("source_kind"),
                "topics": n.get("topics") or [],
                "importance": curation["importance"].get(wid) or n.get("importance"),
                "summary": t.get("summary") or n.get("summary_short") or "",
                "hasText": bool(text_path),
                "hasRetelling": bool(summary_path),
            }
        )
        sections = card_sections(n["path"])
        sections.update({k: v for k, v in (t.get("sections") or {}).items() if v})
        details[wid] = {
            "keyFindings": t.get("key_findings") or n.get("key_findings") or [],
            "agents": t.get("agents") or n.get("agents_count") or "",
            "models": n.get("models") or [],
            "sections": sections,
            "related": sorted(related[wid]),
            "url": urls[0] if urls else None,
            "links": [l for l in links.get(wid, []) if l["url"] != (urls[0] if urls else None)],
            "textPath": text_path,
            "summaryPath": summary_path,
            "summaryStatus": summary_meta.get("source_status", "legacy") if summary_path else None,
            "summaryWords": summary_words,
        }

    works.sort(
        key=lambda w: (IMPORTANCE_ORDER.get(w["importance"], 3), -(w["year"] or 0), w["title"])
    )

    topics = []
    for n in topic_nodes:
        slug = n["id"].removeprefix("topic-")
        members = [w for w in works if slug in w["topics"]]
        intro = (tr["topics"].get(n["id"]) or {}).get("intro") or topic_intro(n["path"])
        topics.append(
            {
                "id": slug,
                "title": n["title"],
                "intro": intro,
                "lead": first_sentence(intro),
                "count": len(members),
                "core": sum(1 for w in members if w["importance"] == "core"),
            }
        )
    topics.sort(key=lambda t: -t["count"])

    nodes = [
        {"id": w["id"], "x": layout[w["id"]][0], "y": layout[w["id"]][1]}
        for w in works
        if w["id"] in layout
    ] + [
        {"id": "topic-" + t["id"], "x": layout["topic-" + t["id"]][0], "y": layout["topic-" + t["id"]][1]}
        for t in topics
        if "topic-" + t["id"] in layout
    ]
    edges = []
    seen = set()
    for e in graph["edges"]:
        s, t = e["source"], e["target"]
        if s in work_ids and (t in work_ids or t.startswith("topic-")) and s != t:
            key = tuple(sorted((s, t)))
            if key not in seen:
                seen.add(key)
                edges.append([s, t])

    os.makedirs(DATA, exist_ok=True)
    dump("works.json", works)
    dump("details.json", details)
    dump("topics.json", topics)
    dump("graph.json", {"nodes": nodes, "edges": edges})
    translated = sum(1 for w in work_nodes if tr["works"].get(w["id"], {}).get("title_ru"))
    print(
        f"works={len(works)} translated={translated} topics={len(topics)} edges={len(edges)} "
        f"removed={len(curation['remove'])} attached={len(attach)}"
    )


if __name__ == "__main__":
    main()
