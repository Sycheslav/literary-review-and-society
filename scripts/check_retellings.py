"""Audit coverage, provenance and navigation of hand-authored Russian retellings."""
import argparse
from collections import Counter
import json
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
FILES = ROOT / "public/corpus/files"


def audit():
    works = json.loads((ROOT / "data/works.json").read_text(encoding="utf-8"))
    details = json.loads((ROOT / "data/details.json").read_text(encoding="utf-8"))
    entries, errors, warnings = [], [], []
    for work in works:
        wid = work["id"]
        detail = details[wid]
        relative = detail.get("summaryPath")
        entry = {"id": wid, "title": work["title"], "status": "missing"}
        entries.append(entry)
        if not relative:
            continue
        path = FILES / relative
        if not path.is_file() or not path.resolve().is_relative_to(FILES.resolve()):
            errors.append(f"{wid}: invalid summary path")
            continue
        text = path.read_text(encoding="utf-8-sig")
        meta_path = path.with_name("summary.meta.json")
        if not meta_path.is_file():
            entry["status"] = "legacy"
            continue
        try:
            meta = json.loads(meta_path.read_text(encoding="utf-8-sig"))
        except (ValueError, OSError) as exc:
            errors.append(f"{wid}: invalid metadata: {exc}")
            continue
        status = meta.get("source_status")
        entry.update(status=status, path=relative, words=len(re.findall(r"\b[\w-]+\b", text)))
        if status not in {"fulltext", "repository", "limited"}:
            errors.append(f"{wid}: unknown source status {status}")
        if meta.get("work_id") != wid:
            errors.append(f"{wid}: wrong metadata work_id")
        if not re.match(r"https?://", meta.get("source_url") or ""):
            errors.append(f"{wid}: missing original URL")
        source_path = meta.get("source_path")
        if source_path and not (FILES / source_path).is_file():
            errors.append(f"{wid}: missing declared source {source_path}")
        if status in {"fulltext", "repository"} and not source_path and not meta.get("source_note"):
            errors.append(f"{wid}: reviewed source not saved")
        headings = [int(n) for n in re.findall(r"^## (\d+)\.\s", text, re.M)]
        # Формат 2: аннотация и главные результаты вместо раздела «1. Главный вопрос и ответ».
        if meta.get("format") == 2:
            if headings != list(range(1, 10)):
                errors.append(f"{wid}: expected numbered sections 1..9, found {headings}")
            for lead in ("## Аннотация", "## Главные результаты"):
                if lead not in text:
                    errors.append(f"{wid}: format 2 needs «{lead[3:]}»")
            if not meta.get("short"):
                errors.append(f"{wid}: format 2 needs a short catalog summary")
        elif headings != list(range(1, 11)):
            errors.append(f"{wid}: expected numbered sections 1..10, found {headings}")
        if status == "limited" and not re.search(r"недоступ|ограничен|только аннотац|не получен", text[:2000], re.I):
            errors.append(f"{wid}: limited source needs a notice at the start")
        if status != "limited" and entry["words"] < 650:
            warnings.append(f"{wid}: only {entry['words']} words; inspect completeness")
        if not re.search(r"[А-Яа-яЁё]{4,}", text):
            errors.append(f"{wid}: no Russian content")
        if re.search(r"\b(?:TODO|TBD|lorem ipsum)\b", text, re.I):
            errors.append(f"{wid}: unfinished placeholder")
        card = (FILES / "works" / f"{wid}.md").read_text(encoding="utf-8")
        if "summary.ru.md" not in card:
            errors.append(f"{wid}: card has no link to retelling")
        for target in re.findall(r"\]\(([^)]+)\)", text):
            if re.match(r"(?:https?://|mailto:|#|/)", target):
                continue
            target = target.split("#", 1)[0]
            if target and not (path.parent / target).exists():
                warnings.append(f"{wid}: unresolved relative link {target}")
    result = {"total": len(works), "counts": dict(Counter(e["status"] for e in entries)),
              "errors": errors, "warnings": warnings, "works": entries}
    out = ROOT / "content/retellings/COVERAGE.json"
    out.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    return result


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--require-complete", action="store_true")
    args = parser.parse_args()
    result = audit()
    print(json.dumps({k: v for k, v in result.items() if k != "works"}, ensure_ascii=True, indent=2))
    incomplete = result["counts"].get("missing", 0) + result["counts"].get("legacy", 0)
    sys.exit(bool(result["errors"] or (args.require_complete and incomplete)))
