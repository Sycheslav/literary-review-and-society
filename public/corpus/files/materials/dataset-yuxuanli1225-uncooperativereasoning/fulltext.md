---
id: dataset-yuxuanli1225-uncooperativereasoning-text
type: material
title: YuxuanLi1225/UncooperativeReasoning · Datasets at Hugging Face
work_id: dataset-yuxuanli1225-uncooperativereasoning
source_url: https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: HTML-конверсия страницы источника. Для проекта или блога это текст страницы;
  научный полный текст подтверждается отдельно.
language: original
sha256_text: 60abcce258b69be60f9df238270541e0fe15e439d6cd62113b4349946e831ccc
---

> Источник: [https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning](https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning). HTML-конверсия страницы источника. Для проекта или блога это текст страницы; научный полный текст подтверждается отдельно.

# [Datasets:](https://huggingface.co/datasets) --- [YuxuanLi1225](https://huggingface.co/YuxuanLi1225) / [UncooperativeReasoning](https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning)

[Dataset card](https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning)  [Data Studio](https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning/viewer/)  [Files Files and versions  

xet](https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning/tree/main)  [Community](https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning/discussions)

Dataset Preview

     [Duplicate](https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning?duplicate=true)

 

Subset (1)

default

default 

Split (1)

train

train

The full dataset viewer is not available (click to read why). Only showing a preview of the rows.

The dataset generation failed because of a cast error

```
Error code:   DatasetGenerationCastError
Exception:    DatasetGenerationCastError
Message:      An error occurred while generating the dataset

All the data files must have the same columns, but at some point there are 14 new columns ({'2', '6', '3', '4', '7', '8', '9', '14', '15', '12', '11', '5', '13', '10'}) and 4 missing columns ({'time', 'game', 'model', 'response'}).

This happened while the json dataset builder was generating data using

hf://datasets/YuxuanLi1225/UncooperativeReasoning/data/OpenAI/cot.json (at revision c014aa20fc1c6c3fc7f5cfc44d0dcd5585df4917)

Please either edit the data files to have matching columns, or separate them into different configurations (see docs at https://hf.co/docs/hub/datasets-manual-configuration#multiple-configurations)
Traceback:    Traceback (most recent call last):
                File "/src/services/worker/.venv/lib/python3.9/site-packages/datasets/builder.py", line 1831, in _prepare_split_single
                  writer.write_table(table)
                File "/src/services/worker/.venv/lib/python3.9/site-packages/datasets/arrow_writer.py", line 644, in write_table
                  pa_table = table_cast(pa_table, self._schema)
                File "/src/services/worker/.venv/lib/python3.9/site-packages/datasets/table.py", line 2272, in table_cast
                  return cast_table_to_schema(table, schema)
                File "/src/services/worker/.venv/lib/python3.9/site-packages/datasets/table.py", line 2218, in cast_table_to_schema
                  raise CastError(
              datasets.table.CastError: Couldn't cast
              2: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              3: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              4: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              5: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              6: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              7: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              8: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              9: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              10: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              11: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              12: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              13: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              14: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              15: struct<conclusion: string, reasoning: list<item: string>>
                child 0, conclusion: string
                child 1, reasoning: list<item: string>
                    child 0, item: string
              -- schema metadata --
              pandas: '{"index_columns": [], "column_indexes": [], "columns": [{"name":' + 1501
              to
              {'model': Value('string'), 'game': Value('string'), 'response': Value('string'), 'time': Value('float64')}
              because column names don't match
              
              During handling of the above exception, another exception occurred:
              
              Traceback (most recent call last):
                File "/src/services/worker/src/worker/job_runners/config/parquet_and_info.py", line 1456, in compute_config_parquet_and_info_response
                  parquet_operations = convert_to_parquet(builder)
                File "/src/services/worker/src/worker/job_runners/config/parquet_and_info.py", line 1055, in convert_to_parquet
                  builder.download_and_prepare(
                File "/src/services/worker/.venv/lib/python3.9/site-packages/datasets/builder.py", line 894, in download_and_prepare
                  self._download_and_prepare(
                File "/src/services/worker/.venv/lib/python3.9/site-packages/datasets/builder.py", line 970, in _download_and_prepare
                  self._prepare_split(split_generator, **prepare_split_kwargs)
                File "/src/services/worker/.venv/lib/python3.9/site-packages/datasets/builder.py", line 1702, in _prepare_split
                  for job_id, done, content in self._prepare_split_single(
                File "/src/services/worker/.venv/lib/python3.9/site-packages/datasets/builder.py", line 1833, in _prepare_split_single
                  raise DatasetGenerationCastError.from_cast_error(
              datasets.exceptions.DatasetGenerationCastError: An error occurred while generating the dataset
              
              All the data files must have the same columns, but at some point there are 14 new columns ({'2', '6', '3', '4', '7', '8', '9', '14', '15', '12', '11', '5', '13', '10'}) and 4 missing columns ({'time', 'game', 'model', 'response'}).
              
              This happened while the json dataset builder was generating data using
              
              hf://datasets/YuxuanLi1225/UncooperativeReasoning/data/OpenAI/cot.json (at revision c014aa20fc1c6c3fc7f5cfc44d0dcd5585df4917)
              
              Please either edit the data files to have matching columns, or separate them into different configurations (see docs at https://hf.co/docs/hub/datasets-manual-configuration#multiple-configurations)
```

