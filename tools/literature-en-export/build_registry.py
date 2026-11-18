"""Build the read-only EN snapshot from the current canonical registry."""
import hashlib
import json
import os
import re
import argparse
from pathlib import Path
import tempfile
import exporter
import pipeline_adapter

SITE = Path(__file__).resolve().parents[2]
REGISTRY = 'content/retellings/registry.json'


def build_registry(registry, root, scope='public'):
    if scope not in ('public', 'local'):
        exporter.fail('invalid_scope', 'Snapshot scope must be public or local.')
    if not isinstance(registry, dict) or not isinstance(registry.get('records'), list):
        exporter.fail('invalid_registry', 'Invalid canonical registry.')
    records = registry['records']
    if any(not isinstance(r, dict) or not isinstance(r.get('work_id'), str) or not re.fullmatch(r'[A-Za-z0-9._:-]+', r['work_id']) or r.get('catalog_state') not in ('published_catalog', 'attached', 'excluded') or 'review_decision' not in r for r in records):
        exporter.fail('invalid_registry', 'Invalid registry record.')
    if len({r['work_id'] for r in records}) != len(records):
        exporter.fail('invalid_registry', 'Duplicate registry work ID.')
    published = {r['work_id']: r for r in records if r['catalog_state'] == 'published_catalog'}
    aliases = {work_id: [] for work_id in published}
    for record in records:
        if record['catalog_state'] == 'attached':
            target = (record.get('curation') or {}).get('attached_to')
            if target not in published:
                exporter.fail('invalid_registry', 'Attached record has no published target.')
            aliases[target].append(record['work_id'])
        if record['review_decision'] is not None and record['catalog_state'] != 'published_catalog':
            exporter.fail('invalid_registry', 'Decision exists for a non-published work.')
    def catalog_fields(record):
        legacy = (record.get('provenance') or {}).get('legacy_remaining') or {}
        kind = record.get('kind')
        topics = legacy.get('topics', [])
        if kind is not None and (not isinstance(kind, str) or not kind):
            exporter.fail('invalid_registry', 'Invalid catalog kind.')
        if not isinstance(topics, list) or any(not isinstance(topic, str) or not topic for topic in topics):
            exporter.fail('invalid_registry', 'Invalid catalog topics.')
        return {'kind': kind, 'topics': sorted(set(topics))}

    empty = exporter.build({'works': [{'id': k, 'aliases': aliases[k], **catalog_fields(record)} for k, record in published.items()]}, root)
    out = {w['id']: w for w in empty['payload']['works']}
    for work_id, record in published.items():
        decision = record['review_decision']
        local_decision = record.get('integration_decision')
        if isinstance(local_decision, dict) and local_decision.get('format') == 'literature-local-integration-v1':
            if decision is not None:
                exporter.fail('invalid_registry_decision', 'A work cannot have both legacy and local integration decisions.')
            rights = record.get('publication_rights')
            if not isinstance(rights, dict) or set(rights) != {'local_research', 'public_export', 'basis', 'note'} or rights.get('local_research') != 'permitted' or rights.get('public_export') not in ('cleared_with_attribution', 'hold') or not isinstance(rights.get('note'), str) or not rights['note'].strip() or not isinstance(rights.get('basis'), list) or not rights['basis']:
                exporter.fail('invalid_publication_rights', 'Local integrations require a separate explicit rights record.')
            for index, item in enumerate(rights['basis']):
                if not isinstance(item, dict) or set(item) != {'path', 'sha256'}:
                    exporter.fail('invalid_publication_rights', f'Invalid rights evidence pin {index}.')
                try:
                    path = exporter.safe_path(Path(root).resolve(), item['path'])
                    raw = path.read_bytes()
                except (KeyError, OSError, exporter.ExportError):
                    exporter.fail('invalid_publication_rights', f'Rights evidence {index} is unavailable.')
                if not isinstance(item.get('sha256'), str) or not re.fullmatch(r'[0-9a-f]{64}', item['sha256']) or hashlib.sha256(raw).hexdigest() != item['sha256']:
                    exporter.fail('invalid_publication_rights', f'Rights evidence {index} hash mismatch.')
            if scope == 'local' or rights['public_export'] == 'cleared_with_attribution':
                verified = pipeline_adapter.build_locally_verified(local_decision, root, work_id,
                                                                    allow_cyrillic=(scope == 'local'))
                out[work_id] = verified['payload']['works'][0]
            continue
        if local_decision is not None:
            # Preserve the earlier non-acceptance/hold record used by the legacy
            # pilot. It is not a snapshot acceptance and has no local package pins.
            if isinstance(local_decision, dict) and local_decision.get('format') == 'literature-integrator-decision-v1' and decision is None:
                continue
            exporter.fail('invalid_registry_decision', 'Unsupported integration decision format.')
        if decision is None:
            continue
        # A recorded request for revision is explicitly non-acceptance.
        if isinstance(decision, dict) and set(decision) == {'status','review_path','review_sha256','reviewed_en','reviewed_ru','accepted'} and decision['status'] == 'revise' and decision['accepted'] is False and all(isinstance(decision[k], str) and decision[k] for k in ('review_path','reviewed_en','reviewed_ru')) and isinstance(decision['review_sha256'], str) and re.fullmatch(r'[a-f0-9]{64}', decision['review_sha256']) and isinstance(record.get('assignment'), dict) and record['assignment'].get('status') == 'revision_requested':
            continue
        # Proposed integration contract: these values must be the current canonical pointers.
        keys = {'format','package','review_path','review_sha256','ledger_path','ledger_sha256','review_decision_path','acceptance_path','acceptance_sha256'}
        if not isinstance(decision, dict) or set(decision) != keys or decision.get('format') != 'literature-registry-export-v1':
            exporter.fail('invalid_registry_decision', 'Unsupported or incomplete registry decision.')
        assignment = record.get('assignment')
        if not isinstance(assignment, dict) or assignment.get('ledger_path') != decision['ledger_path'] or assignment.get('ledger_sha256') != decision['ledger_sha256']:
            exporter.fail('invalid_registry_decision', 'Decision does not match the current canonical assignment.')
        item = {'id': work_id, 'aliases': aliases[work_id], **catalog_fields(record), 'accepted': decision['package']}
        verified = pipeline_adapter.build_verified({'works':[item]}, root, decision['review_path'], decision['ledger_path'], decision['review_sha256'], decision['ledger_sha256'], decision['review_decision_path'], decision['acceptance_path'], decision['acceptance_sha256'])
        out[work_id] = verified['payload']['works'][0]
    for work_id, work in out.items():
        kind = published[work_id].get('kind')
        if kind is not None and kind not in ('research','web_material','project','review','dataset'):
            exporter.fail('invalid_registry', 'Unsupported work kind.')
        work['kind'] = kind
    questions_path = SITE / 'content/analyses/schema/concept-questions-v1.3.json'
    questions_bytes = questions_path.read_bytes()
    questions = json.loads(questions_bytes.decode('utf-8-sig'), object_pairs_hook=exporter.unique_pairs)
    question_ids = [item.get('id') for item in questions.get('questions', []) if isinstance(item, dict)]
    if not question_ids or any(not isinstance(value, str) or not value for value in question_ids) or len(question_ids) != len(set(question_ids)):
        exporter.fail('invalid_concept_questions', 'Invalid concept question catalog.')
    if questions_path.read_bytes() != questions_bytes:
        exporter.fail('concept_questions_changed', 'The concept question catalog changed during the build.')
    payload = {
        'format': 'literature-en-snapshot-v1-draft',
        'concept_revision': questions.get('concept_revision'),
        'concept_questions_sha256': hashlib.sha256(questions_bytes).hexdigest(),
        'concept_question_ids': sorted(question_ids),
        'topic_ids': sorted({topic for work in out.values() for topic in work.get('topics', [])}),
        'works': [out[k] for k in sorted(out)],
    }
    return exporter.seal(payload)


