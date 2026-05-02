# 開発環境を作ろう：VS Code・Node・Wrangler・Copilot 🛠️ 学習教材アウトライン 15章構成 ☁️🛠️✨

## 第01章：Cloudflare開発の全体地図を見よう 🌍☁️🗺️

Cloudflareを、ただのCDNではなく「アプリを動かす開発基盤」としてつかむ章です。
ブラウザで見る世界と、VS Codeで書く世界と、CloudflareのEdgeで動く世界を分けて理解します。
「サーバーを借りて置く」と「Workersにコードを配る」の感覚の違いもここでつかみます。
ダッシュボード、Workers、Pages、AI、ストレージ、ログの位置関係もざっくり整理します。
最初から全部を覚えるのではなく、「どこに何があるか」を見失わないことを目標にします。
以後の章で出てくる言葉に、先に顔見せしておく役目です。
この章があると、後ろの設定やコマンドが急に怖くなくなります。
Cloudflare公式の今の導線でも、Workers は front-end、back-end、AI、background jobs まで含む中心基盤として案内されています。 ([Cloudflare Docs][2])

## 第02章：Windowsで開発の土台を整えよう 🪟💻☁️✨

ここではまず、VS Code と Node.js を使って Cloudflare開発の足場を作ります。
難しいツールを増やしすぎず、「まず動く」ことをいちばん大事にします。
Node系は新しさを追いすぎて混乱しないよう、学習では安定ラインを軸に見ます。
ターミナル操作も、PowerShellで必要最小限だけ覚える流れにします。
フォルダ、パス、package.json、依存関係の意味も、ここでやさしく整理します。
「何を入れたのか」「それは何のためか」が言える状態を作ります。
開発を始める前のモヤモヤを、この章でかなり減らします。
Node.js公式では 2026年4月時点で v24 が Active LTS、v25 が Current です。学習教材では安定重視で LTS を軸にするのが自然です。 ([Node.js][3])

## 第03章：VS CodeとGitHub Copilotを“理解の相棒”にしよう 🤖🧠☁️

この章では、VS Codeの画面に慣れながら、Copilotの使いどころを覚えます。
いきなり「全部書かせる」のではなく、「説明させる」「候補を出させる」「直させる」を分けて学びます。
Chat、インライン補完、編集提案、agent mode の役割の違いもここで整理します。
プロジェクト全体を読ませると強い場面と、1ファイルだけ見せるほうが安全な場面も扱います。
AIに聞くときの問い方まで教材に含めると、理解の伸びがかなり安定します。
「コードを吐かせる」より先に、「なぜそうなるか」を説明させる練習を入れます。
この章から、AIを学習補助として自然に使えるようにします。
GitHub Copilot と VS Code は、Chat・インライン補完・agent mode・MCP連携を公式に案内しており、IDE内でコード理解・修正・複数ファイル変更まで扱えます。 ([GitHub Docs][4])

## 第04章：C3で最初のCloudflareプロジェクトを作ろう 🚀📦☁️

いよいよ最初のプロジェクト作成です。
ここでは Cloudflare公式の今の入口である C3 を使って、最初の土台を作ります。
「create しただけで何が揃うのか」を、黒箱にせず一つずつ見ます。
テンプレートで何が自動生成されるかを知ると、あとで構成を見ても迷いにくくなります。
アカウント連携やログインの流れも、最初に一度体験しておくと安心です。
この章では成功体験を優先し、細かな理屈は後ろで回収します。
まずは「Cloudflare向けのプロジェクトが本当に生まれる」感覚をつかみます。
Cloudflare公式は `npm create cloudflare` を C3 の入口として案内しており、Workers / Pages の新規作成に使うのが現在の標準的な導線です。 ([Cloudflare Docs][1])

## 第05章：`wrangler.jsonc` とフォルダ構成を読めるようになろう 🧾🗂️☁️

