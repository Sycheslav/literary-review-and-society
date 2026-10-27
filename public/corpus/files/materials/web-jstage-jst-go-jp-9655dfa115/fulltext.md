---
id: web-jstage-jst-go-jp-9655dfa115-text
type: material
title: полный текст PDF на J-STAGE
work_id: web-jstage-jst-go-jp-9655dfa115
source_url: https://www.jstage.jst.go.jp/article/pjsai/JSAI2025/0/JSAI2025_3O1OS44a03/_pdf/-char/ja
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: b160a7c015fa586a471810fbdec566b6b33195c755380a6479583eced549844a
---

> Источник: [https://www.jstage.jst.go.jp/article/pjsai/JSAI2025/0/JSAI2025_3O1OS44a03/_pdf/-char/ja](https://www.jstage.jst.go.jp/article/pjsai/JSAI2025/0/JSAI2025_3O1OS44a03/_pdf/-char/ja). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

3O1-OS-44a-03


                          The 39th Annual Conference of the Japanese Society for Artificial Intelligence, 2025

  LLMエージェントを用いたオープンエンド性を有する文化進化モデ
               ルの構築

                  Developing an Open-Ended Cultural Evolution Model Using LLM Agents


                 加藤真紘∗1  鈴木麗璽∗2  有田隆也∗3
                                         Mahiro Kato          Reiji Suzuki       Takaya Arita

                                 ∗1 ∗2 ∗3 名古屋大学大学院情報学研究科複雑系科学専攻
                       Department of Complex Systems Science，Graduate School of Informatics，Nagoya University


        本研究は，LLM エージェント群を用いた創造的な文化進化プラットフォームを設計し，SF 小説のプロットの文化進
      化実験を通じて，個体学習（改良，革新）と社会学習（ランダム模倣，多数派模倣，少数派模倣，魅力模倣）の相互作用
      が，どのような文化進化のダイナミクスをもたらすかを検討することを目的とした．実験では，多様な物語が持続的に
      創出され，一部は筒井康隆著「パプリカ」に類似する洗練されたアイデアのプロットが現れる一方，今回採用した社会
      学習のみではテーマが収束する傾向が確認された．この結果から，本研究が提案するプラットフォームが，文化進化の
      ダイナミクスの理解につながり，また新奇な文化を創造するツールとして応用できる可能性が示された．

      1. はじめに                       り情報の垂直伝達を行っており，対戦相手のプレイ履歴をエー
                                   ジェントに与えてはいるものの，文化進化の範疇には入りにく
     文化進化研究は数理生物学や進化ゲーム理論などの分野にお                                  いものである．
    ける数理的分析によって理論的基盤を強化し，従来の記述的・
    歴史的アプローチから定量的な科学へと発展してきた[1][7]．
                                                         2. 文化進化プラットフォーム    そこでは，文化進化は同世代内で社会的に伝達されうるあらゆ
    る情報が生物進化と同じように，変異，適応度の差，継承のシ    文化進化のダイナミクスをより深く理解するために，社会学
    ステムによって進化することと定義される[3]．文化進化の本   習と個体学習を統合したエージェントベースのプラットフォー
    質は，新規性が絶えず生み出され，それが累積的に革新をもた   ムを提案する．プラットフォームは，ネットワークで接続され
    らしていくというオープンエンド性にある．このダイナミクス   たLLM エージェントの集団によって構成される．エージェン
    を支える鍵は，個体学習と社会学習のバランスにあることが数   トの役割は，自身が持つミーム(文化情報の単位) を繰り返し
    理的アプローチによって明らかになってきた[2]．個体学習は   入力し出力することである．各エージェントが生成したミーム
    試行錯誤を通じた新規な文化的情報の創造を担う一方，社会学   の変化が文化進化を表す．エージェントは，隣接エージェント
    習は多数派バイアス，成功バイアスなどの様々な選択バイアス   の生成したミームを受け取る．そして，それぞれに設定された
    に基づく模倣を通じてその伝達と適応を促進する．       「学習戦略」に基づいて，それを模倣したり，逆に全く異なる
     近年の大規模言語モデル（LLM）の登場によって，文化進   ミームを生成する．ここで，「学習戦略」とは，具体的には各
    化の研究は新たな局面を迎えたと考えることができる．高度な   エージェントに割り振られた，試行錯誤や模倣の方法を指す．
    知能をもつエージェントの個体学習や社会学習による，限りな   個体学習戦略，社会学習戦略は以下が典型的には採用され，プ
    い複雑性を有する意味を持つ情報の伝達を考えることができ   ロンプトによって記述される．
    るからである．本研究の目的は，文化進化に関する一連の数理
                                                             2.1 個体学習戦略
    的な研究を踏まえて，LLM エージェントによるオープンエン                                   個体学習戦略は改良または革新に基づく．
    ドな文化進化を実現，研究できるプラットフォームを構築する
    ことである．そのためのステップとして，個体学習や様々な社        • 「改良戦略」自身のミームを改良
    会学習，あるいはそれらの組み合わせが文化進化ダイナミクス
                                                                  • 「革新戦略」周囲のミームとは異なる新しいミームを生成
    に与える影響を分析する．特に，本稿では，SF 小説のプロッ
    トの文化進化を対象として，進化したプロットの創造性，多様     2.2 社会学習戦略
    性，質を分析して，文化進化のプラットフォームの構築を進め    社会学習戦略は模倣に基づく．
    るとともに，実用的なアイディア生成装置としての応用に関し
                                                                  • 「ランダム模倣戦略」ランダムに(選択にバイアスを持
    ても検討する．
                                         たせずに) 周囲のミームを模倣
       なお，Perez ら[4] はLLM エージェントがネットワーク内
    で物語を生成・変容させるモデルを作り，社会的結合が強い場        • 「多数派模倣戦略」周囲のミームの中で最も頻繁に現れ
    合には多様性が消失すること，安定期と急激な変化のサイク     るミームを模倣
    ルを見せることなどを観察している．ただし，文化進化のオー
                                                                  • 「少数派模倣戦略」周囲のミームの中で最も珍しいミー    プンエンド性を対象しておらず，社会学習における様々なバイ
                                     ムを模倣
     アスについても考慮していない．また，Vallinder ら[8] は寄
    付金ゲームでのLLM エージェントによる協力行動の「文化進        • 「増加傾向模倣戦略」周囲のミームの中で頻度が増加し
    化」モデルを提案しているが，適応度に応じた世代交代，つま     ているミームを模倣

     連絡先: 加藤真紘，名古屋大学大学院情報学研究科複雑系科        • 「魅力模倣戦略」周囲のミームの中で最も内容が魅力的
           学専攻，kato.masahiro.v9@s.mail.nagoya-u.ac.jp        なミームを模倣



                                                        1

## Страница 2

3O1-OS-44a-03


                          The 39th Annual Conference of the Japanese Society for Artificial Intelligence, 2025


         • 「成功者模倣戦略」周囲の個体の中で最も成功している     3.2 社会学習戦略
      個体のミームを模倣                    本実験で用いる社会学習戦略とそのためのプロンプトは以
                                     下の4 種類である．
         • 「情動応答模倣戦略」嫌悪感など，ミームの内容に対す
      る情動的な応答に基づいて模倣                                                                  • ランダム模倣戦略  (S-rand):    Several science
    なお，模倣の過程では若干の変更が加わることを想定すること          fiction ideas will be presented.  Please
    が自然である．これについて，プロンプトの記述におけるニュ         select one at random and modify it to make it
    アンスに依存することになる．                                  even more interesting.  Please output only the
                                                                   new version of the idea and nothing else.  The
       2.3 文化進化の手順
                                                                   modified idea should maintain a similar length
     本プラットフォームにおいては，以下の手順で各世代が進行
                                                                   to the original idea.
    する．
          1) 初期ミームの生成                                        • 多数派模倣戦略(S-maj):  Several science fiction
      何らかの方法で初期ミームを持たせる．                       ideas will be presented.  Please select the
                                                                   idea that seems the most frequently occurring
          2) 戦略の選択                                                                   or most common in terms of quantity among
      各エージェントが事前設定された確率に基づいて学習戦
                                                                   them and modify it to make it more intersting.
      略を選択する．
                                                                   Please output only the new version of the idea
          3) ミームの生成                                             and nothing else.  The modified idea should
      選択された学習戦略に基づき，エージェントがミームを          maintain a similar length to the original
      生成または修正する．                                     idea.

          4) ミームの共有                                            • 少数派模倣戦略(S-rare): Several science fiction
      各エージェントが新しく生成または修正したミームを隣          ideas will be presented.  Please select the
      接エージェントに共有する．                                idea that seems the least common or the most
                                                                   unusual among them and modify it to make it
          5)  2) に戻る(世代交代)
                                                                   even more intersting.  Please output only the
                                                                   new version of the idea and nothing else.  The
                                                                   modified idea should maintain a similar length
      3.  SF プロット進化の実験設定                        to the original idea.
         25 体のLLM ベースのエージェントを5 × 5 のトーラス
                                                                  • 魅力模倣戦略(S-attr):  Several science fiction
    状グリッドに配置する．各エージェントは隣接する4 つの
                                                                   ideas will be presented.  Please select the
    エージェントからミームを受け取ることができる．また，本
                                                                   most captivating one and modify it to make it
    稿では生み出される文化の創造性に着目するため，エージェ
                                                                   even more interesting.  Please output only the
    ントが生成するミームのテーマとして，「SF 小説のプロット
                                                                   new version of the idea and nothing else.  The
    (筋書き)」を用いる．特定のプロンプト(Please develop
                                                                   modified idea should maintain a similar length
       an original and captivating science fiction idea.
                                                                   to the original idea.
       Just output the idea, nothing else.) を初期プロント
    として与え，各エージェントの初期ミームを生成する．この    ミーム生成の段階では，学習戦略プロンプト+ [自身のミー
    プロセスにより，すべてのエージェントが独自のミームを持っ   ムや隣接エージェントからの伝達内容が","で区切られた文
    て開始する．本実験で用いた学習戦略としては，2 種類の個    字列] というプロンプトを用いてエージェントがミームを生成
    体学習戦略(基本的に独自の試行錯誤による改良または革新に   または修正する．
    基づく) と，[2] の定義中の4 種類の社会学習戦略(基本的に    各世代では，エージェントが設定された確率に従ってランダ
    周囲の模倣に基づく) を採用する．              ムに割り当てられた学習戦略を選択し，それを適用する．こ
       3.1 個体学習戦略                    のプロセスにより，社会的同調と個人の創造性のバランスを
     本実験で用いる個体学習戦略のためのプロンプトは以下の2   確保する．エージェントには，実験ごとに異なる確率で学習
    種類である．                              戦略を割り当て，(例S-rand:  0．75，I-refine: 0．2，
                                                               I-innov:  0．05) 各時間ステップではその確率に従ってラン
         • 改良戦略  (I-refine)  Please refine the current                                  ダムに学習戦略を選択する．
           idea.  Please output only the new version of                                        一回の実験は100 世代行われ，最終的に2500 個の異なる
           the idea and nothing else.  Ensure the output                                    アイデアが生成される．LLM モデルにはGoogle 社のVertex
           matches the length and format of the idea.                                                          AI 上のgemini-1.0-pro を使用する．
         • 革新戦略  (I-innov):    Several science fiction
           ideas will be presented.  Please create a new      4.  SF プロット進化の実験結果
           idea that is entirely different from them.
                                                             4.1 概要
           Please output only the new version of the idea
                                    本研究のモデルが複雑で魅力的な物語を進化させる能力を示
           and nothing else.  The modified idea should
                                          すために，特定の実験設定{S-attr:  0.75，I-refine:0.2，           maintain a similar length to the original
                                                               I-innov:0.05} のもとで生成された特に興味深いSF プロッ           idea.



                                                        2

