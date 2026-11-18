"""Draft, offline EN extraction. No network calls or publication side effects."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import sys

import jsonschema

SCHEMA = Path(__file__).resolve().parents[2] / 'content/analyses/schema/analysis.schema.v0.1.0.json'
NOTICE_SCHEMA = Path(__file__).resolve().parents[2] / 'content/analyses/schema/publication-attribution-notice.schema.v1.0.0.json'
FIELDS = {'findings', 'author_conclusions', 'publication_notice', 'prompts', 'concept_links', 'scores'}
ACCEPTED = {'accepted_full', 'accepted_partial'}
FINDING_KEYS = {'finding_id', 'claim_en', 'origin', 'condition', 'metric', 'value', 'unit', 'comparison', 'sample', 'uncertainty', 'limitations', 'evidence'}
ANSWER_KEYS = {'question_id', 'status', 'value', 'origin', 'evidence', 'searched_source_refs', 'note_en', 'record_refs'}
EVIDENCE_KEYS = {'source_id', 'source_version', 'locator', 'file_page', 'printed_page', 'source_hash', 'code_commit'}
CONCEPT_LINK_KEYS = {'concept_revision', 'concept_question_id', 'relation', 'section', 'explanation_en', 'evidence'}
SCORE_KEYS = {'dimension', 'value', 'basis_en', 'evidence', 'author', 'date', 'formula', 'analogues', 'concept_question_id', 'question_id'}

class ExportError(Exception):
    def __init__(self, code, message):
        super().__init__(message)
        self.code = code

def fail(code, message):
    raise ExportError(code, message)

def encode(value):
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(',', ':'), allow_nan=False).encode('utf-8')

def digest(value):
    return hashlib.sha256(encode(value)).hexdigest()

def seal(payload):
    return {'snapshot': 'sha256:' + digest(payload), 'payload': payload}

def read_json(path):
    try:
        return json.loads(path.read_text(encoding='utf-8-sig'), object_pairs_hook=unique_pairs, parse_constant=lambda _: fail('invalid_json', 'Invalid JSON number.'))
    except (OSError, UnicodeError, json.JSONDecodeError):
        fail('invalid_input', 'Unable to read valid JSON input.')

def unique_pairs(pairs):
    out = {}
    for k, v in pairs:
        if k in out: fail('invalid_json', 'Duplicate JSON key.')
        out[k] = v
    return out

def safe_path(root, relative):
    if not isinstance(relative, str) or not relative or Path(relative).is_absolute() or '..' in Path(relative).parts or ':' in relative or '\\' in relative:
        fail('invalid_path', 'Package path must be relative to the input root.')
    target = (root / relative).resolve()
    if not target.is_relative_to(root) or target == root:
        fail('invalid_path', 'Package path must be inside the input root.')
    return target

def project_evidence(items):
    return [{k:v for k,v in item.items() if k in EVIDENCE_KEYS} for item in items]

def project_score_evidence(items):
    """Preserve either structured evidence or the schema's compact source locators."""
    if not isinstance(items, list):
        fail('invalid_package', 'Score evidence must be an array.')
    if all(isinstance(item, dict) for item in items):
        return project_evidence(items)
    if all(isinstance(item, str) for item in items):
        return list(items)
    fail('invalid_package', 'Score evidence cannot mix structured objects and string locators.')

def project_record(record, keys):
    result = {k:v for k,v in record.items() if k in keys}
    result['evidence'] = project_evidence(record['evidence'])
    return result

def validate_publication_notice(notice, validator=None):
    validator = validator or jsonschema.Draft202012Validator(read_json(NOTICE_SCHEMA), format_checker=jsonschema.FormatChecker())
    if not isinstance(notice, dict) or list(validator.iter_errors(notice)):
        fail('invalid_publication_notice', 'Publication notice does not match publication-attribution-notice-v1.')
    source_ids = [item['source_id'] for item in notice['attributions']]
    if len(source_ids) != len(set(source_ids)):
        fail('invalid_publication_notice', 'Publication notice source IDs must be unique.')
    return notice