def output_target(scope, output, root):
    root = Path(root).resolve()
    if output is None:
        return root / 'knowledge/en/snapshot.json'
    raw = Path(output)
    target = (raw if raw.is_absolute() else root / raw).resolve()
    if scope == 'local':
        staging = (root / 'content/analyses/pilot/orchestrator-staging').resolve()
        if target == staging or not target.is_relative_to(staging) or target.suffix.casefold() != '.json':
            exporter.fail('invalid_output', 'Local snapshots must be JSON files under content/analyses/pilot/orchestrator-staging/.')
    return target


def main(argv=None):
    parser = argparse.ArgumentParser(description='Build a local or public EN snapshot from the canonical registry.')
    parser.add_argument('--scope', choices=('public', 'local'), default='public')
    parser.add_argument('--output', type=Path, help='snapshot wrapper output path; local scope requires an explicit path')
    args = parser.parse_args(argv)
    if args.scope == 'local' and args.output is None:
        parser.error('--output is required for local scope')
    root = SITE.resolve()
    registry_path = root / REGISTRY
    registry_bytes = registry_path.read_bytes()
    registry = json.loads(registry_bytes.decode('utf-8-sig'), object_pairs_hook=exporter.unique_pairs, parse_constant=lambda _: exporter.fail('invalid_json', 'Invalid JSON number.'))
    snapshot = build_registry(registry, root, scope=args.scope)
    if registry_path.read_bytes() != registry_bytes:
        exporter.fail('registry_changed', 'The canonical registry changed during the build.')
    payload = exporter.encode(snapshot['payload'])
    wrapper = {'snapshot': snapshot['snapshot'], 'payload_json': payload.decode('utf8')}
    target = output_target(args.scope, args.output, root)
    target.parent.mkdir(parents=True, exist_ok=True)
    archive = target.parent / 'snapshots'
    archive.mkdir(exist_ok=True)
    # Content-addressed files are immutable; a changed existing file is an error.
    archive_file = archive / (snapshot['snapshot'][7:] + '.json')
    archived = exporter.encode(wrapper) + b'\n'
    try:
        with archive_file.open('xb') as stored:
            stored.write(archived)
    except FileExistsError:
        if archive_file.read_bytes() != archived:
            exporter.fail('snapshot_conflict', 'Existing snapshot does not match its identifier.')
    # Replace the complete file atomically, so a reader never sees half a snapshot.
    with tempfile.NamedTemporaryFile(dir=target.parent, delete=False) as file:
        temp = Path(file.name)
        try:
            file.write(exporter.encode(wrapper) + b'\n')
            file.close()
            os.replace(temp, target)
        finally:
            temp.unlink(missing_ok=True)
    print(json.dumps({'snapshot': snapshot['snapshot'], 'scope':args.scope, 'works':len(snapshot['payload']['works']), 'accepted':sum(w['status'] != 'unprocessed' for w in snapshot['payload']['works'])}))

if __name__ == '__main__':
    main()
