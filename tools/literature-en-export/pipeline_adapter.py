"""Read-only, fail-closed bridge to the pipeline's mechanical validator.

The caller must supply a trusted, immutable snapshot and independently pinned
hashes from the integrator's current canonical records. The preflight callback
always denies; build_verified additionally checks experimental v1 decisions.
"""
import hashlib
import importlib.util
import json
from pathlib import Path
import re
import tempfile

import exporter

PIPELINE = Path(__file__).resolve().parents[1] / 'literature-pipeline' / 'validate.py'
spec = importlib.util.spec_from_file_location('literature_pipeline_validate', PIPELINE)
validator = importlib.util.module_from_spec(spec)
spec.loader.exec_module(validator)


def sha(raw):
    return hashlib.sha256(raw).hexdigest()


def preflight(root, review_path, ledger_path, review_sha256, ledger_sha256, work_id, decision):
    """Check a pinned snapshot; return diagnostics, never an acceptance decision."""
    errors = []
    try:
        root = Path(root).resolve(strict=True)
        review = exporter.safe_path(root, review_path)
        ledger = exporter.safe_path(root, ledger_path)
        review_bytes, ledger_bytes = review.read_bytes(), ledger.read_bytes()
        for label, raw, expected in (('review', review_bytes, review_sha256), ('assignments', ledger_bytes, ledger_sha256)):
            if not isinstance(expected, str) or not re.fullmatch(r'[0-9a-f]{64}', expected) or sha(raw) != expected:
                errors.append(f'{label}: trusted snapshot hash mismatch')
        manifest = json.loads(review_bytes.decode('utf-8-sig'), object_pairs_hook=exporter.unique_pairs, parse_constant=lambda _: exporter.fail('invalid_json', 'Invalid JSON number.'))
        assignments = json.loads(ledger_bytes.decode('utf-8-sig'), object_pairs_hook=exporter.unique_pairs, parse_constant=lambda _: exporter.fail('invalid_json', 'Invalid JSON number.'))
        if not isinstance(manifest, dict) or not isinstance(assignments, dict):
            raise ValueError('manifest and assignments must be objects')
        if manifest.get('work_id') != work_id:
            errors.append('review: work ID mismatch')
        if not isinstance(decision, dict) or set(decision) != {'path', 'sha256', 'revision', 'status', 'language'}:
            raise ValueError('invalid export decision')
        if decision.get('language') != 'en' or decision.get('status') not in exporter.ACCEPTED:
            errors.append('export: unsupported language or publication status')
        en = manifest.get('en')
        if not isinstance(en, dict) or en.get('path') != decision.get('path') or en.get('sha256') != decision.get('sha256'):
            errors.append('export: EN path or hash differs from review manifest')
        entries = [en] + (manifest.get('ru') if isinstance(manifest.get('ru'), list) else []) + (manifest.get('sources') if isinstance(manifest.get('sources'), list) else [])
        # Freeze exactly the bytes used by the validator; no later reads from root.
        with tempfile.TemporaryDirectory() as temp:
            frozen = Path(temp)
            for relative, raw in ((review_path, review_bytes), (ledger_path, ledger_bytes)):
                dest = exporter.safe_path(frozen, relative)
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_bytes(raw)
            for entry in entries:
                if not isinstance(entry, dict):
                    continue
                relative = entry.get('path')
                source = exporter.safe_path(root, relative)
                dest = exporter.safe_path(frozen, relative)
                if dest.exists():
                    raise ValueError('duplicate or conflicting snapshot path')
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_bytes(source.read_bytes())
            checks = validator.validate(frozen / review_path, frozen, frozen / ledger_path)
            if isinstance(en, dict):
                package = exporter.read_json(exporter.safe_path(frozen, en.get('path')))
                # Separate decisions can accept the unchanged author draft.
                if isinstance(package, dict) and isinstance(package.get('review'), dict) and package['review'].get('status') == 'not_reviewed':
                    checks = [e for e in checks if e != 'analysis review must match reviewer and be accepted_full or accepted_partial']
                source_ids = [s.get('source_id') for s in package.get('sources', []) if isinstance(s, dict)] if isinstance(package, dict) else []
                checked_ids = [s.get('source_id') for s in manifest.get('sources', []) if isinstance(s, dict)]
                if len(source_ids) != len(checked_ids) or set(source_ids) != set(checked_ids):
                    errors.append('sources: every declared source requires a pinned file')
                if not isinstance(package, dict) or package.get('work_id') != work_id or package.get('revision') != decision.get('revision'):
                    errors.append('export: work ID or revision mismatch')
                elif not isinstance(package.get('review'), dict) or package['review'].get('status') not in (decision.get('status'), 'not_reviewed'):
                    errors.append('export: publication status mismatch')
            errors.extend(checks)
    except (OSError, ValueError, TypeError, KeyError, UnicodeError, exporter.ExportError) as exc:
        errors.append(f'snapshot input invalid: {type(exc).__name__}')
    errors.append('independent review decision and final acceptance contract unavailable')
    return {'verified': False, 'errors': errors}