def build(manifest, root, verify_decision=None, *, allow_cyrillic=False, evidence_versions=None):
    """Manifest is a trusted editorial decision list, not an acceptance mechanism."""
    if not isinstance(manifest, dict) or set(manifest) != {'works'} or not isinstance(manifest['works'], list):
        fail('invalid_manifest', 'Invalid decision manifest.')
    try:
        schema = read_json(SCHEMA)
        validator = jsonschema.Draft202012Validator(schema)
        notice_validator = jsonschema.Draft202012Validator(read_json(NOTICE_SCHEMA), format_checker=jsonschema.FormatChecker())
        works, names = [], set()
        for item in manifest['works']:
            if not isinstance(item, dict) or set(item) - {'id','aliases','kind','topics','accepted'} or not isinstance(item.get('id'), str) or not item['id'] or not isinstance(item.get('aliases'), list) or any(not isinstance(a,str) or not a for a in item['aliases']) or (item.get('kind') is not None and not isinstance(item.get('kind'),str)) or not isinstance(item.get('topics', []), list) or any(not isinstance(t,str) or not t for t in item.get('topics', [])):
                fail('invalid_manifest', 'Invalid work entry.')
            for name in [item['id'], *item['aliases']]:
                if name in names: fail('invalid_manifest', 'Work IDs and aliases must be unique.')
                names.add(name)
            work = {'id':item['id'], 'aliases':sorted(item['aliases']), 'status':'unprocessed', 'kind':item.get('kind'), 'topics':sorted(set(item.get('topics', [])))}
            decision = item.get('accepted')
            if decision is not None:
                if not isinstance(decision, dict) or set(decision) != {'path','sha256','revision','status','language'} or decision['status'] not in ACCEPTED or decision['language'] != 'en' or not isinstance(decision['revision'],str) or not decision['revision'] or not isinstance(decision['sha256'],str) or not re.fullmatch('[0-9a-f]{64}', decision['sha256']):
                    fail('invalid_decision', 'Invalid accepted revision decision.')
                if verify_decision is None or verify_decision(item['id'], decision) is not True:
                    fail('unverified_decision', 'Accepted revision has not been verified by the editorial adapter.')
                path = safe_path(root, decision['path'])
                raw = path.read_bytes()
                if hashlib.sha256(raw).hexdigest() != decision['sha256']:
                    fail('hash_mismatch', 'Accepted package hash does not match.')
                package = json.loads(raw.decode('utf-8-sig'), object_pairs_hook=unique_pairs, parse_constant=lambda _: fail('invalid_json', 'Invalid JSON number.'))
                if not isinstance(package, dict) or not validator.is_valid(package): fail('invalid_package', 'Package does not satisfy the draft schema.')
                if package['work_id'] != item['id'] or package['revision'] != decision['revision'] or package['review']['status'] not in (decision['status'], 'not_reviewed'):
                    fail('revision_mismatch', 'Decision and package identity, revision or status differ.')
                findings = [project_record(f, FINDING_KEYS) for f in package['findings']]
                if any(not f['finding_id'] for f in findings) or len({f['finding_id'] for f in findings}) != len(findings): fail('invalid_package', 'Finding IDs must be nonempty and unique within a work.')
                sources = [{k:source[k] for k in ('source_id','version','hash','access','read_scope','url') if k in source} for source in package['sources']]
                source_keys = {(source['source_id'], source['version']) for source in sources}
                if len(source_keys) != len(sources): fail('invalid_package', 'Source identities must be unique.')
                allowed_versions = evidence_versions if isinstance(evidence_versions, dict) else {}
                source_ids = {source['source_id'] for source in sources}
                def evidence_known(item):
                    key = (item['source_id'], item['source_version'])
                    variants = allowed_versions.get(key[0], [])
                    return key in source_keys or (key[0] in source_ids and isinstance(variants, list) and key[1] in variants)
                for finding in findings:
                    if any(not evidence_known(e) for e in finding['evidence']): fail('invalid_package', 'Finding evidence references an unknown source version.')
                answers = package['answers']
                q75 = next(a for a in answers if a['question_id'] == 'Q75')
                if any(not evidence_known(e) for answer in answers for e in answer['evidence']): fail('invalid_package', 'Answer evidence references an unknown source version.')
                # Prompt text is not exported until original/translation rights have a defined contract.
                concept_links = [{k:v for k,v in link.items() if k in CONCEPT_LINK_KEYS} for link in package.get('concept_links', [])]
                scores = []
                for score in package.get('scores', []):
                    projected = {k:v for k,v in score.items() if k in SCORE_KEYS}
                    if isinstance(score.get('evidence'), list):
                        projected['evidence'] = project_score_evidence(score['evidence'])
                    scores.append(projected)
                data = {'findings': sorted(findings, key=lambda f:f['finding_id']), 'author_conclusions':project_record(q75, ANSWER_KEYS), 'answers': sorted([project_record(answer, ANSWER_KEYS) for answer in answers], key=lambda answer:answer['question_id']), 'prompts':{'status':'not_available', 'reason':'Prompt publication and translation policy is not defined.'}, 'concept_links':concept_links, 'scores':scores, 'sources': sources, 'results_extraction_scope': {k:package['results_extraction_scope'][k] for k in ('checked','omitted','limitations')}}
                if 'publication_notice' in package:
                    data['publication_notice'] = validate_publication_notice(package['publication_notice'], notice_validator)
                # This is a conservative leak guard, not a language classifier.
                if not allow_cyrillic and re.search('[\u0400-\u052f]', json.dumps(data, ensure_ascii=False)):
                    fail('language_guard', 'Selected EN data contains Cyrillic text; editorial review is required.')
                work.update(status=decision['status'], revision=decision['revision'], package_sha256=decision['sha256'], schema_version=package['schema_version'], concept_revision=package['concept_revision'], data=data)
            works.append(work)
        return seal({'format':'literature-en-snapshot-v1-draft', 'works':sorted(works, key=lambda w:w['id'])})
    except (OSError, UnicodeError, json.JSONDecodeError, KeyError, TypeError, ValueError):
        fail('invalid_input', 'Unable to read or validate input.')

