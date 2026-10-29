"""Mirror reviewed retellings to the sibling research corpus, preserving old files."""
from pathlib import Path
import json
import shutil

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public/corpus/files"
CORPUS = ROOT.parent
BACKUP = CORPUS / "service/cache/retelling-sync-backup-2026-10-29"


def copy(relative):
    source = PUBLIC / relative
    target = CORPUS / relative
    if not source.is_file():
        raise FileNotFoundError(source)
    if target.is_file():
        if target.read_bytes() == source.read_bytes():
            return 0
        backup = BACKUP / relative
        if not backup.exists():
            backup.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(target, backup)
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, target)
    return 1


def main():
    works = json.loads((ROOT / "data/works.json").read_text(encoding="utf-8"))
    details = json.loads((ROOT / "data/details.json").read_text(encoding="utf-8"))
    changed = ready = 0
    for work in works:
        summary = details[work["id"]].get("summaryPath")
        if not summary:
            continue
        meta = str(Path(summary).with_name("summary.meta.json")).replace("\\", "/")
        if not (PUBLIC / meta).is_file():
            continue
        metadata = json.loads((PUBLIC / meta).read_text(encoding="utf-8-sig"))
        ready += 1
        paths = {summary, meta, "works/" + work["id"] + ".md"}
        if metadata.get("source_path"):
            paths.add(metadata["source_path"])
        for relative in paths:
            if not (PUBLIC / relative).resolve().is_relative_to(PUBLIC.resolve()):
                raise ValueError("Source outside public corpus: " + relative)
            changed += copy(relative)
    print(f"reviewed_works={ready} updated_files={changed}; prior versions preserved in service/cache")


if __name__ == "__main__":
    main()