def build_locally_verified(registry_decision, root, work_id, *, allow_cyrillic=False):
    """Build one local-only work from a pinned integrator decision.

    Scientific status comes from the canonical integrator record. This adapter
    verifies its pins and mechanical package contract; it does not require a
    separate Russian author, distinct identities, or public-rights clearance.
    """
    root = Path(root).resolve(strict=True)
    decision_keys = {
        'format', 'package', 'manifest_path', 'manifest_sha256',
        'acceptance_path', 'acceptance_sha256',
    }
    if not isinstance(registry_decision, dict) or set(registry_decision) != decision_keys:
        exporter.fail('invalid_local_decision', 'Incomplete local integration decision.')
    if registry_decision.get('format') != 'literature-local-integration-v1':
        exporter.fail('invalid_local_decision', 'Unsupported local integration decision.')

    try:
        with tempfile.TemporaryDirectory() as temp:
            frozen = Path(temp).resolve()
            copied = {}

            def copy(relative, expected, label):
                if not isinstance(relative, str) or not isinstance(expected, str) or not re.fullmatch(r'[0-9a-f]{64}', expected):
                    raise ValueError(f'{label}: invalid pin')
                if relative not in copied:
                    source = exporter.safe_path(root, relative)
                    raw = source.read_bytes()
                    if sha(raw) != expected:
                        raise ValueError(f'{label}: SHA-256 mismatch')
                    dest = exporter.safe_path(frozen, relative)
                    if dest.exists():
                        raise ValueError(f'{label}: duplicate path')
                    dest.parent.mkdir(parents=True, exist_ok=True)
                    dest.write_bytes(raw)
                    copied[relative] = raw
                elif sha(copied[relative]) != expected:
                    raise ValueError(f'{label}: conflicting pins')
                return copied[relative]

            claim = registry_decision['package']
            claim_keys = {'path', 'sha256', 'revision', 'status', 'language'}
            if not isinstance(claim, dict) or set(claim) != claim_keys or claim.get('language') != 'en' or claim.get('status') not in exporter.ACCEPTED:
                raise ValueError('invalid package claim')
            copy(registry_decision['acceptance_path'], registry_decision['acceptance_sha256'], 'acceptance')
            copy(registry_decision['manifest_path'], registry_decision['manifest_sha256'], 'manifest')
            acceptance = exporter.read_json(frozen / registry_decision['acceptance_path'])
            manifest = exporter.read_json(frozen / registry_decision['manifest_path'])
            expected_acceptance_keys = {
                'format', 'work_id', 'package', 'manifest', 'russian',
                'scientific_basis', 'review_basis', 'verification',
            }
            if not isinstance(acceptance, dict) or set(acceptance) != expected_acceptance_keys or acceptance.get('format') != 'literature-local-acceptance-v1':
                raise ValueError('invalid acceptance record')
            if acceptance.get('work_id') != work_id or acceptance.get('package') != claim:
                raise ValueError('acceptance identity or package claim mismatch')
            if acceptance.get('manifest') != {'path': registry_decision['manifest_path'], 'sha256': registry_decision['manifest_sha256']}:
                raise ValueError('acceptance manifest pin mismatch')
            if not isinstance(manifest, dict) or manifest.get('work_id') != work_id:
                raise ValueError('manifest work ID mismatch')
            if manifest.get('en') != {'path': claim['path'], 'sha256': claim['sha256']}:
                # Allow conventional extra metadata such as byte length while
                # requiring the canonical path and full-file digest to match.
                en = manifest.get('en')
                if not isinstance(en, dict) or en.get('path') != claim['path'] or en.get('sha256') != claim['sha256']:
                    raise ValueError('manifest EN pin mismatch')

            russian = acceptance.get('russian')
            if not isinstance(russian, dict) or russian.keys() - {'full', 'short'}:
                raise ValueError('invalid Russian artifact pins')
            ru_items = manifest.get('ru', [])
            if isinstance(ru_items, dict):
                ru_items = [ru_items]
            if not isinstance(ru_items, list):
                raise ValueError('invalid Russian manifest')
            ru_by_role = {entry.get('role'): entry for entry in ru_items if isinstance(entry, dict) and isinstance(entry.get('role'), str)}
            if len(ru_by_role) != len(ru_items):
                raise ValueError('Russian manifest roles must be unique and explicit')
            for role in ('full', 'short'):
                pin = russian.get(role)
                entry = ru_by_role.get(role)
                if pin is None:
                    if role == 'short' and claim['status'] == 'accepted_full':
                        raise ValueError('accepted_full requires Russian short text')
                    if entry is not None:
                        raise ValueError(f'unexpected Russian {role} artifact')
                    continue
                if not isinstance(pin, dict) or set(pin) != {'path', 'sha256'} or entry is None or entry.get('path') != pin.get('path') or entry.get('sha256') != pin.get('sha256'):
                    raise ValueError(f'Russian {role} pin mismatch')
                raw = copy(pin['path'], pin['sha256'], f'Russian {role}')
                text = raw.decode('utf-8-sig').strip()
                if not text or not re.search('[\u0400-\u052f]', text):
                    raise ValueError(f'Russian {role} text is empty or not Russian')

            basis = acceptance.get('scientific_basis')
            if not isinstance(basis, list) or not basis:
                raise ValueError('scientific basis is required')
            for index, item in enumerate(basis):
                if not isinstance(item, dict) or set(item) != {'path', 'sha256', 'scope'} or not isinstance(item.get('scope'), str) or not item['scope'].strip():
                    raise ValueError(f'invalid scientific basis item {index}')
                copy(item['path'], item['sha256'], f'scientific basis {index}')
            if not isinstance(acceptance.get('review_basis'), str) or not acceptance['review_basis'].strip():
                raise ValueError('review basis is required')
            verification = acceptance.get('verification')
            required_checks = {'schema_valid', 'q01_q90_complete', 'source_and_evidence_pins'}
            if not isinstance(verification, dict) or set(verification) != required_checks or any(verification.get(key) is not True for key in required_checks):
                raise ValueError('integrator verification declaration is incomplete')

            en = copy(claim['path'], claim['sha256'], 'EN package')
            # Freeze every declared source and Russian text before validating.
            sources = manifest.get('sources')
            if not isinstance(sources, list):
                raise ValueError('manifest sources must be a list')
            evidence_versions = {entry['source_id']: entry.get('evidence_versions', [])
                                 for entry in sources if isinstance(entry, dict) and isinstance(entry.get('source_id'), str)}
            for index, entry in enumerate(ru_items):
                if not isinstance(entry, dict):
                    raise ValueError(f'invalid Russian manifest item {index}')
                copy(entry.get('path'), entry.get('sha256'), f'Russian manifest item {index}')
            for index, entry in enumerate(sources):
                if not isinstance(entry, dict):
                    raise ValueError(f'invalid source manifest item {index}')
                if entry.get('path') is not None:
                    copy(entry.get('path'), entry.get('sha256'), f'source manifest item {index}')

            checks = validator.validate(frozen / registry_decision['manifest_path'], frozen)
            if checks:
                raise ValueError('; '.join(checks))
            package = json.loads(en.decode('utf-8-sig'), object_pairs_hook=exporter.unique_pairs,
                                 parse_constant=lambda _: exporter.fail('invalid_json', 'Invalid JSON number.'))
            if not isinstance(package, dict) or package.get('work_id') != work_id or package.get('revision') != claim['revision'] or package.get('review', {}).get('status') not in (claim['status'], 'not_reviewed'):
                raise ValueError('analysis identity, revision, or status mismatch')
            item = {'id': work_id, 'aliases': [], 'accepted': claim}
            return exporter.build({'works': [item]}, frozen,
                                  lambda candidate, proposed: candidate == work_id and proposed == claim,
                                  allow_cyrillic=allow_cyrillic,
                                  evidence_versions=evidence_versions)
    except exporter.ExportError:
        raise
    except (OSError, UnicodeError, ValueError, TypeError, KeyError, AttributeError) as exc:
        exporter.fail('unverified_local_decision', f'Local integration could not be verified: {type(exc).__name__}')