def query(snapshot, *, ids=None, scope=None, fields=None):
    if not isinstance(snapshot,dict) or set(snapshot) != {'snapshot','payload'} or snapshot['snapshot'] != 'sha256:' + digest(snapshot['payload']):
        fail('invalid_snapshot', 'Snapshot integrity check failed.')
    if (ids is None) == (scope is None) or (scope is not None and scope != 'all') or (ids is not None and (not isinstance(ids,list) or any(not isinstance(x,str) or not x for x in ids))):
        fail('invalid_selection', 'Choose either IDs or scope all.')
    if not isinstance(fields,list) or not fields or any(not isinstance(f,str) or f not in FIELDS for f in fields) or len(set(fields)) != len(fields):
        fail('invalid_fields', 'Choose unique supported fields.')
    try:
        works = snapshot['payload']['works']
        index = {name:w['id'] for w in works for name in [w['id'], *w['aliases']]}
        selected, unknown, duplicates = set(), set(), set()
        for name in (index if scope == 'all' else ids):
            canonical = index.get(name)
            if canonical is None: unknown.add(name)
            elif canonical in selected: duplicates.add(canonical)
            else: selected.add(canonical)
        if scope == 'all': duplicates.clear()
        chosen = [w for w in works if w['id'] in selected]
        result = []
        for w in chosen:
            if w['status'] in ACCEPTED:
                record = {k:w[k] for k in ('id','status','revision','package_sha256','schema_version','concept_revision')}
                record['kind'] = w.get('kind')
                record['topics'] = w.get('topics', [])
                record['results_extraction_scope'] = w['data']['results_extraction_scope']
                if 'sources' in w['data']: record['sources'] = w['data']['sources']
                record.update({f:w['data'].get(f) for f in sorted(fields)})
                if 'publication_notice' in w['data']:
                    record['publication_notice'] = validate_publication_notice(w['data']['publication_notice'])
                result.append(record)
        return {'snapshot':snapshot['snapshot'], 'selection':{'ids':sorted(selected), 'fields':sorted(fields), 'language':'en'}, 'coverage':{'expected_ids':sorted(selected), 'found_ids':[w['id'] for w in chosen if w['status'] in ACCEPTED], 'full_ids':[w['id'] for w in chosen if w['status']=='accepted_full'], 'partial_ids':[w['id'] for w in chosen if w['status']=='accepted_partial'], 'unprocessed_ids':[w['id'] for w in chosen if w['status']=='unprocessed'], 'unknown_ids':sorted(unknown), 'duplicate_ids':sorted(duplicates)}, 'works':result, 'complete':True}
    except (KeyError, TypeError):
        fail('invalid_snapshot', 'Snapshot structure is invalid.')

def main():
    parser = argparse.ArgumentParser(description='Offline draft EN export')
    sub = parser.add_subparsers(dest='command', required=True)
    b = sub.add_parser('build'); b.add_argument('--manifest', required=True); b.add_argument('--root', required=True)
    q = sub.add_parser('query'); q.add_argument('--snapshot', required=True); sel = q.add_mutually_exclusive_group(required=True); sel.add_argument('--all', action='store_true'); sel.add_argument('--ids', nargs='+'); q.add_argument('--fields', nargs='+', required=True)
    args = parser.parse_args()
    try:
        result = build(read_json(Path(args.manifest)), Path(args.root).resolve()) if args.command == 'build' else query(read_json(Path(args.snapshot)), ids=args.ids, scope='all' if args.all else None, fields=args.fields)
        sys.stdout.buffer.write(encode(result) + b'\n')
    except ExportError as e:
        sys.stderr.buffer.write(encode({'error':{'code':e.code,'message':str(e)}}) + b'\n'); return 1
    return 0

if __name__ == '__main__': sys.exit(main())
