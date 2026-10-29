"""Сборка раздела «Концепция и идеи исследований» из общего документа проекта.

Вход:  content/concept.md — копия «ИИ-социум — общая концепция и план исследований.md»
Выход: data/concept.json — вводная часть и главы с подразделами

Запуск: python scripts/build_concept.py [путь к документу]
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOURCE = os.path.join(ROOT, "content", "concept.md")
OUT = os.path.join(ROOT, "data", "concept.json")


def plain(markdown):
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", markdown)
    return re.sub(r"[*_`]", "", text).strip()


def lead(body):
    for para in body.split("\n\n"):
        para = para.strip()
        if para and not para.startswith(("#", "|", ">", "-", "<")):
            text = plain(para)
            match = re.match(r"(.+?[.!?])(\s|$)", text)
            return match.group(1) if match else text
    return ""


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else SOURCE
    with open(path, encoding="utf-8") as f:
        text = f.read().replace("\r\n", "\n")

    head, _, rest = text.partition("\n## Навигация")
    title = re.search(r"^# (.+)$", head, flags=re.M).group(1).strip()
    intro = re.sub(r"^# .+\n", "", head, count=1).strip()

    parts = re.split(r'^<a id="([^"]+)"></a>\s*\n## ', rest, flags=re.M)
    slugs = {}
    chapters = []
    for i in range(1, len(parts), 2):
        slug, chunk = parts[i], parts[i + 1]
        heading, _, body = chunk.partition("\n")
        # The site renderer assigns these IDs to numbered headings itself.
        # Keep source-document anchors from appearing as escaped HTML in the UI.
        body = re.sub(r'^<a id="[^"]+"></a>\s*\n', '', body, flags=re.M)
        match = re.match(r"(\d+)\.\s+(.+)", heading.strip())
        num, name = int(match.group(1)), match.group(2).strip()
        slugs[slug] = num
        subsections = [
            {"id": "p" + m.group(1).replace(".", "-"), "title": f"{m.group(1)}. {m.group(2).strip()}"}
            for m in re.finditer(r"^### (\d+\.\d+)\.\s+(.+)$", body, flags=re.M)
        ]
        chapters.append(
            {"slug": slug, "num": num, "title": name, "lead": lead(body), "body": body.strip(), "sections": subsections}
        )

    def relink(markdown):
        return re.sub(r"\]\(#([^)]+)\)", lambda m: f"](/concept/{m.group(1)})" if m.group(1) in slugs else m.group(0), markdown)

    for ch in chapters:
        ch["body"] = relink(ch["body"])

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump({"title": title, "intro": relink(intro), "chapters": chapters}, f, ensure_ascii=False, separators=(",", ":"))
    print(f"chapters={len(chapters)} sections={sum(len(c['sections']) for c in chapters)}")


if __name__ == "__main__":
    main()
