"""Prepare disjoint editorial assignments; never generate article content."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
works = json.loads((ROOT / "data/works.json").read_text(encoding="utf-8"))
details = json.loads((ROOT / "data/details.json").read_text(encoding="utf-8"))
full = [w for w in works if details[w["id"]]["textPath"]]
missing = [w for w in works if not details[w["id"]]["textPath"]]
batches = [full[i:i + 14] for i in range(0, len(full), 14)] + [missing[:14], missing[14:]]
out = ROOT / "content/retellings/batches"
out.mkdir(parents=True, exist_ok=True)
for i, batch in enumerate(batches, 1):
    entries = [dict(w, textPath=details[w["id"]]["textPath"],
                    url=details[w["id"]]["url"], cardPath="works/" + w["id"] + ".md")
               for w in batch]
    (out / f"{i:02}.json").write_text(json.dumps(entries, ensure_ascii=False, indent=2), encoding="utf-8")
print([(i, len(b)) for i, b in enumerate(batches, 1)])