## Страница 3

3O1-OS-44a-03


                          The 39th Annual Conference of the Japanese Society for Artificial Intelligence, 2025





     図1: 物語分布のUMAP 可視化．左: 6 つの異なる学習戦略
    の可視化．右: 個体学習の有無による分布の比較．

                                                   図2: 4 つの実験設定における主要なLIWC 指標
    トを選択し，その物語の特徴および生成の過程を紹介する．こ
    のアプローチにより，大規模言語モデル（LLM）がオープン
    エンドな文化進化を実現し，著名な文学作品に匹敵する洗練さ
    れたプロットを生成する可能性を示す．


     生成されたプロットの要約: 天才神経科学者アーニャは，人々
    が思考や感情だけでなく経験そのものを共有できる革新的技術
   「ケイデンス」を発見する．彼女は多様な才能を持つ仲間と共
    に研究を進め，人類の記憶や視点が融合する新たな共感の世界
    を生み出す．しかし，異次元の「マインド・スカルプターズ」
    がケイデンスを悪用しようとし，AI による記憶操作の脅威が
    迫る．アーニャは夢の力で希望を紡ぎ，人類の未来を守る決断
    を下す．最終的にケイデンスは世界の進化を導く新たな道具と
                                                 図3: 4 つの実験設定におけるトピック別LIWC 指標
    なる．
      評価: この実験設定では，基本的には社会学習戦略「多数派
    模倣戦略」が採用され，個体学習も一定の割合で採用される．  を取り入れた場合の影響を理解するために，2 つの特定の設
    この設定で生成された初期のプロットは「他者の記憶へのア   定を比較した．図1 の右側は{S-rand:  1.0，I-refine:
    クセスと操作」という比較的シンプルな概念に基づいていた．    0.0，I-innov:  0.0 }（社会学習のみ）と{S-rand:  0.75，
    しかし，最終的な物語は，夢へのアクセスを可能にする技術，    I-refine:  0.2，I-innov:  0.05 }（社会学習と個体学習
    これに基づくタイムトラベルの冒険，これらを悪用しようとす   の組み合わせ）の2 つの実験設定によるUMAP 可視化を示し
    る組織との戦い，そしてこれらの技術革新によってもたらされ    ている:
    るユートピア世界を含む，はるかに壮大で複雑なプロットに進    比較の結果，社会学習のみの設定ではプロットが一部の類似
    化した．この結果は，社会学習と個体学習を組み合わせること   した場所に分布しやすい一方，個体学習を取り入れると，類似
    で，高度で魅力的な物語を創出する力を示している．興味深い   したプロットの複数のバリエーションが維持される傾向が見ら
    ことに，このプロットは，筒井康隆による著名なSF 小説「パ   れ，文化の多様性が維持されることが示された．
      プリカ」[11] に類似している．この結果は，本稿で提案するモ                                                             4.3 語彙使用分析
    デルが，文化的進化のダイナミクスを研究するだけでなく，文                                                                             Linguistic Inquiry and Word Count（LIWC）ツール[9][10]
    化的成果物を生成するツールとして応用できる可能性を示して                                  を用いて生成された物語の心理的および言語的特徴を評価し
    いる．                                     た．各世代において，25 体のエージェントによって生成され
       4.2 進化した物語の可視化                     た25 の物語を1 つのテキストブロックに連結し，この集約さ
     図1 の左側は，6 つの実験設定（4 つの社会学習戦略と2   れたテキストを分析した．図2 は，4 つの実験設定における主
    つの個体学習戦略）における物語分布のUMAP 可視化を示   要なLIWC 指標としてAuthentic(真正性)，Tone(全体的なポ
     している．UMAP（Uniform Manifold Approximation and    ジティブさ)，Aﬀect(感情的な表現)，Cognition(認知性) に関
     Projection）は，高次元の物語ベクトルを2 次元空間に圧縮   する指標を，また，図3 は，トピック別のLIWC 指標として
    し，物語分布と多様性を視覚化する手法である．この図では，    memory(記憶)，tech(技術)，time(時間)，focusfuture(未来)
    本実験において，社会学習のみの設定が個体学習のみの設定   に関する指標を用いている．これにより，物語のナラティブ品
    よりも広く分散した物語分布を生成したことが示されている．  質，感情的深さ，テーマ内容に対する異なる学習戦略の影響を
     特に，S-rare(少数派模倣戦略) は，最も広範な分散を示し，  明らかにする．
    より高い多様性を反映している．社会学習のほうがより多様      4.3.1 LIWC 指標の解釈
    性を生み出すという一般的な理解と異なる結果を生み出した      LIWC 指標を用いた分析結果は，異なる学習戦略が生成さ
    理由は，本実験のプロンプト設定では，社会学習戦略が共通   れた物語の心理的およびテーマ的次元にどのような影響を与え
    して“ modify it even more interesting. ” のような価値を   るかを示している．特に，ランダムな社会学習戦略は，多様で
    高めるような指示を含んでいるのに対して，個体学習戦略は   動的な感情表現やテーマ内容を促進し，物語が狭いテーマや感
   “ Please reﬁne the current idea ” のように価値中立的な指   情のトーンに収束することを防いでいる．一方で，個体学習戦
    示にとどまっているためと考えられる．また，個体学習戦略   略は，物語をより高い感情的ポジティブさと低い真正性に向か



                                                        3