この章では、生成されたプロジェクトを「なんとなく」ではなく読めるようにします。
特に大事なのが `wrangler.jsonc` で、ここがCloudflare側の設定の中心になります。
compatibility date、bindings、assets、name など、よく触る項目から順に見ます。
「この設定はローカルで効くのか、本番で効くのか」も丁寧に分けて教えます。
ついでに、src、public、設定ファイル、依存関係の置き場所も見ます。
設定ファイルを怖がらなくなると、Cloudflare学習がぐっと楽になります。
この章は“読解力”を作る章です。
Cloudflareは新規プロジェクトで `wrangler.jsonc` を推奨しており、Wrangler はローカルインストール前提の実行も公式で案内しています。 ([Cloudflare Docs][5])

## 第06章：ローカル実行の流れをつかもう 🔍⚡🧪

ここでは、書いたコードをすぐ試すためのローカル開発フローを学びます。
「保存したら確認」「壊れたら読む」「直したらまた試す」という最小ループを身につけます。
いまの Cloudflare では、Vite plugin を使う流れがかなり重要です。
従来の `wrangler dev` だけで考えるより、今の開発体験に合わせて学んだほうが自然です。
ブラウザでの確認、ターミナルのログ、エラーの見方もここで覚えます。
“何が壊れているのか” を読む癖を、早い段階でつけます。
小さな成功と小さな失敗をたくさん回す章です。
Cloudflare公式は Vite plugin を前面に出しており、Vite 6 の Environment API を土台に Workers runtime と直接つながる開発体験を案内しています。移行ガイドでも新しい導線が強調されています。 ([Cloudflare Docs][6])

## 第07章：Cloudflare向けTypeScriptの超入門 ✍️🔷☁️

TypeScriptを全部学ぶのではなく、Cloudflareで困らない分だけに絞って学びます。
変数、関数、型注釈、オブジェクト、JSON、非同期処理あたりを実例で押さえます。
`Request`、`Response`、`fetch` の型が読めるだけでも理解がかなり進みます。
そして大事なのが、Cloudflareの型は“実行環境に合わせて出す”という考え方です。
手で `Env` を書き続けるより、設定から型を生成する感覚を教えます。
型エラーは敵ではなく、早めに教えてくれる味方だと感じてもらう章です。
TypeScriptが少しわかるだけで、Copilotへの質問もかなり上手になります。
Cloudflare公式は `wrangler types` を推奨しており、型は compatibility date・flags・bindings に合わせて生成するのが正道です。TypeScript側は 2026年4月時点で 6.0 の公開も確認できます。 ([Cloudflare Docs][7])

## 第08章：最小のWorkerを作ってHTTPの流れを体感しよう 🌐📨✨

ここでは Hello World 的な最小Workerを作り、Request と Response の流れを体で覚えます。
URLにアクセスすると、どこでコードが走って、何が返るのかを追いかけます。
HTMLを返す、JSONを返す、条件で分岐する、といった基本もここで扱います。
Cloudflareのコードは「難しいバックエンド」ではなく、「ふつうのWebの延長」に見えるようにします。
1本の小さなWorkerでも、Webアプリの核がかなり入っています。
この章は「Cloudflareで自分のコードが動いた！」を感じるための章です。
小さくても、ここが教材の気持ちいい山場になります。
Workers は Cloudflareの中心的な実行基盤で、APIやアプリの処理をグローバルに動かす用途として公式に案内されています。 ([Cloudflare Docs][2])

## 第09章：Reactとつないで“小さな画面付きアプリ”にしよう ⚛️🎨☁️

この章では React を軽く使って、Cloudflareの処理と画面をつなぎます。
React自体を深掘りするのではなく、「入力して、送って、結果を表示する」を主役にします。
フロントとWorkerの役割分担が見えると、学習が一気に実務っぽくなります。
Viteベースで進めると、Reactの体験とCloudflareの体験がつながりやすいです。
状態管理は最小限にして、まずは props と state の基本だけで十分です。
「押したら動く」が増えると、学習の楽しさがかなり上がります。
ここで、APIを作る意味も自然に腹落ちします。
React docs の最新版は 19.2 で、Cloudflare側も Vite plugin と “React + Workers” の流れを強く押しています。既存フレームワークの自動設定も Wrangler で進めやすくなっています。 ([React][8])

