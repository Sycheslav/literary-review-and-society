---
id: github-amit-sarker-tasman-text
type: material
title: amit-sarker/TASMAN
work_id: github-amit-sarker-tasman
source_url: https://raw.githubusercontent.com/amit-sarker/TASMAN/main/README.md
retrieved_at: '2026-10-27'
conversion: author_readme
quality_note: README репозитория, а не полный текст научной статьи. Относительные
  ссылки разрешаются относительно исходного репозитория.
language: original
sha256_text: fd6ad0d4a1f019692a7877d3d704a1eb13f2238e3d9f6709923b4339e336702f
---

> Источник: [https://raw.githubusercontent.com/amit-sarker/TASMAN/main/README.md](https://raw.githubusercontent.com/amit-sarker/TASMAN/main/README.md). README репозитория, а не полный текст научной статьи. Относительные ссылки разрешаются относительно исходного репозитория.

# Running the Experiments

Run all commands from the code directory.

1. Create a Python 3.11 environment and install dependencies:

   ```bash
   python3.11 -m venv .venv
   source .venv/bin/activate
   python -m pip install -r requirements.txt
   ```

2. In `config/model_registry.yaml`, enter the deployment endpoint where applicable and set `api_key_env` to the name of its API-key environment variable. Export that variable or place it in an untracked `.env` file:

   ```bash
   export MY_MODEL_API_KEY="your-api-key"
   ```

3. In `config/game_config.yaml`, select the model assignments, scenario paths, trust mode (`none`, `metrics`, `freeform`, or `brs`), guidance level (`scores_only` for (S) or `prescriptive` for (S+P)), and number of parallel workers. See details in `config/game_config.yaml` file's comment.

4. Check the configuration without making API calls:

   ```bash
   python -m src.main --config config/game_config.yaml --episodes 1 --trajectories 1 --out-dir logs/dry_run --dry-run
   ```

5. Run the experiment:

   ```bash
   python -m src.main --config config/game_config.yaml --episodes 20 --trajectories 10 --out-dir logs/RUN_NAME --no-console
   ```

   To continue an interrupted run, use the same command and output directory with `--resume`.

