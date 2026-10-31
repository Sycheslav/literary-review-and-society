"""Read-only check of format-2 retellings: summary.ru.md and summary.meta.json.

Usage: python -X utf8 scripts/check_format2.py [work_id ...]
Without ids, checks every work whose summary.meta.json has "format": 2.
Writes nothing; exit code 1 if any error is found.
"""
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FILES = ROOT / "public/corpus/files"

HEADINGS = [
    "Аннотация",
    "Главные результаты",
    "1. Что проверяли",
    "2. Агенты, среда и исходные условия",
    "3. Метод",
    "4. Дизайн эксперимента и метрики",
    "5. Результаты",
    "6. Что следует из результатов и чего не следует",
    "7. Ограничения и воспроизводимость",
    "8. Значение для Лаборатории № 57 и «Верхума»",
    "9. Где проверять в оригинале",
]
NOTE_8 = "*Предложения редакции обзора, а не авторов статьи.*"
DE_AI = re.compile(
    r"\b(является|позволяет|при этом|таким образом|в рамках|следует отметить"
    r"|необходимо подчеркнуть|важно отметить|представляет собой|осуществляется"
    r"|в данной связи|в настоящем исследовании|играет ключевую роль|стоит отметить"
    r"|данный|данная|данное)\b",
    re.IGNORECASE,
)
LIMITED = re.compile(r"недоступ|ограничен|только аннотац|не получен", re.IGNORECASE)
PLACEHOLDER = re.compile(r"\b(TODO|TBD|lorem ipsum)\b|\[УКАЗАТЬ", re.IGNORECASE)
LOCATOR = re.compile(r"§|табл\.|рис\.|прил\.|приложени|Table|Figure", re.IGNORECASE)


def count_words(text):
    return sum(1 for token in text.split() if re.search(r"\w", token))