## 第10章：Node.js気分のまま書いていい範囲を知ろう 🧰🟢☁️

この章では、「Cloudflare Workers は Node.js そのものではない」という大事な感覚を学びます。
でも同時に、今は Node互換もかなり進んでいて、昔よりずっと入りやすいことも知ります。
npmパッケージがそのまま使える場面と、工夫がいる場面を見分けます。
`nodejs_compat` の意味や、compatibility date とセットで考える理由もここで理解します。
「動かない理由」を環境差で説明できるようになると、詰まりにくくなります。
Nodeの知識を捨てるのではなく、Workers向けに少し補正するイメージです。
この章があると、後で外部ライブラリを使う時にかなり安心です。
Cloudflare公式は `nodejs_compat` を compatibility flag として案内しており、compatibility date 2024-09-23 以降が要件です。compatibility date は runtime 変更を取り込む基準でもあります。 ([Cloudflare Docs][9])

## 第11章：設定・環境変数・Secretsをきちんと扱おう 🔐🧪☁️

この章では、「動くけど危ない」を卒業します。
APIキーや秘密情報をコードに直書きしないことを、早い段階で習慣にします。
ローカル確認、本番デプロイ、複数環境での差分もやさしく扱います。
Cloudflareでは bindings と secrets の考え方がかなり重要です。
最近の Wrangler では、必要な secret 名を設定で宣言する流れも入りやすくなっています。
設定と型がつながっている感覚も、この章でかなり大事になります。
“安全に作る” を最初から当たり前にします。
Cloudflare公式は secrets / environment まわりを Wrangler設定と型生成に結びつけており、2026年3月には required secrets を `wrangler.jsonc` 側で宣言する機能も案内されています。 ([Cloudflare Docs][10])

## 第12章：テスト・ログ・デバッグの基本を身につけよう 🐞📈☁️

ここでは「うまくいかない時に、どこを見るか」を学びます。
ローカルのエラー表示、コンソールログ、型エラー、実行時エラーの違いを分けます。
Cloudflareでは Workers Logs や Observability がかなり使いやすくなっています。
新しく作ったWorkerで観測が最初から効く安心感も、教材に入れやすいです。
テストは難しくしすぎず、Vitest連携の考え方から入ると自然です。
「直感で直す」ではなく、「観測して直す」流れをここで覚えます。
この章から、ちょっとプロっぽい開発の空気が出てきます。
Cloudflare公式は Workers Logs と Observability を標準的な開発フローとして案内しており、新規Workerでは observability が有効、テストは Vitest integration 推奨です。 ([Cloudflare Docs][11])

## 第13章：デプロイ・GitHub連携・公開の流れを作ろう 🚢🔗☁️✨

この章では、ローカルで動いたものを「人に見せる形」に持っていきます。
Wranglerでのデプロイ、Cloudflareダッシュボードでの確認、更新の流れを学びます。
GitHubに置いて継続的に出していく発想も、ここでやさしく入れます。
毎回手でやるのか、自動化するのか、その違いも見えるようにします。
独自ドメインやRouteの細部は深追いしすぎず、公開の感覚を優先します。
「作る」だけでなく「届ける」までが開発だと体感する章です。
この章まで来ると、学習物でも立派な作品感が出ます。
Cloudflare公式は GitHub Actions による Workers デプロイを案内しており、Workers / Pages の公開フローをCLIとダッシュボードの両方から整えられます。 ([Cloudflare Docs][12])

## 第14章：Next.jsは“紹介するけど主役にしない”で学ぼう ▲⚛️☁️

この章では、Next.js を重く学ぶのではなく、「Cloudflare上ではどう扱うか」を把握します。
Reactだけで十分な場面と、Next.js を使うと嬉しい場面を分けて説明します。
Cloudflareでは Next.js のフルスタック運用は Workers 側の案内が中心です。
静的な書き出しだけなら Pages という選択肢もあります。
つまり、Next.js は使えるけれど、「Cloudflare学習の主役」ではありません。
ここでは紹介と見取り図にとどめ、深入りしすぎないのがむしろ親切です。
受講者が later に迷わないための、交通整理の章です。
Cloudflare公式は full-stack の Next.js を Workers + OpenNext アダプタで案内し、静的 export は Pages で扱う導線も別に用意しています。 ([Cloudflare Docs][13])

