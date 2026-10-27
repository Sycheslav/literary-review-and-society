"""Сливает переводы (файлы формата `=== id:` / `## раздел`) в data/translations.json.

Запуск: python scripts/merge_translations.py <папка с переводами> <папка с исходниками>
Проверяет, что числа и адреса ссылок в переводе совпадают с исходником; расхождения печатает.
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECTION_KEYS = {"design", "tech", "prompts", "costs", "results", "conclusions", "limits"}


def parse(text):
    records = {}
    for block in re.split(r"^=== id: ", text, flags=re.M)[1:]:
        rid, _, rest = block.partition("\n")
        head, *parts = re.split(r"^## ", rest, flags=re.M)
        rec = {"_head": head}
        for line in head.split("\n"):
            key, sep, value = line.partition(":")
            if sep and key.strip() in ("title_en", "title_ru", "title"):
                rec[key.strip()] = value.strip()
        for part in parts:
            name, _, body = part.partition("\n")
            rec[name.strip()] = body.strip()
        records[rid.strip()] = rec
    return records


def numbers(text):
    """Числа в нормализованном виде: «2,8» = «2.8», «115,031» = «115 031» = «115031», «.33» = «0.33»."""
    text = re.sub(r"(?<=\d)[,   ](?=\d{3}(?!\d))", "", text or "")
    text = re.sub(r"(?<=\d),(?=\d)", ".", text)
    found = re.findall(r"\d*\.?\d+", text)
    return sorted(str(float(x)) if "." in x else x.lstrip("0") or "0" for x in found)


def urls(text):
    return sorted(re.findall(r"\]\(([^)]+)\)", text or ""))


def main():
    out_dir, in_dir = sys.argv[1], sys.argv[2]
    result = {"works": {}, "topics": {}}
    problems = 0
    for name in sorted(os.listdir(out_dir)):
        if not name.endswith(".md"):
            continue
        tr = parse(open(os.path.join(out_dir, name), encoding="utf-8").read())
        src_path = os.path.join(in_dir, name)
        src = parse(open(src_path, encoding="utf-8").read()) if os.path.exists(src_path) else {}
        missing = set(src) - set(tr)
        if missing:
            print(f"{name}: нет записей {sorted(missing)}")
        for rid, rec in tr.items():
            if rid not in src:
                print(f"{name}: лишняя запись {rid}")
                continue
            if rid.startswith("topic-"):
                result["topics"][rid] = {"intro": rec.get("intro", "")}
                continue
            entry = {"title_ru": rec.get("title_ru", ""), "summary": rec.get("summary", ""), "sections": {}}
            if rec.get("key_findings"):
                entry["key_findings"] = [
                    line[2:].strip() for line in rec["key_findings"].split("\n") if line.startswith("- ")
                ]
            if rec.get("agents"):
                entry["agents"] = rec["agents"]
            for key in SECTION_KEYS:
                if rec.get(key):
                    entry["sections"][key] = rec[key]
            # Проверки: числа и адреса ссылок должны сохраниться.
            for key in SECTION_KEYS | {"summary", "key_findings"}:
                a, b = src[rid].get(key, ""), rec.get(key, "")
                if urls(a) != urls(b):
                    problems += 1
                    print(f"{rid}/{key}: изменились ссылки")
                if numbers(a) != numbers(b):
                    lost = set(numbers(a)) - set(numbers(b))
                    added = set(numbers(b)) - set(numbers(a))
                    if lost or added:
                        problems += 1
                        print(f"{rid}/{key}: числа — пропали {sorted(lost)[:6]}, появились {sorted(added)[:6]}")
            if not entry["title_ru"]:
                print(f"{rid}: пустой title_ru")
            result["works"][rid] = entry
    path = os.path.join(ROOT, "data", "translations.json")
    existing = json.load(open(path, encoding="utf-8")) if os.path.exists(path) else {"works": {}, "topics": {}}
    existing["works"].update(result["works"])
    existing["topics"].update(result["topics"])
    json.dump(existing, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"работ: {len(existing['works'])}, тем: {len(existing['topics'])}, замечаний: {problems}")


if __name__ == "__main__":
    main()