class PipelineAdapter:
    """Callback compatible with exporter.build; diagnostics available in last_report."""
    def __init__(self, root, review_path, ledger_path, review_sha256, ledger_sha256):
        self.root, self.review_path, self.ledger_path = root, review_path, ledger_path
        self.review_sha256, self.ledger_sha256 = review_sha256, ledger_sha256
        self.last_report = None

    def __call__(self, work_id, decision):
        self.last_report = preflight(self.root, self.review_path, self.ledger_path,
                                     self.review_sha256, self.ledger_sha256, work_id, decision)
        return self.last_report['verified']


def build_verified(manifest, root, review_path, ledger_path, review_sha256, ledger_sha256,
                   review_decision_path, acceptance_path, acceptance_sha256):
    """Build from a private copy pinned by an operator-trusted acceptance digest.

    The caller must obtain the current acceptance digest from an independent,
    authenticated authority; a hash supplied by an author is not authorization.
    """
    root = Path(root).resolve(strict=True)
    works = manifest.get('works') if isinstance(manifest, dict) else None
    if not isinstance(works, list) or len(works) != 1 or not isinstance(works[0], dict) or 'accepted' not in works[0]:
        exporter.fail('invalid_manifest', 'The adapter currently supports exactly one accepted work.')
    item = works[0]
    try:
        with tempfile.TemporaryDirectory() as temp:
            frozen = Path(temp).resolve()
            copied = {}
            def copy(relative):
                source = exporter.safe_path(root, relative)
                dest = exporter.safe_path(frozen, relative)
                if relative not in copied:
                    if dest.exists():
                        raise ValueError('conflicting snapshot paths')
                    raw = source.read_bytes()
                    dest.parent.mkdir(parents=True, exist_ok=True)
                    dest.write_bytes(raw)
                    copied[relative] = raw
                return copied[relative]
            copy(review_path)
            copy(ledger_path)
            copy(review_decision_path)
            acceptance_bytes = copy(acceptance_path)
            if not isinstance(acceptance_sha256, str) or not re.fullmatch(r'[0-9a-f]{64}', acceptance_sha256) or sha(acceptance_bytes) != acceptance_sha256:
                raise ValueError('trusted acceptance hash mismatch')
            review = exporter.read_json(frozen / review_path)
            if not isinstance(review, dict):
                raise ValueError('invalid review manifest')
            for entry in [review.get('en')] + (review.get('ru') if isinstance(review.get('ru'), list) else []) + (review.get('sources') if isinstance(review.get('sources'), list) else []):
                if not isinstance(entry, dict):
                    raise ValueError('invalid artifact')
                copy(entry.get('path'))
            report = preflight(frozen, review_path, ledger_path, review_sha256, ledger_sha256, item.get('id'), item['accepted'])
            errors = report['errors'][:-1]
            decision = exporter.read_json(frozen / review_decision_path)
            acceptance = exporter.read_json(frozen / acceptance_path)
            ledger = exporter.read_json(frozen / ledger_path)
            work_id = item.get('id')
            claim = item['accepted']
            common = {'work_id':work_id, 'revision':claim.get('revision'), 'status':claim.get('status'),
                      'review_manifest_sha256':review_sha256, 'assignments_sha256':ledger_sha256}
            decision_keys = {'format','work_id','revision','status','review_manifest_sha256','assignments_sha256','reviewer','decision','english_reviewed','publication_rights_checked'}
            acceptance_keys = {'format','work_id','revision','status','review_manifest_sha256','assignments_sha256','review_decision_sha256','integrator','decision'}
            if not isinstance(decision, dict) or set(decision) != decision_keys or decision.get('format') != 'literature-review-decision-v1' or any(decision.get(k) != v for k,v in common.items()) or decision.get('decision') != 'accept' or decision.get('english_reviewed') is not True or decision.get('publication_rights_checked') is not True or decision.get('reviewer') != review.get('reviewer'):
                errors.append('independent reviewer decision invalid or does not match snapshot')
            if not isinstance(acceptance, dict) or set(acceptance) != acceptance_keys or acceptance.get('format') != 'literature-integrator-acceptance-v1' or any(acceptance.get(k) != v for k,v in common.items()) or acceptance.get('decision') != 'accept' or acceptance.get('review_decision_sha256') != sha(copied[review_decision_path]):
                errors.append('integrator acceptance invalid or does not match snapshot')
            actors = [ledger.get(work_id, {}).get(role, {}).get('actor') for role in ('en','ru','review')] if isinstance(ledger, dict) else []
            if (frozen / review_decision_path).parent.resolve() != (frozen / review_path).parent.resolve():
                errors.append('review decision must be in the assigned review directory')
            integrator = acceptance.get('integrator') if isinstance(acceptance, dict) else None
            if not isinstance(integrator, str) or not integrator.strip() or any(not isinstance(a,str) or integrator.strip().casefold() == a.strip().casefold() for a in actors):
                errors.append('integrator must differ from all assigned actors')
            if errors:
                exporter.fail('unverified_decision', '; '.join(errors))
            return exporter.build(manifest, frozen, lambda work, proposed: work == work_id and proposed == claim)
    except exporter.ExportError:
        raise
    except (OSError, UnicodeError, ValueError, TypeError, KeyError, AttributeError):
        exporter.fail('unverified_decision', 'Invalid or incomplete trusted snapshot.')
