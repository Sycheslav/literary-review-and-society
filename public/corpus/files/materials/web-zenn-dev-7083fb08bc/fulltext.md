---
id: web-zenn-dev-7083fb08bc-text
type: material
title: AIを「仮想住人」にして社会を観察する ― Concordiaで試す生成エージェント・シミュレーション
work_id: web-zenn-dev-7083fb08bc
source_url: https://zenn.dev/taka4/articles/f38aad4ba71088
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: HTML-конверсия страницы источника. Для проекта или блога это текст страницы;
  научный полный текст подтверждается отдельно.
language: original
sha256_text: 53b52d2266a0aac18c64a59b1583a9c827f2649d9fcb73aa172b54aa5b9877ce
---

> Источник: [https://zenn.dev/taka4/articles/f38aad4ba71088](https://zenn.dev/taka4/articles/f38aad4ba71088). HTML-конверсия страницы источника. Для проекта или блога это текст страницы; научный полный текст подтверждается отдельно.

[![おっぴー＠AI推進](https://lh3.googleusercontent.com/a/ACg8ocJP5yjqcZ7YPDNALim24UnXpoqli_PjhU8iwWYiWmp3GnYb7Q=s250-c)おっぴー＠AI推進](https://zenn.dev/taka4)

👫

# AIを「仮想住人」にして社会を観察する ― Concordiaで試す生成エージェント・シミュレーション

2026/10/02に公開

[![](https://zenn.dev/images/topic.png)

llm](https://zenn.dev/topics/llm)[![](https://zenn.dev/images/topic.png)

生成 AI](https://zenn.dev/topics/%E7%94%9F%E6%88%90ai)[![](https://static.zenn.studio/user-upload/topics/9d57e07ee9.png)

Ollama](https://zenn.dev/topics/ollama)[![](https://zenn.dev/images/topic.png)

ローカル LLM](https://zenn.dev/topics/localllm)[![](https://zenn.dev/images/topic.png)

concordia](https://zenn.dev/topics/concordia)[![](https://static.zenn.studio/images/drawing/tech-icon.svg)

tech](https://zenn.dev/tech-or-idea)

## はじめに

こんにちは。おっぴー@AI推進です。

[前回記事](https://zenn.dev/taka4/articles/7c2d7ff0b8a17f)では、複数のAIモデルを対戦させて観戦する[TinyAIArena](https://tinyaiarena.com/)という サービスを取り上げた。あの記事の中で「対戦・競争だけでなく、AIを仮想の住人として動かし、社会がどう発展するかを観察する『思考実験』系のアプローチもある」と少し触れたが、今回はその路線を実際に手を動かして掘り下げてみる。

題材はGoogle DeepMindが開発する[Concordia](https://github.com/google-deepmind/concordia)というOSSライブラリだ。単に仕組みを紹介するだけでなく、実際に自分のPC上にOllama（ローカルでLLMを動かすためのランタイム）を使った環境を構築し、シミュレーションを最後まで走らせてみた。その過程で実際にエラーにぶつかり、原因を特定し、回避策を見つけるところまでを含めてレポートする。

本記事は、AIやLLM（大規模言語モデル）の初学者でも読めるように、専門用語には都度補足を入れながら書いている。是非最後まで見ていってください。

## 「住人シミュレーション」とは何か

前回扱ったTinyAIArenaは、複数のAIモデルを対戦させて勝敗を競わせる「競争型」のマルチエージェントオーケストレーション（複数のAIエージェントを分担・協調・競争させて動かす設計）だった。

一方で、同じ「複数のAIエージェントを動かす」という枠組みでも、勝敗を決めるのではなく、**AIエージェントを仮想の住人として街や社会に配置し、そこで何が起きるかを観察するというアプローチ**がある。この分野の火付け役となったのが、Stanford大学とGoogle Researchが2023年に発表した論文「[Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/pdf/2304.03442)」（通称Smallville）だ。25体のAIエージェントが小さな町に住み、それぞれが記憶を持ち、他の住人と会話し、関係性を築きながら日常生活を送る様子が観察されたことで注目を集めた。

この論文の実装は[joonspk-research/generative\_agents](https://github.com/joonspk-research/generative_agents)としてGitHub上に公開されている（ライセンスはApache 2.0）。ただしこちらはあくまで研究成果を再現するためのコードで、LLMの呼び出し先はOpenAI APIに固定されている。ローカルLLMへの対応はなく、動かすにはAPI利用料がかかる。研究の原点として参照する分には最適だが、「自分のPCだけで気軽に試す」用途には向いていない。

この「元祖」を踏まえた上で、今回はローカルLLMで動かせる後継・類似プロジェクトを比較検討し、Concordiaを深掘りすることにした。

## Concordiaとは何か

Concordia（[github.com/google-deepmind/concordia](https://github.com/google-deepmind/concordia)）は、Google DeepMindが開発・公開しているOSSライブラリで、ライセンスはApache 2.0。スター数は本記事執筆時点（2026年9月29日）で1,700台、開発は継続中（直近のコミットは調査当日）だった。スター数は常に変動するため、最新の数値はリポジトリを直接確認してほしい。

Concordiaの技術レポート「[Generative agent-based modeling with actions grounded in physical, social, or digital space using Concordia](https://arxiv.org/abs/2312.03664)」では、この仕組みを「GABM（Generative Agent-Based Model、生成AIエージェントによるエージェントベースモデル）」と名付けている。従来のエージェントベースモデル（あらかじめ決められたルールに従ってエージェントが動くシミュレーション手法）とは異なり、**エージェントの判断そのものをLLMに任せることで、あらかじめプログラムされていない振る舞いが生まれる点が特徴**だ。

仕組みの中心にあるのが、**Game Master（GM）** という概念だ。テーブルトークRPGのゲームマスターのように、GM役のLLMが世界の状況を管理し、各エージェント（プレイヤー役のLLM）の行動を受けて次に何が起きるかを解決する。エージェント同士が直接ルールベースで殴り合うのではなく、**GMが物語の整合性を取りながら進行させる構造になっている。**

後続の論文「[Multi-Actor Generative Artificial Intelligence as a Game Engine](https://arxiv.org/abs/2507.08892)」では、この構造を「複数のAIが役割分担するゲームエンジン」として一般化する設計パターンも提案されている。

## 何がシミュレートできるか

公式の技術レポートで紹介されている例の一つに、「雪に閉じ込められた4人の友人が、山小屋のパブで過ごす一夜」というシナリオがある。天候という物理的な制約、友人同士の社会的な関係性、それぞれの個人的な目標が絡み合いながら、GMが状況を裁定し、会話や行動が積み重なっていく。

応用分野としては以下が挙げられている。

- **社会科学研究**  
  人間社会の集団行動や意思決定プロセスを、実際の人間を集めずにシミュレーションで検証する
- **AI安全性・倫理評価**  
  AIエージェントが特定の状況でどう振る舞うかを、実環境に投入する前に観察する
- **合成データ生成**  
  パーソナライゼーション機能の学習データとして、シミュレーション内のやり取りを活用する
- **実サービスの性能評価**  
  実際のユーザーの代わりにシミュレートしたユーザーでサービスの挙動をテストする

派手なゲーム性があるわけではなく、TinyAIArenaのような「観戦して盛り上がる」タイプのコンテンツとは毛色が異なる。どちらかというと、**研究者やエンジニアが「AIエージェント集団にどんな相互作用をさせられるか」を試すための土台、という位置づけだ。**

## 個人PC + ローカルLLMで動かしてみた

ここからが本記事の核心部分だ。Concordiaが「ローカルLLMに対応している」とドキュメント上で謳っているのは確認済みだったので、実際に自分のMac上でOllama（ローカルLLMランタイム）を使い、シミュレーションを動かしてみた。

### 環境構築

用意したのは以下の環境だ。

- Python 3.13（venv環境）
- Ollama 0.32.13（ローカルで動作するLLMランタイム。あらかじめ`qwen3:14b`モデルをpull済み）
- `gdm-concordia`（PyPI経由でインストール、本ツール自体はGPU不要、バージョン2.4.0）

インストールは以下のコマンドで完了する。

```
python3 -m venv .venv
source .venv/bin/activate
pip install "gdm-concordia[ollama]" sentence-transformers
```

エージェント間の記憶検索に使う埋め込みモデル（文章を数値ベクトルに変換し、類似度を計算できるようにするモデル）は、公式チュートリアルに合わせて`sentence-transformers`（Hugging Face製のローカル埋め込みライブラリ）の`all-mpnet-base-v2`を使った。これもAPIを一切使わず、ローカルで完結する。

言語モデルの指定はコード上でこれだけで済む。

```
from concordia.contrib import language_models as language_model_utils

model = language_model_utils.language_model_setup(
    api_type="ollama",
    model_name="qwen3:14b",
)
```

### つまずいたポイント: thinkingモデルとJSON強制の相性問題

公式チュートリアル（`examples/tutorial.ipynb`）のシナリオ ― 「Oliver Cromwell（処刑を主導する側）」と「King Charles I（処刑される側）」の2エージェントが、1649年のイギリス史を舞台にやり取りする ― をそのまま動かしたところ、次のエラーで処理が止まった。

```
concordia.language_model.language_model.InvalidResponseError:
Too many multiple choice attempts.
Last attempt: , extracted:
```

自由記述の応答生成（`sample_text`）は問題なく動いていたが、GM側が「次に誰が行動するか」を決める複数選択の判断（`sample_choice`）でだけ失敗していた。Concordiaはこの判断をLLMにJSON形式で答えさせる仕組みになっており、Ollamaの`format="json"`オプションを使って強制している。

原因を切り分けるため、Ollamaのローカルサーバーに直接同じ形式でリクエストを送って確認した。

```
curl -s http://localhost:11434/api/generate -d '{
  "model": "qwen3:14b",
  "prompt": "Question: who should act next? A) Alice B) Bob\nUse the following json template: {\"choice\": \"\", \"single sentence explanation\": \"\"}.",
  "format": "json",
  "stream": false
}'
```

返ってきた応答は空の`{}`だった。`qwen3:14b`は応答前に内部で「思考（thinking）」の過程を挟む設計のモデルで、JSON形式を強制しながらこの思考モードが有効なままだと、可視の応答欄が空になってしまうことがわかった。Ollamaには`think`というオプションがあり、これを`false`に指定すると解消する。

```
curl -s http://localhost:11434/api/generate -d '{
  "model": "qwen3:14b",
  "prompt": "Question: who should act next? A) Alice B) Bob\nUse the following json template: {\"choice\": \"\", \"single sentence explanation\": \"\"}.",
  "format": "json",
  "think": false,
  "stream": false
}'
```

こちらは`{"choice": "A", "single sentence explanation": "..."}`と、期待通りの形式で返ってきた。

調べたところ、2026年9月時点のConcordia本体（`concordia/contrib/language_models/ollama/ollama_model.py`）はOllamaへのリクエストに`think`パラメータを含めていなかった。thinking系モデルを使う場合はこの1行が抜けていることが原因と判断し、`OllamaLanguageModel`が`self._client.generate(...)`を呼んでいる箇所（`sample_text`・`sample_choice`の両メソッド）に`think=False`を追加するパッチを当てて再実行した。

```
response = self._client.generate(
    model=self._model_name,
    prompt=prompt_with_system_message,
    options={...},
    format='json',  # sample_choiceのみ
    keep_alive='10m',
    think=False,  # ここを追加
)
```

このパッチを当てる際の注意点

この方法はvenv内にpipインストールした`site-packages`のファイルを直接書き換える一時的な回避策であり、`pip install --upgrade`やvenvの再作成で消える。恒久的に使うなら、`OllamaLanguageModel`を継承したサブクラスで`sample_text`・`sample_choice`をオーバーライドし、`think=False`を渡すクラスを自分のコード側に定義する方が安全だ。今回のようなパッケージ側の抜け漏れは、本来はConcordiaリポジトリにIssueを立てて報告するのが筋だろう。

### パッチ後の実行結果

パッチ適用後、5ステップ・2エージェントのシミュレーションが最後まで完走した。

- **実行時間**: 530.5秒（約8.8分）
- **モデル**: `qwen3:14b`（応答生成用、パラメータ数14.8B・Q4量子化でモデルサイズ9.3GB、GPU/統合メモリ16GB程度推奨）+ `all-mpnet-base-v2`（埋め込み、ローカル）

生成された会話の一部を抜粋する。

> Entity Oliver Cromwell chose action: Oliver Cromwell steps forward with measured authority, his presence commanding the attention of all gathered in the hall. His voice, calm yet unyielding, cuts through the murmurs of the crowd as he addresses the assembled Parliamentarians and the watching public. "We stand at a crossroads," he says, "and the path before us is clear. The king's crimes are undeniable, and the people have suffered under his rule for too long..."  
> （クロムウェルは、堂々とした態度で一歩前に出た。その存在感は広間に集まった全員の注目を集める。落ち着いているが揺るぎない声で、居並ぶ議員たちと見守る民衆に語りかけ、群衆のざわめきを切り裂いていく。「我々は岐路に立っている」と彼は言う。「進むべき道は明らかだ。国王の罪は否定しようがなく、民は彼の統治のもとで長く苦しんできた……」）

興味深かったのは、**GM（Game Master）役のAIが台本にない展開を自発的に挿入してきたこと**だ。シミュレーション設定では「クロムウェルと国王の対峙」しか用意していなかったが、GMは進行の途中で

> 「*謎の人物が兵士に『裁判を止めろ、お前の知らない力が働いている』と耳打ちする*」

という、こちらが一切指示していないサブプロットを勝手に差し込んできた。これは前述の **「あらかじめプログラムされていない振る舞いが生まれる」という設計思想が、実際に手元の環境でも再現された瞬間と言える。**

ローカルLLM対応を謳っているOSSでも、実際に動かしてみると個別のモデルとの細かい相性問題（今回で言えばthinkingモデル特有のJSON応答の空返り）に当たることがある、という点は、実際に手を動かさないと分からない収穫だった。

## AI Townとの違い

前回のTinyAIArena記事の調査時に、同じ「思考実験」系の候補として[AI Town](https://github.com/a16z-infra/ai-town)（a16z-infra、MITライセンス）も比較対象に挙げていた。AI TownはOllama公式対応（デフォルトで`llama3`＋`mxbai-embed-large`）、Docker Composeでのセットアップに対応しており、ローカル完結のしやすさという点ではConcordiaと並んで有力な選択肢だ。

両者は同じ「ローカルLLMで動かせる住人シミュレーション」でも、狙っているところが異なる。GitHub APIで取得した実データとソースコードの読解で、基礎データとカスタム性の両面から比較した。

### 基礎データ比較

| 指標 | AI Town | Concordia |
| --- | --- | --- |
| 目的・特徴 | Generative Agents論文の実装を「すぐ動くスターターキット」として再構築したもの。町の中でキャラクターが日常会話・社交する様子をブラウザで観戦する体験に振り切っている | GM（Game Master）役のLLMが状況を裁定する「GABM」という独自コンセプトを掲げるシミュレーション基盤。物理・社会・デジタル空間をまたいだ複雑な状況を研究用途で組み立てることを狙っている |
| 開発元 | a16z-infra（Andreessen Horowitz） | Google DeepMind |
| ライセンス | MIT | Apache 2.0 |
| スター数（執筆時点） | 10,564 | 1,746 |
| リポジトリ作成日 | 2023-07-16（約3年2ヶ月前） | 2023-11-21（約2年10ヶ月前） |
| コントリビュータ数 | 45人 | 55人 |
| コミット総数 | 1,147 | 1,365 |
| 直近90日のコミット数 | 4件 | 60件 |
| 実装言語 | TypeScript | Python |
| Docker対応 | あり（Docker Compose） | なし（pipインストールのPythonライブラリ） |
| 出力形式 | ブラウザ上のリアルタイム2Dマップ＋会話ログ表示 | テキストログ、`to_html()`によるHTML出力。専用のビジュアルUIはない |
| 対応AIプロバイダ | Ollama（既定）、OpenAI、Together.ai、OpenAI互換API経由でAnthropic/Groq/Azure等 | Ollama、OpenAI、Gemini、Groq、Mistral、HuggingFace、vLLM、Together.ai、Amazon Bedrock（Claude系モデルもここ経由で利用可能な設計）等 |
| 想定エージェント規模 | 明確な上限記載はないが、デモ・チュートリアルは5〜8体程度の町規模 | 明確な上限記載はないが、デモは2〜4体程度。数百〜数百万規模を狙う設計ではない（筆者の推測。[OASIS](https://github.com/camel-ai/oasis)のような専用スケーラビリティ設計とは異なる） |

スター数だけ見るとAI Townが圧倒的だが、**直近90日のコミット数はAI Townが4件、Concordiaが60件と大きく差がついている**。AI Townは2023年公開時の注目度が高いまま開発がほぼ停滞している一方、Concordiaは地味ながら継続的に手が入っている状態だ。「今アクティブに開発されているか」で選ぶならこの数字は無視できない。

### カスタム性の比較

基礎データだけでは「どこまで作り込めるか」は見えてこないので、各ツールがどこまで柔軟に設定できるかについてもソースコードベースで調査した。以下の表にまとめる。

（ちなみに「AIだけで人狼ゲームをやらせたら面白そうだ」というアイデアを思いついたので、それに必要な要素（役割の秘匿・投票・昼夜のフェーズ切り替え・勝敗判定）も比較軸に加えている）

| 観点 | AI Town | Concordia |
| --- | --- | --- |
| ロール設定（ペルソナ） | `characters.ts`の`identity`（自由記述）＋`plan`（目標）。コード直編集が前提 | 標準は`name`＋`goal`のみだが、`system_prompt`を丸ごと差し替えられるprefabもあり、突き詰めるとAI Town以上に自由 |
| 突発イベントの挿入 | 専用の仕組みなし。GM＝ナレーター役という概念自体が存在しない | GMの`extra_event_resolution_steps`で判断材料を追加注入できる。`scenes`パラメータで場面単位の強制展開も可能 |
| 進行への強制ルール | ハードコード。変えるにはTypeScriptのゲームロジック（`movement.ts`等）を直接改造する必要がある | `acting_order`（fixed / random / game\_master\_choice）で行動順を制御可能。`puppet`prefabで特定の呼びかけへの固定応答も設定できる |
| 秘匿情報の管理 | 会話は近接する2人限定だが、これは物理的な距離判定によるもの。「特定グループだけが正体を共有する」ような秘匿情報の仕組みはない | `ObservationQueue`がエンティティ単位で観測内容を管理しており、誰に何を見せるかをGM側で制御できる設計 |
| 投票・集計 | 専用の仕組みなし | `questionnaire`系コンポーネントや`simultaneous`エンジン（全エンティティが同時に行動）で、全員同時投票のような集計フェーズを組める |
| フェーズ管理（昼/夜等の局面切替） | 概念自体が存在しない | `scene_tracker`コンポーネントと`scenes`パラメータで局面ごとに参加者・ルールを切り替えられる |
| 勝敗判定・終了条件 | 存在しない（常時稼働の街というコンセプト） | GM自身がYes/Noで継続可否を判定する`terminate`の仕組みがあり、勝敗条件のプロンプト次第で終了処理を組み込める |

こうして並べると、**AI Townは「観戦用にすぐ動く」ことに全振りしている一方、Concordiaは人狼のような役割非対称・情報の秘匿・フェーズ進行を要するゲームでも、config層の組み合わせだけでかなりのところまで作り込める**ことがわかる。「とりあえず動かして観戦したい」ならAI Town、「シミュレーションの構造を自分で組んで研究的に触りたい」ならConcordia、という住み分けは変わらないが、その差はカスタム性の細かさに直結している。

## 他の類似プロジェクトについて

調査の過程で他にもいくつかの選択肢を確認したので、簡単に触れておく。

- **[CAMEL-AI / OASIS](https://github.com/camel-ai/oasis)**（Apache 2.0）  
  **最大100万エージェント規模のSNS上の情報拡散・世論分極化シミュレーションに特化。** ローカルLLMはvLLM（ローカルで大規模言語モデルを高速に動かすサーバーソフト）経由で対応するが、Ollamaより環境構築の手間は重い
- **[GPTeam](https://github.com/101dotxyz/GPTeam)**（MIT）  
  **オフィス内の職務ごとの協調（CEO・営業・HR等）をシミュレート**する。ローカルLLM対応は確認できず、GPT-4やClaudeなどAPI経由のモデルが前提
- **[AgentSociety 2](https://github.com/tsinghua-fib-lab/AgentSociety)**（清華大学FIB Lab、Apache 2.0）  
  Ray（分散処理フレームワーク）を使い、**都市規模（city-scale）のマルチエージェント社会シミュレーションを構築できる基盤**。v2では文献検索から論文執筆までの研究ワークフローをエージェント化する機能も追加された。litellm（複数のLLM APIを統一的に扱うライブラリ）経由のため理論上はローカルLLMも扱えるが、公式ドキュメントでの明記はなかった

いずれも「住人シミュレーション」という大枠には収まるが、Concordia・AI Townと比べるとローカル完結のしやすさでは一段劣る、というのが今回調べた範囲での印象だ。

## まとめ

Concordiaは、Google DeepMindが公開するGABM（生成AIエージェントベースモデル）のためのOSSライブラリで、GM（Game Master）役のLLMが状況を裁定しながら複数のエージェントを動かす構造を持つ。

- **何をするライブラリか**  
  物理・社会・デジタル空間をまたいだマルチエージェントシミュレーションを、GMを介した構造で組み立てられる基盤
- **ローカルLLMでの動作**  
  Ollama公式対応を確認。ただしthinkingモデル（`qwen3`等）を使う場合、JSON強制応答が空になる相性問題があり、Ollamaの`think: false`オプションで回避できる
- **実測した動作**  
  `qwen3:14b`＋ローカル埋め込みモデルで、GPUなしのノートPC上で5ステップのシミュレーションが約8.8分で完走。GMが台本にない展開を自発的に挿入する創発的な振る舞いも確認
- **AI Townとの住み分け**  
  観戦のしやすさならAI Town、研究的に構造を組みたいならConcordia

「AIを仮想の住人にして社会を観察する」という思考実験は、Generative Agents論文から数年を経て、**個人のPC1台でも手が届くところまで来ている**。ローカルLLM対応を謳うOSSでも実際に動かすと細かい相性問題に当たることはあるが、それも含めて **「手元で試せる」ことの価値だと感じた**。  
それでは良きAIライフを。

## 情報の参照元

- [TinyAIArena（前回記事の題材）](https://tinyaiarena.com/)
- [Generative Agents: Interactive Simulacra of Human Behavior（arXiv）](https://arxiv.org/pdf/2304.03442)
- [joonspk-research/generative\_agents（GitHubリポジトリ）](https://github.com/joonspk-research/generative_agents)
- [google-deepmind/concordia（GitHubリポジトリ）](https://github.com/google-deepmind/concordia)
- [Generative agent-based modeling with actions grounded in physical, social, or digital space using Concordia（arXiv）](https://arxiv.org/abs/2312.03664)
- [Multi-Actor Generative Artificial Intelligence as a Game Engine（arXiv）](https://arxiv.org/abs/2507.08892)
- [a16z-infra/ai-town（GitHubリポジトリ）](https://github.com/a16z-infra/ai-town)
- [camel-ai/oasis（GitHubリポジトリ）](https://github.com/camel-ai/oasis)
- [101dotxyz/GPTeam（GitHubリポジトリ）](https://github.com/101dotxyz/GPTeam)
- [tsinghua-fib-lab/AgentSociety（GitHubリポジトリ）](https://github.com/tsinghua-fib-lab/AgentSociety)
- 上記はいずれも本記事執筆時点（2026年9月29日）の情報。ローカル動作検証はOllama 0.32.13 + qwen3:14b + gdm-concordia 2.4.0の組み合わせで実施
- AI Town・Concordiaの基礎データ比較表の数値はGitHub API（2026年9月29日取得）に基づく。スター数・コミット数は変動するため、最新の数値はリポジトリを直接確認してほしい

[![おっぴー＠AI推進](https://lh3.googleusercontent.com/a/ACg8ocJP5yjqcZ7YPDNALim24UnXpoqli_PjhU8iwWYiWmp3GnYb7Q=s250-c)](https://zenn.dev/taka4)

[おっぴー＠AI推進](https://zenn.dev/taka4)

エンジニア歴10年強。最近はAIを活用した開発をしつつ、今後のエンジニアの在り方について日々考えるこの頃。最近の興味事：Claude Code/Skills/MCP/Local LLM/obsidian/Hermes Agent

バッジを贈って著者を応援しよう

バッジを受け取った著者にはZennから現金やAmazonギフトカードが還元されます。

### Discussion

![](https://static.zenn.studio/images/drawing/discussion.png)

[![おっぴー＠AI推進](https://lh3.googleusercontent.com/a/ACg8ocJP5yjqcZ7YPDNALim24UnXpoqli_PjhU8iwWYiWmp3GnYb7Q=s250-c)](https://zenn.dev/taka4)

[おっぴー＠AI推進](https://zenn.dev/taka4)

エンジニア歴10年強。最近はAIを活用した開発をしつつ、今後のエンジニアの在り方について日々考えるこの頃。最近の興味事：Claude Code/Skills/MCP/Local LLM/obsidian/Hermes Agent

[バッジを贈るとは](https://zenn.dev/faq/badges)

目次

1. [はじめに](https://zenn.dev/taka4/articles/f38aad4ba71088#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB)
2. [「住人シミュレーション」とは何か](https://zenn.dev/taka4/articles/f38aad4ba71088#%E3%80%8C%E4%BD%8F%E4%BA%BA%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%80%8D%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B)
3. [Concordiaとは何か](https://zenn.dev/taka4/articles/f38aad4ba71088#concordia%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B)
4. [何がシミュレートできるか](https://zenn.dev/taka4/articles/f38aad4ba71088#%E4%BD%95%E3%81%8C%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%83%88%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%8B)
5. [個人PC + ローカルLLMで動かしてみた](https://zenn.dev/taka4/articles/f38aad4ba71088#%E5%80%8B%E4%BA%BApc-%2B-%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%ABllm%E3%81%A7%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F)
   1. [環境構築](https://zenn.dev/taka4/articles/f38aad4ba71088#%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89)
   2. [つまずいたポイント: thinkingモデルとJSON強制の相性問題](https://zenn.dev/taka4/articles/f38aad4ba71088#%E3%81%A4%E3%81%BE%E3%81%9A%E3%81%84%E3%81%9F%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%3A-thinking%E3%83%A2%E3%83%87%E3%83%AB%E3%81%A8json%E5%BC%B7%E5%88%B6%E3%81%AE%E7%9B%B8%E6%80%A7%E5%95%8F%E9%A1%8C)
   3. [パッチ後の実行結果](https://zenn.dev/taka4/articles/f38aad4ba71088#%E3%83%91%E3%83%83%E3%83%81%E5%BE%8C%E3%81%AE%E5%AE%9F%E8%A1%8C%E7%B5%90%E6%9E%9C)
6. [AI Townとの違い](https://zenn.dev/taka4/articles/f38aad4ba71088#ai-town%E3%81%A8%E3%81%AE%E9%81%95%E3%81%84)
   1. [基礎データ比較](https://zenn.dev/taka4/articles/f38aad4ba71088#%E5%9F%BA%E7%A4%8E%E3%83%87%E3%83%BC%E3%82%BF%E6%AF%94%E8%BC%83)
   2. [カスタム性の比較](https://zenn.dev/taka4/articles/f38aad4ba71088#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E6%80%A7%E3%81%AE%E6%AF%94%E8%BC%83)
7. [他の類似プロジェクトについて](https://zenn.dev/taka4/articles/f38aad4ba71088#%E4%BB%96%E3%81%AE%E9%A1%9E%E4%BC%BC%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
8. [まとめ](https://zenn.dev/taka4/articles/f38aad4ba71088#%E3%81%BE%E3%81%A8%E3%82%81)
9. [情報の参照元](https://zenn.dev/taka4/articles/f38aad4ba71088#%E6%83%85%E5%A0%B1%E3%81%AE%E5%8F%82%E7%85%A7%E5%85%83)