def check(wid):
    errors, warnings, stats = [], [], {}
    folder = FILES / "materials" / wid
    summary = folder / "summary.ru.md"
    meta_file = folder / "summary.meta.json"
    if not summary.is_file() or not meta_file.is_file():
        return ["нет summary.ru.md или summary.meta.json"], warnings, stats
    try:
        meta = json.loads(meta_file.read_text(encoding="utf-8-sig"))
    except ValueError as exc:
        return [f"summary.meta.json не читается: {exc}"], warnings, stats

    text = summary.read_text(encoding="utf-8-sig")
    lines = text.splitlines()

    if meta.get("work_id") != wid:
        errors.append("work_id в meta не совпадает с папкой")
    if meta.get("format") != 2:
        errors.append('в meta нет "format": 2')
    if meta.get("source_status") not in {"fulltext", "repository", "limited"}:
        errors.append("неизвестный source_status")
    if not re.match(r"https?://", meta.get("source_url") or ""):
        errors.append("нет source_url")
    if not meta.get("prepared_at"):
        errors.append("нет prepared_at")
    source_path = meta.get("source_path")
    if source_path and not (FILES / source_path).is_file():
        errors.append(f"нет файла {source_path}")
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(meta.get("rewritten_at", ""))):
        errors.append('нет "rewritten_at" в формате ГГГГ-ММ-ДД')
    short_words = count_words(meta.get("short") or "")
    stats["short_words"] = short_words
    if not 25 <= short_words <= 45:
        errors.append(f'"short": {short_words} слов, нужно 25–45')

    if not lines or not lines[0].startswith("# ") or not lines[0][2:].strip():
        errors.append("первая строка должна быть «# Название»")
    passport = []
    for line in lines[1:]:
        if line.startswith("## "):
            break
        if line.startswith("**"):
            passport.append(line)
    passport_text = "\n".join(passport)
    for label, pattern in (
        ("оригинал или «Оригинальное название»", r"Оригинал"),
        ("авторы", r"Автор"),
        ("прочитанный источник", r"прочитан|источник|fulltext"),
    ):
        if not re.search(pattern, passport_text):
            errors.append(f"в паспорте нет строки: {label}")
    for line in passport[:-1]:
        if not line.endswith("  "):
            warnings.append("в строке паспорта нет двух пробелов в конце")
            break

    starts = [i for i, line in enumerate(lines) if line.startswith("## ")]
    found = [lines[i][3:].strip() for i in starts]
    if found != HEADINGS:
        errors.append(f"заголовки ## не совпадают с шаблоном формата 2; найдено: {found}")
    bodies = {}
    for n, start in enumerate(starts):
        end = starts[n + 1] if n + 1 < len(starts) else len(lines)
        bodies[lines[start][3:].strip()] = "\n".join(lines[start + 1:end]).strip()

    annotation = bodies.get("Аннотация", "")
    ann_words = count_words(annotation)
    stats["annotation_words"] = ann_words
    if "\n\n" in annotation or any(line.startswith(("- ", "#")) for line in annotation.splitlines()):
        errors.append("аннотация должна быть одним абзацем")
    if not 90 <= ann_words <= 160:
        errors.append(f"аннотация {ann_words} слов, нужно 90–160")

    results = [line for line in bodies.get("Главные результаты", "").splitlines() if line.startswith("- ")]
    stats["results"] = len(results)
    if not 3 <= len(results) <= 5:
        errors.append(f"главных результатов {len(results)}, нужно 3–5 пунктов «- »")
    for line in results:
        if not LOCATOR.search(line):
            warnings.append(f"в результате нет локатора (§, табл., рис.): {line[:60]}…")

    if not bodies.get(HEADINGS[9], "").startswith(NOTE_8):
        errors.append("раздел 8 должен начинаться строкой " + NOTE_8)
    if "Главный вопрос и ответ" in text:
        errors.append("остался раздел «Главный вопрос и ответ» старого формата")
    if PLACEHOLDER.search(text):
        errors.append("есть заглушка (TODO, TBD или [УКАЗАТЬ…])")
    if not re.search(r"[А-Яа-яЁё]{4,}", text):
        errors.append("нет русского текста")
    if meta.get("source_status") == "limited" and not LIMITED.search(text[:2000]):
        errors.append("ограниченный источник: в начале нет заметной оговорки")

    total = count_words(text)
    stats["total_words"] = total
    if total < 700 or total > 2300:
        warnings.append(f"объём {total} слов: проверить полноту или сокращение")
    hits = DE_AI.findall(text)
    stats["de_ai"] = len(hits)
    if hits:
        warnings.append(f"слова из skills/de-ai: {len(hits)} (проверить по чек-листу)")

    for target in re.findall(r"\]\(([^)]+)\)", text):
        if re.match(r"(?:https?://|mailto:|#|/)", target):
            continue
        if not (folder / target.split("#", 1)[0]).exists():
            warnings.append(f"ссылка не найдена: {target}")

    card = FILES / "works" / f"{wid}.md"
    if not card.is_file() or "summary.ru.md" not in card.read_text(encoding="utf-8"):
        errors.append("в карточке works/ нет ссылки на summary.ru.md")
    return errors, warnings, stats


def main():
    parser = argparse.ArgumentParser(description="Проверка изложений формата 2 (только чтение).")
    parser.add_argument("ids", nargs="*")
    args = parser.parse_args()
    ids = args.ids
    if not ids:
        for meta_file in sorted((FILES / "materials").glob("*/summary.meta.json")):
            try:
                if json.loads(meta_file.read_text(encoding="utf-8-sig")).get("format") == 2:
                    ids.append(meta_file.parent.name)
            except ValueError:
                ids.append(meta_file.parent.name)
    failed = 0
    for wid in ids:
        errors, warnings, stats = check(wid)
        if errors:
            failed += 1
        print(
            f"{'FAIL' if errors else 'OK'} {wid} | аннотация {stats.get('annotation_words', '-')}"
            f" | результатов {stats.get('results', '-')} | всего {stats.get('total_words', '-')}"
            f" | short {stats.get('short_words', '-')} | de-ai {stats.get('de_ai', '-')}"
        )
        for message in errors:
            print(f"    ОШИБКА: {message}")
        for message in warnings:
            print(f"    внимание: {message}")
    print(f"проверено: {len(ids)}, с ошибками: {failed}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main())