## 第15章：Cloudflare AI・Copilot・MCPで“今どきの開発体験”を仕上げよう 🤖☁️🪄

最後は、CloudflareらしいAI開発体験をまとめて触る章です。
Workers AI でモデル実行、AI Gateway でログ・キャッシュ・リトライ・フォールバック管理、Vectorize や AI Search で検索系の入口をつかみます。
Browser Rendering を使えば、ブラウザ操作や取得もCloudflare側へ寄せられます。
しかも今は Browser Rendering に CDP / MCP client 連携が入り、AIエージェントとつなぐ話まで見せやすいです。
さらに Cloudflare 自身が managed remote MCP servers を提供していて、docs や observability をAIに直接つなげる流れも教材にしやすいです。
ここでは「AIに全部任せる」ではなく、「調べる・見る・直す・試す」をAIで加速する考え方を学びます。
締めとして、小さなAI付きCloudflareアプリを作る最終演習につなげます。
Cloudflare公式は Workers AI、AI Gateway、Vectorize、AI Search、Browser Rendering、Workflows、Cloudflare管理のMCP servers、さらに cloudflare-docs / observability MCP 連携まで案内しています。GitHub Copilot / VS Code も agent mode と MCP を公式サポートしています。 ([Cloudflare Docs][14])

## この15章の設計意図 🎯

この構成は、**Cloudflareそのものが主役**で、React / Next.js / TypeScript はあくまで「Cloudflareを理解して使いこなすための道具」として配置しています。
また、2026年の公式導線に合わせて、**C3、Wrangler、`wrangler.jsonc`、Vite plugin、Copilot、MCP、Workers AI** を早い段階から自然に混ぜています。
その結果、古い「とりあえずサーバーを立てる教材」ではなく、**今のCloudflareらしい開発フローを、文系大学生レベルから無理なく登れる教材**になっています。 ([Cloudflare Docs][1])

[1]: https://developers.cloudflare.com/pages/get-started/c3/?utm_source=chatgpt.com "Create projects with C3 CLI"
[2]: https://developers.cloudflare.com/workers/?utm_source=chatgpt.com "Overview · Cloudflare Workers docs"
[3]: https://nodejs.org/en/about/previous-releases?utm_source=chatgpt.com "Node.js Releases"
[4]: https://docs.github.com/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide?utm_source=chatgpt.com "Asking GitHub Copilot questions in your IDE"
[5]: https://developers.cloudflare.com/workers/wrangler/configuration/?utm_source=chatgpt.com "Configuration - Wrangler · Cloudflare Workers docs"
[6]: https://developers.cloudflare.com/workers/vite-plugin/get-started/?utm_source=chatgpt.com "Get started · Cloudflare Workers docs"
[7]: https://developers.cloudflare.com/workers/languages/typescript/?utm_source=chatgpt.com "Write Cloudflare Workers in TypeScript"
[8]: https://react.dev/versions?utm_source=chatgpt.com "React Versions"
[9]: https://developers.cloudflare.com/workers/runtime-apis/nodejs/?utm_source=chatgpt.com "Node.js compatibility"
[10]: https://developers.cloudflare.com/changelog/post/2026-03-24-secrets-config-property/?utm_source=chatgpt.com "Declare required secrets in your Wrangler configuration"
[11]: https://developers.cloudflare.com/workers/observability/logs/workers-logs/?utm_source=chatgpt.com "Workers Logs"
[12]: https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/?utm_source=chatgpt.com "GitHub Actions · Cloudflare Workers docs"
[13]: https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/?utm_source=chatgpt.com "Next.js · Cloudflare Workers docs"
[14]: https://developers.cloudflare.com/workers-ai/?utm_source=chatgpt.com "Overview · Cloudflare Workers AI docs"