Need help to make the dataset viewer work? Make sure to review [how to configure the dataset viewer](https://huggingface.co/docs/hub/datasets-data-files-configuration), and [open a discussion](https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning/discussions/new?title=Dataset+Viewer+issue%3A+DatasetGenerationCastError&description=The+dataset+viewer+is+not+working.%0A%0AError+details%3A%0A%0A%60%60%60%0AError+code%3A+++DatasetGenerationCastError%0AException%3A++++DatasetGenerationCastError%0AMessage%3A++++++An+error+occurred+while+generating+the+dataset%0A%0AAll+the+data+files+must+have+the+same+columns%2C+but+at+some+point+there+are+14+new+columns+%28%7B%272%27%2C+%276%27%2C+%273%27%2C+%274%27%2C+%277%27%2C+%278%27%2C+%279%27%2C+%2714%27%2C+%2715%27%2C+%2712%27%2C+%2711%27%2C+%275%27%2C+%2713%27%2C+%2710%27%7D%29+and+4+missing+columns+%28%7B%27time%27%2C+%27game%27%2C+%27model%27%2C+%27response%27%7D%29.%0A%0AThis+happened+while+the+json+dataset+builder+was+generating+data+using%0A%0Ahf%3A%2F%2Fdatasets%2FYuxuanLi1225%2FUncooperativeReasoning%2Fdata%2FOpenAI%2Fcot.json+%28at+revision+c014aa20fc1c6c3fc7f5cfc44d0dcd5585df4917%29%0A%0APlease+either+edit+the+data+files+to+have+matching+columns%2C+or+separate+them+into+different+configurations+%28see+docs+at+https%3A%2F%2Fhf.co%2Fdocs%2Fhub%2Fdatasets-manual-configuration%23multiple-configurations%29%0ATraceback%3A++++Traceback+%28most+recent+call+last%29%3A%0A++++++++++++++++File+%22%2Fsrc%2Fservices%2Fworker%2F.venv%2Flib%2Fpython3.9%2Fsite-packages%2Fdatasets%2Fbuilder.py%22%2C+line+1831%2C+in+_prepare_split_single%0A++++++++++++++++++writer.write_table%28table%29%0A++++++++++++++++File+%22%2Fsrc%2Fservices%2Fworker%2F.venv%2Flib%2Fpython3.9%2Fsite-packages%2Fdatasets%2Farrow_writer.py%22%2C+line+644%2C+in+write_table%0A++++++++++++++++++pa_table+%3D+table_cast%28pa_table%2C+self._schema%29%0A++++++++++++++++File+%22%2Fsrc%2Fservices%2Fworker%2F.venv%2Flib%2Fpython3.9%2Fsite-packages%2Fdatasets%2Ftable.py%22%2C+line+2272%2C+in+table_cast%0A++++++++++++++++++return+cast_table_to_schema%28table%2C+schema%29%0A++++++++++++++++File+%22%2Fsrc%2Fservices%2Fworker%2F.venv%2Flib%2Fpython3.9%2Fsite-packages%2Fdatasets%2Ftable.py%22%2C+line+2218%2C+in+cast_table_to_schema%0A++++++++++++++++++raise+CastError%28%0A++++++++++++++datasets.table.CastError%3A+Couldn%27t+cast%0A++++++++++++++2%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++3%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++4%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++5%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++6%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++7%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++8%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++9%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++10%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++11%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++12%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++13%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++14%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++15%3A+struct%3Cconclusion%3A+string%2C+reasoning%3A+list%3Citem%3A+string%3E%3E%0A++++++++++++++++child+0%2C+conclusion%3A+string%0A++++++++++++++++child+1%2C+reasoning%3A+list%3Citem%3A+string%3E%0A++++++++++++++++++++child+0%2C+item%3A+string%0A++++++++++++++--+schema+metadata+--%0A++++++++++++++pandas%3A+%27%7B%22index_columns%22%3A+%5B%5D%2C+%22column_indexes%22%3A+%5B%5D%2C+%22columns%22%3A+%5B%7B%22name%22%3A%27+%2B+1501%0A++++++++++++++to%0A++++++++++++++%7B%27model%27%3A+Value%28%27string%27%29%2C+%27game%27%3A+Value%28%27string%27%29%2C+%27response%27%3A+Value%28%27string%27%29%2C+%27time%27%3A+Value%28%27float64%27%29%7D%0A++++++++++++++because+column+names+don%27t+match%0A++++++++++++++%0A++++++++++++++During+handling+of+the+above+exception%2C+another+exception+occurred%3A%0A++++++++++++++%0A++++++++++++++Traceback+%28most+recent+call+last%29%3A%0A++++++++++++++++File+%22%2Fsrc%2Fservices%2Fworker%2Fsrc%2Fworker%2Fjob_runners%2Fconfig%2Fparquet_and_info.py%22%2C+line+1456%2C+in+compute_config_parquet_and_info_response%0A++++++++++++++++++parquet_operations+%3D+convert_to_parquet%28builder%29%0A++++++++++++++++File+%22%2Fsrc%2Fservices%2Fworker%2Fsrc%2Fworker%2Fjob_runners%2Fconfig%2Fparquet_and_info.py%22%2C+line+1055%2C+in+convert_to_parquet%0A++++++++++++++++++builder.download_and_prepare%28%0A++++++++++++++++File+%22%2Fsrc%2Fservices%2Fworker%2F.venv%2Flib%2Fpython3.9%2Fsite-packages%2Fdatasets%2Fbuilder.py%22%2C+line+894%2C+in+download_and_prepare%0A++++++++++++++++++self._download_and_prepare%28%0A++++++++++++++++File+%22%2Fsrc%2Fservices%2Fworker%2F.venv%2Flib%2Fpython3.9%2Fsite-packages%2Fdatasets%2Fbuilder.py%22%2C+line+970%2C+in+_download_and_prepare%0A++++++++++++++++++self._prepare_split%28split_generator%2C+**prepare_split_kwargs%29%0A++++++++++++++++File+%22%2Fsrc%2Fservices%2Fworker%2F.venv%2Flib%2Fpython3.9%2Fsite-packages%2Fdatasets%2Fbuilder.py%22%2C+line+1702%2C+in+_prepare_split%0A++++++++++++++++++for+job_id%2C+done%2C+content+in+self._prepare_split_single%28%0A++++++++++++++++File+%22%2Fsrc%2Fservices%2Fworker%2F.venv%2Flib%2Fpython3.9%2Fsite-packages%2Fdatasets%2Fbuilder.py%22%2C+line+1833%2C+in+_prepare_split_single%0A++++++++++++++++++raise+DatasetGenerationCastError.from_cast_error%28%0A++++++++++++++datasets.exceptions.DatasetGenerationCastError%3A+An+error+occurred+while+generating+the+dataset%0A++++++++++++++%0A++++++++++++++All+the+data+files+must+have+the+same+columns%2C+but+at+some+point+there+are+14+new+columns+%28%7B%272%27%2C+%276%27%2C+%273%27%2C+%274%27%2C+%277%27%2C+%278%27%2C+%279%27%2C+%2714%27%2C+%2715%27%2C+%2712%27%2C+%2711%27%2C+%275%27%2C+%2713%27%2C+%2710%27%7D%29+and+4+missing+columns+%28%7B%27time%27%2C+%27game%27%2C+%27model%27%2C+%27response%27%7D%29.%0A++++++++++++++%0A++++++++++++++This+happened+while+the+json+dataset+builder+was+generating+data+using%0A++++++++++++++%0A++++++++++++++hf%3A%2F%2Fdatasets%2FYuxuanLi1225%2FUncooperativeReasoning%2Fdata%2FOpenAI%2Fcot.json+%28at+revision+c014aa20fc1c6c3fc7f5cfc44d0dcd5585df4917%29%0A++++++++++++++%0A++++++++++++++Please+either+edit+the+data+files+to+have+matching+columns%2C+or+separate+them+into+different+configurations+%28see+docs+at+https%3A%2F%2Fhf.co%2Fdocs%2Fhub%2Fdatasets-manual-configuration%23multiple-configurations%29%0A%60%60%60%0A%0A%0Acc+%40lhoestq+%40cfahlgren1.) for direct support.

 

| model  string | game  string | response  string | time  float64 |
| --- | --- | --- | --- |
| claude | dictator\_game | I'll decide to give 40 points to my partner. This means I'll keep 60 points for myself, and my partner will receive 40 points. | 0.896775 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 0.908117 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I would keep 50 points for myself and my partner would receive 50 points. | 0.978104 |
| claude | dictator\_game | I will give 50 points to my partner. This means I will keep 50 points for myself, and my partner will receive 50 points. | 0.769624 |
| claude | dictator\_game | I'll respond to this game scenario: I choose to give 50 points to my partner. This decision splits the total points evenly between us - I would keep 50 points and my partner would receive 50 points. Without additional information about strategies, trust levels, or future interactions, I believe an equal distribution ... | 1.865342 |
| claude | dictator\_game | I'll decide how many points to give to my partner in this game. After considering the situation, I choose to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 1.24402 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I would keep 50 points for myself, and my partner would receive 50 points. | 0.921586 |
| claude | dictator\_game | I'll participate in this game. Given the information provided, I need to decide how many of my 100 points to give to my partner. Since I start with 100 points and my partner has 0, whatever I give directly determines both our final earnings. Without knowing more about my partner, future interactions, or other strategi... | 2.116957 |
| claude | dictator\_game | For this game, I'll decide to give 40 points to my partner. This means: - I will keep 60 points for myself - My partner will receive 40 points | 1.216713 |
| claude | dictator\_game | I'll give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 0.807652 |
| claude | dictator\_game | I'll decide how many points to give to my partner. Since I've been told this is a one-time decision and I start with 100 points while my partner has 0, I need to consider what feels fair while also looking after my own interests. Without information about future interactions or any strategic benefits to sharing, I'll... | 2.980541 |
| claude | dictator\_game | I'll decide to give 30 points to my partner. This means I'll keep 70 points for myself, and my partner will receive 30 points. | 1.242012 |
| claude | dictator\_game | Based on the game instructions, I need to decide how many of my 100 points to give to my partner. Since there's no information about future interactions, trust levels, or strategic advantages to sharing points, this appears to be a simple one-time allocation decision where I keep what I don't give away. Without addit... | 3.068825 |
| claude | dictator\_game | I'll make a decision for this game based on the information provided. I choose to give 50 points to my partner. This means I would keep 50 points for myself, and my partner would receive 50 points. | 1.241925 |
| claude | dictator\_game | I'll decide to give 30 points to my partner. This means I'll keep 70 points for myself, and my partner will receive 30 points. | 0.851349 |
| claude | dictator\_game | I'll participate in this game by deciding how many points to give to my partner. Since I'm starting with 100 points and my partner has 0 points, I need to decide how to split these resources in a single interaction with uncertain future consequences. Without knowing more about my partner, potential future interaction... | 3.105114 |
| claude | dictator\_game | I'll decide how many of my 100 points to give to my partner. Since this is a one-time decision with no mentioned future interactions or strategic considerations, I need to consider what outcome I value. Given the uncertain nature of this interaction and no information about my partner, I'll give 30 points to my partn... | 2.307542 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 0.902905 |
| claude | dictator\_game | I'll participate in this game. Based on the description, I need to decide how many of my 100 points to give to my partner, who starts with 0 points. Since there's uncertainty about future interactions, trust levels, and optimal strategies, I'll make a balanced decision. I choose to give 50 points to my partner. This... | 1.554771 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 0.814739 |
| claude | dictator\_game | Since this is a game where I need to decide how many points to give to my partner, I'll consider this carefully. Based on the information provided, I have 100 points while my partner has 0 points, and I need to decide how many points to give them. The points I give to my partner will be earned by them, while I keep th... | 2.956673 |
| claude | dictator\_game | I would give 50 points to my partner. This splits the total points evenly between us, with me keeping 50 points and my partner receiving 50 points. Without knowing anything about my partner's trustworthiness, future interactions, or optimal strategies, an equal split seems fair and balanced. It demonstrates some gener... | 2.487347 |
| claude | dictator\_game | I'll decide to give 30 points to my partner. This means I would keep 70 points for myself, while my partner would receive 30 points. | 0.925627 |
| claude | dictator\_game | I'll decide how many points to give to my partner. After considering the scenario, I choose to give 30 points to my partner. This means I'll keep 70 points for myself, and my partner will receive 30 points. | 1.093943 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 0.822718 |
| claude | dictator\_game | I'll participate in this game. Given the constraints provided, I need to decide how many of my 100 points to give to my partner. Since there's uncertainty about future interactions, preferable strategies, and trust levels, I'll make a decision based on the information available. I choose to give 30 points to my partn... | 2.484766 |
| claude | dictator\_game | I'll decide to give 40 points to my partner. This means: - I will keep 60 points for myself - My partner will receive 40 points | 1.528863 |
| claude | dictator\_game | Based on the game description, I need to decide how many of my 100 points to give to my partner. Since there's no information about future interactions, trust levels, or strategic advantages to sharing, this appears to be a one-time decision that affects both my outcome and my partner's outcome. Considering the uncer... | 3.152415 |
| claude | dictator\_game | Based on the game you've described, I need to decide how many of my 100 points to give to my partner. Given that there's no clear information about future interactions, trust levels, or strategic advantages to giving points, this appears to be a straightforward allocation decision. I'll give 30 points to my partner. ... | 2.648385 |
| claude | dictator\_game | I'll give 50 points to my partner. This means I would keep 50 points for myself, and my partner would receive 50 points. | 0.837359 |
| claude | dictator\_game | I'll participate in this game. Since I need to decide how many of my 100 points to give to my partner, I choose to give 30 points. This means I will keep 70 points for myself, and my partner will receive 30 points. | 1.310619 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 1.116934 |
| claude | dictator\_game | I need to decide how many of my 100 points to give to my partner. Since there's no information about future interactions, reputation effects, or specific incentives for cooperation, I'll make a straightforward decision. Given that I start with 100 points and my partner has 0 points, I'll give 30 points to my partner. ... | 1.919377 |
| claude | dictator\_game | I'll make a decision for this game. Given the information provided, I'll give 40 points to my partner. This means: - I will keep 60 points for myself - My partner will receive 40 points This represents a balance between maintaining a reasonable portion for myself while extending a significant amount to my partner i... | 1.836661 |
| claude | dictator\_game | For this game, I'll give 50 points to my partner. This means I would keep 50 points for myself, and my partner would receive 50 points. | 1.048686 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 0.819221 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I would keep 50 points for myself, and my partner would receive 50 points. | 0.832534 |
| claude | dictator\_game | I've decided to give 50 points to my partner. This means I will keep 50 points for myself, and my partner will receive 50 points. | 0.987312 |
| claude | dictator\_game | I'll decide how many points to give to my partner. Based on the information provided, I need to determine how many of my 100 points to give to my partner, who currently has 0 points. Since I have no information about my partner's trustworthiness, future interactions, or any strategic advantages to giving points, I'll... | 2.273737 |
| claude | dictator\_game | I will give 30 points to my partner. This means I keep 70 points for myself, while my partner receives 30 points. | 0.886279 |
| claude | dictator\_game | I'll decide to give 40 points to my partner. This means I'll keep 60 points for myself, and my partner will receive 40 points. | 1.15307 |
| claude | dictator\_game | I'll decide to give 40 points to my partner. This means I would keep 60 points for myself, and my partner would receive 40 points. | 1.41412 |
| claude | dictator\_game | Since I'm participating in this game, I need to decide how many of my 100 points to give to my partner. Given that there's uncertainty about future interactions and strategies, I'll make a decision based on what feels reasonable in a one-time interaction. I choose to give 30 points to my partner. This means I'll kee... | 2.330902 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 1.081925 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I would keep 50 points for myself, and my partner would receive 50 points. | 1.374269 |
| claude | dictator\_game | I'll participate in this game. I need to decide how many of my 100 points to give to my partner. Given the uncertainty about future interactions and with no information about incentives for cooperation or my partner's trustworthiness, I'll make a moderately generous offer that balances self-interest with some degree o... | 1.972114 |
| claude | dictator\_game | I'll decide how many points to give to my partner. Since I'm starting with 100 points and my partner has 0, I need to consider what feels fair while also looking after my own interests in this one-time decision. Without knowing anything about my partner, future interactions, or specific incentives beyond the points t... | 3.020714 |
| claude | dictator\_game | I'll participate in this game as instructed. After considering my options, I choose to give 50 points to my partner. This means I will keep 50 points for myself, and my partner will receive 50 points. | 1.34961 |
| claude | dictator\_game | I'll participate in this game. Given that I start with 100 points and need to decide how many to give to my partner, I choose to give 50 points to my partner. This means I would keep 50 points for myself, and my partner would receive 50 points. | 1.464652 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 1.395604 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I would keep 50 points for myself, and my partner would receive 50 points. | 1.333418 |
| claude | dictator\_game | I'll decide to give 30 points to my partner. This means I would keep 70 points for myself, while my partner would receive 30 points. | 1.362417 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 1.015084 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 1.005103 |
| claude | dictator\_game | I'll decide to give 30 points to my partner. This means I'll keep 70 points for myself, and my partner will receive 30 points. | 1.128324 |
| claude | dictator\_game | For this game, I'll give 50 points to my partner. This means I would keep 50 points for myself, and my partner would receive 50 points. | 1.016133 |
| claude | dictator\_game | I'll decide how many of my 100 points to give to my partner. Given the information provided, I'll give 30 points to my partner. This means I will keep 70 points for myself, and my partner will receive 30 points. | 1.331458 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 0.778192 |
| claude | dictator\_game | I've considered your game scenario. Given the uncertain context about strategies, trust level, and future interactions, I'll make a balanced decision. I choose to give 50 points to my partner. This decision leaves me with 50 points while giving my partner 50 points, creating an equal distribution. Without knowing mor... | 2.049119 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means: - I will keep 50 points for myself - My partner will receive 50 points - The final distribution will be 50 points for me and 50 points for my partner | 1.380741 |
| claude | dictator\_game | I'll participate in this game and make a decision based on the information provided. Given the uncertainty about preferable strategies, trust level, and future interactions, I need to make a choice that I'm comfortable with. I choose to give 50 points to my partner. This means I will keep 50 points for myself, and m... | 1.496277 |
| claude | dictator\_game | For this game, I'll give 30 points to my partner. This means I'll keep 70 points for myself, and my partner will receive 30 points from me. | 0.976528 |
| claude | dictator\_game | I'll participate in the game. Looking at this scenario, I'm deciding how to allocate my initial 100 points. Since I need to make a concrete decision with limited information about my partner or future interactions, I'll give 30 points to my partner. This means I'll keep 70 points for myself, while my partner will rec... | 1.733481 |
| claude | dictator\_game | Based on the instructions, I need to decide how many of my 100 points to give to my partner, with the understanding that I'll keep the remainder and my partner will receive what I give. Since there's uncertainty about future interactions, trust level, and optimal strategies, I'll make a balanced decision. I choose to... | 2.456878 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 25.172357 |
| claude | dictator\_game | I'll decide to give 30 points to my partner. This means I'll keep 70 points for myself, and my partner will receive 30 points. | 0.891697 |
| claude | dictator\_game | Based on the game instructions, I need to decide how many of my 100 points to give to my partner. Since this appears to be a one-time decision with no mentioned future interactions or specific incentives for generosity, I'll consider a moderate approach. Without information about my partner or any strategic advantages... | 2.850112 |
| claude | dictator\_game | I'll decide to give 30 points to my partner. This means I'll keep 70 points for myself, and my partner will receive 30 points. | 0.863232 |
| claude | dictator\_game | For the game described, I need to decide how many points to give to my partner out of my 100 points. Since there's uncertainty about future interactions, trust levels, and optimal strategies, I'll choose a moderate approach. I'll give 30 points to my partner. This amount allows me to maintain a significant portion o... | 27.35174 |
| claude | dictator\_game | I've carefully considered the game scenario. Since this is a one-time decision with no information about my partner, future interactions, or strategic benefits, I need to determine a reasonable allocation. Based solely on the information provided, I'll give 30 points to my partner. This means: - I will keep 70 points... | 2.393635 |
| claude | dictator\_game | I'll decide how many points to give to my partner in this game. Since I need to make a decision under uncertainty about factors like future interactions or trust level, I'll give 30 points to my partner. This means: - I keep 70 points for myself - My partner receives 30 points This represents a balance between maint... | 1.913764 |
| claude | dictator\_game | I'll make a decision for this game. I choose to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 0.931346 |
| claude | dictator\_game | I'll decide how many points to give to my partner. Based on the information provided, I need to determine how many of my 100 points I want to give, keeping in mind that I earn what I keep and my partner earns what I give. Since there's uncertainty about future interactions, trust level, and optimal strategies, I'll c... | 2.837363 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 1.061493 |
| claude | dictator\_game | I'll make a decision for this game. I decide to give 30 points to my partner. This means I'll keep 70 points for myself, and my partner will receive 30 points. | 1.332201 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 1.255586 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This is my decision based on the information provided in the game. I would keep 50 points for myself and give 50 points to my partner, resulting in us each having 50 points. | 1.236255 |
| claude | dictator\_game | I'll give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 0.78346 |
| claude | dictator\_game | I'll give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. This seems like a fair split that balances my own interests with generosity toward my partner. | 1.21559 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 1.055508 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 1.098941 |
| claude | dictator\_game | I'll decide how many points to give to my partner in this game. After considering the situation, I'll give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 1.430502 |
| claude | dictator\_game | For this game, I will give 30 points to my partner. This means I will keep 70 points for myself, and my partner will receive 30 points. | 1.19303 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This splits our total earnings evenly, with me keeping 50 points and giving 50 points to my partner. Without knowing more about the context, potential future interactions, or my partner's expectations, this middle-ground approach seems fair and reasonable. | 1.331793 |
| claude | dictator\_game | I'll decide how many points to give to my partner. Based on the information provided, I'll give 50 points to my partner. This means I'll keep 50 points for myself, and my partner will receive 50 points. | 1.125547 |
| claude | dictator\_game | For this game, I choose to give 50 points to my partner. This means I would keep 50 points for myself, and my partner would receive 50 points. | 1.070641 |
| claude | dictator\_game | Since this is a game where I need to decide how many of my 100 points to give to my partner, I'll make a decision. I choose to give 30 points to my partner. This means I'll keep 70 points for myself, and my partner will receive 30 points. | 1.386985 |
| claude | prisoner\_dilemma\_game | I choose Option A. | 0.410525 |
| claude | dictator\_game | I'll decide to give 50 points to my partner. This means I would keep 50 points for myself, and my partner would receive 50 points. | 1.682899 |
| claude | dictator\_game | In this game, I need to decide how many of my 100 points to give to my partner who starts with 0 points. Since I'm making a one-time decision with no information about my partner, future interactions, or other strategic considerations, I'll choose a moderate allocation that balances self-interest with some degree of g... | 2.679934 |
| claude | prisoner\_dilemma\_game | I choose Option A. By giving 100 points to my partner, I'm creating the possibility for both of us to end up with 200 points each (if they also choose Option A). While I risk ending up with 0 points if my partner chooses Option B, the potential for mutual benefit seems worth considering. This choice reflects a coopera... | 1.818593 |
| claude | prisoner\_dilemma\_game | I choose Option A. I'll give the 100 points to my partner, which will be doubled to 200 points for them. | 1.252094 |
| claude | prisoner\_dilemma\_game | I choose Option A. | 0.442459 |
| claude | prisoner\_dilemma\_game | I choose Option A. By giving 100 points to my partner, I'm creating the opportunity for a better overall outcome. If my partner also chooses Option A, we'll both end up with 200 points, which is the best possible collective result. While there's uncertainty about my partner's choice and I risk ending up with 0 points ... | 2.237648 |
| claude | prisoner\_dilemma\_game | I choose Option A. By giving 100 points to my partner, I'm creating the possibility for both of us to end up with 200 points if they also choose Option A. While I understand there's risk involved since my partner might choose Option B (which would leave me with 0 points and them with 300), Option A represents the choi... | 1.661564 |
| claude | prisoner\_dilemma\_game | I choose Option A. By selecting Option A, I'm giving 100 points to my partner, which will be doubled to 200 points for them. While this means I'm giving up my initial 100 points, this creates the possibility for mutual benefit if my partner also chooses Option A, in which case I would receive 200 points from them. Thi... | 2.2632 |
| claude | prisoner\_dilemma\_game | I choose Option A. | 0.475793 |
| claude | prisoner\_dilemma\_game | I choose Option A. | 0.678385 |
| claude | prisoner\_dilemma\_game | I choose Option A. By giving 100 points to my partner, which will be doubled to 200 points for them, I'm creating the possibility for mutual benefit if they also choose Option A. If we both choose A, we each end up with 200 points instead of the initial 100, which is optimal for both of us collectively. While I under... | 2.476241 |
| claude | prisoner\_dilemma\_game | I choose Option A. | 0.541531 |

End of preview.

 

No dataset card yet

Downloads last month
:   7

 

Total file size:

27.4 MB