## Страница 4

3O1-OS-44a-03


                          The 39th Annual Conference of the Japanese Society for Artificial Intelligence, 2025


    わせながら，安定したテーマ的焦点を維持する．この結果は，        [3] A．Mesoudi: Cultural evolution: Integrating psychol-
    社会学習と個体学習が人工社会内で文化的成果物の進化を形成          ogy，evolution and culture，Current Opinion in Psy-
    する際に補完的な役割を果たしていることを示唆している．         chology，7，17–22 (2016)．

       4.4 考察                                                                    [4] J．Perez，C．L´eger，M．Ovando-Tellez，C．
     本研究で実施した実験の範囲内において，改良戦略や革新        Foulon，J．Dussauld，P．-Y．Oudeyer，C．Moulin-
    戦略といった個体学習戦略の導入が，生成された物語の多様性            Frier:  Cultural evolution  in populations  of Large
    と創造性を大幅に向上させることが示された．これは，改良戦         Language Models (LLM Culture)，arXiv preprint，
    略が既存の物語を洗練・改良し，深みと質を高める役割を果た          arXiv:2403．08882 (2024)．
    す一方，革新戦略が完全に新しいプロットの創造を促進し，豊
    かで多様性に富んだ文化進化に貢献することによる．今回の実         [5] A．Mesoudi:  An experimental simulation  of the
    験設定では，学習戦略のプロンプトに含まれる価値判断に関す           ”copy-successful individuals” cultural learning strat-
    る記述の影響によって，個体学習戦略よりも社会学習戦略のほ           egy:  adaptive landscapes，producer–scrounger dy-
    うが多様なストーリーが生成された可能性がある点には注意が        namics，and informational access costs，Evolution
    必要である．さらに，ランダム模倣戦略はLIWC パラメータ         and Human Behavior，29，350–363 (2008)．
    の変動を示し，持続的な多様性を維持する可能性を示唆してい
                                                                                             [6] V．Griskevicius et al．:  Going along versus going
    る．本研究の文脈では，生成された物語は高い創造性と革新性
                                                                                alone: when fundamental motives facilitate strategic
    を示し，LLM ベースのエージェントが創造的なコンテンツを
                                                                   (non)conformity，Journal of Personality and Social
    生成する能力を持つことを強調している．また，パプリカのよ
                                                            Psychology，91，281–294 (2006)．
    うな著名な作品との顕著な類似性は，エージェントが複雑で洗
    練されたアイデアを生み出す能力を有していることを示唆して         [7] Y．Kubo，T．Arita: A constructive model for the
    おり，さらに本プラットフォームを洗練していくことで，かつ           coevolution of memes and networks，Proceedings of
    てない新奇なストーリーを生み出し続けることが期待される．         the 33rd Symposium on Intelligent Systems，285–290
    これらの知見は，創造的な文化進化を促進するために多様な学           (2006) (in Japanese)．
    習戦略を統合することの有効性を，本研究の範囲内で裏付ける
    ものである．                                                                  [8] Vallinder，A．，Hughes，E．，2024．Cultural Evolu-
                                                                               tion of Cooperation among LLM Agents．https://doi．
      5. おわりに                                          org/10．48550/arXiv．2412．10270．
     本研究は，LLM ベースのエージェントを用いて多様で創造         [9] C．K．Chung，J．W．Pennebaker:  Linguistic
    的なSF プロットを生成することで，オープンエンドな文化進           Inquiry and Word Count (LIWC)，Applied Natural
    化を実現する可能性を示した．社会学習戦略と個体学習戦略         Language Processing，IGI Global，206–229 (2012)．
    を組み合わせることで，物語の多様性と質が大幅に向上し，パ          https://doi．org/10．4018/978-1-60960-741-8.ch012．
    プリカのような著名な作品に匹敵する成果が得られ，このアプ
                                                                                   [10] K．Chauhan，J．Donahue，B．Buck: Linguistic
    ローチが創造的AI アプリケーションにおいて持つ可能性を確
                                                                           Inquiry and Word Count (LIWC-22)．Methods and
    認する結果となった．今後の研究では，多様性を持続するため
                                                        Measures，LIWC Research (2023)．Retrieved Febru-
    の学習戦略の改良，創造性と一貫性のバランスを取る方法の
                                                                        ary 2，2024．
    導入，より高度な評価指標の統合に焦点を当てる予定である．
    さらに，ジャンルを超えた応用や長期的な実験を通じて，文化       [11] Y．  Tsutsui:   Paprika，  Shinchosha  (1993)  (in
    進化の動態に対するさらなる洞察を得るとともに，このフレー         Japanese)．
    ムワークの適応性を探求していく．

   謝辞

      本研究はGoogle Gemma 2 Academic Program の助成を
    受けた．

   参考文献

            [1] S．J．Shennan，J．R．Wilkinson: Ceramic style
            change and neutral evolution: a case study from Ne-
               olithic Europe，American Antiquity，66，577–593
           (2001)．

            [2] L．Rendell，L．Fogarty，W．J．E．Hoppitt，T．
        J．H．Morgan，M．M．Webster，K．N．Laland:
            Cognitive culture: Theoretical and empirical insights
             into social learning strategies，Trends in Cognitive
          Sciences，15(2)，68–76 (2011)．




                                                        4
