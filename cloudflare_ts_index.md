# Cloudflare学習教材 24章 完全版アウトライン ☁️📘✨

## 第1章　Cloudflareって何をしてくれるの？🌍

Cloudflare全体の役割を、まず大づかみに理解する章です。
CDN、DNS、WAF、Edge、Workers、AI系サービスまでを「1枚の地図」として整理します。
最初に全体像をつかむことで、あとで個別機能を学ぶときに迷いにくくします。
「Cloudflareは何のために使うのか」を、ふわっとではなく言葉にできるようにします。
ここは教材全体の“見取り図”になる導入章です。

## 第2章　Webとクラウドの超基礎を先に押さえよう 🧭

クラウド超入門者向けに、DNS、ドメイン、HTTPS、サーバー、Edgeの基本をやさしく整理します。
「Webサイトを見る」ときに裏側で何が起きているのかを、難しい専門語なしで学びます。
Cloudflareの話は、ネットの仕組みが少しわかると一気に理解しやすくなります。
文系寄りの初学者でも置いていかれないように、かなりかみくだいて進めます。
以後の章で出る用語の“土台”をここで作ります。

## 第3章　Cloudflareの管理画面を散歩しよう 👀

Cloudflareダッシュボードの見方に慣れる章です。
アカウント、Zone、Workers、R2、AI、Zero Trust などの位置関係をざっくり把握します。
最初は設定項目が多く見えますが、全部理解する必要はありません。
「どこに何があるか」を知るだけでも不安がかなり減ります。
ここでは操作に慣れることを第一目標にします。

## 第4章　開発環境を作ろう：VS Code・Node・Wrangler・Copilot 🛠️

VS Code を中心に、Cloudflare開発に必要な最初の環境を整える章です。
Wranglerでプロジェクトを作り、設定ファイルやフォルダ構成をざっくり読みます。
GitHub Copilot と MCP を使って、設定やコードをAIに説明させる練習もここで始めます。
AIを“答えを丸投げする道具”ではなく、“理解を助ける相棒”として使う流れを入れます。
Cloudflareは公式に Vite plugin と `wrangler.jsonc` を強く押していて、Copilot向けのプロンプト整備や Cloudflare 自身の MCP サーバーも用意されています。 ([Cloudflare Docs][2])

## 第5章　最初のWorkerを動かしてみよう 🚀

まずは Hello World 的な最小の Worker を作り、返事を返す体験をします。
Request と Response の流れを、できるだけシンプルなコードで学びます。
難しいことより先に、「Cloudflare上で自分のコードが動いた！」という感覚を得る章です。
ここで成功体験を作ると、以後の学習がかなり前向きになります。
Workers は Cloudflare の中心的な実行基盤なので、最初にここへ触れるのが自然です。 ([Cloudflare Docs][3])

## 第6章　ローカル実行・デバッグ・テストの基本 🔎

`wrangler dev` での確認、エラーの見方、ローカル検証の流れを覚える章です。
「本番に出す前に何を確認するのか」を、初心者目線で整理します。
bindings や `env` の感覚もここで軽く触れ、あとで storage や secrets を理解しやすくします。
うまく動かないときに慌てないための、基礎体力をつける章です。
Cloudflare公式もローカル開発・テスト・bindings の理解をかなり重視しています。 ([Cloudflare Docs][4])

## 第7章　静的サイトをCloudflareで公開しよう 🏠

HTML/CSS/JavaScript の小さなサイトを公開し、まず“見せる”体験をします。
フレームワークに入る前に、公開の流れをシンプルに体感する章です。
「ファイルを置いて見せる」と「Workerで動かす」の違いも自然にわかるようにします。
Cloudflare上で公開される感覚を、ここでしっかりつかみます。
新規では Workers Sites より Static Assets 系が自然な導線です。 ([Cloudflare Docs][5])

## 第8章　CloudflareのためのTypeScript超入門 ✍️

TypeScriptのすべてではなく、Cloudflare開発に必要な分だけを学ぶ章です。
型、関数、引数、返り値、オブジェクト、JSONまわりを実例で覚えます。
型のありがたさを、エラー予防や補完の気持ちよさから実感してもらいます。
難しい型パズルには踏み込まず、実務で困らない入口に絞ります。
「TypeScriptって怖くない」と思える状態を目指します。

## 第9章　WorkersでAPIを作る基本を身につけよう 🔗

GET と POST、JSON入出力、ルーティングの基本を学ぶ章です。
Webアプリらしさが一気に出てくるところなので、楽しくなりやすい章でもあります。
URLによって動きを変える、データを受け取る、結果を返す、という流れを学びます。
この章から、アプリ開発の手応えがかなり出てきます。
Workers は API 構築を主用途のひとつとして案内されています。 ([Cloudflare Docs][3])

## 第10章　Reactとつないで“小さなアプリ”にしよう ⚛️

React を軽めに使って、CloudflareのAPIと画面をつなぐ章です。
ボタンを押す、データを取得する、画面に表示する、という基本を体験します。
Reactは主役ではなく、Cloudflareを活かすためのフロント側パーツとして扱います。
「画面」と「処理」がつながることで、学習の楽しさがぐっと増します。
Cloudflare公式でも React 系は Vite plugin を軸に学ぶ流れがかなり強いです。 ([Cloudflare Docs][6])

## 第11章　公開の仕上げ：独自ドメイン・Routes・SSL/TLS 🌐

作ったアプリを、より本番らしく公開するための章です。
Custom Domains と Routes の違いをやさしく理解し、使い分けの感覚を持ちます。
独自ドメインをつなぐときの安心感や、SSL/TLSの意味もここで整理します。
「公開したアプリをどう世界に見せるか」が、この章でかなり腑に落ちます。
Custom Domains では Cloudflare が DNS レコードや証明書発行を自動で面倒を見る流れが案内されています。 ([Cloudflare Docs][7])

## 第12章　速くする基本：CDN・キャッシュ・Cache Rules ⚡

Cloudflareらしさが強く出る、“速くする”ための章です。
キャッシュとは何か、なぜ速くなるのか、どこをキャッシュすべきかを学びます。
Cache Rules を使って、何をどのくらい保存するかの考え方を身につけます。
ここが入ると、教材がただのサーバーレス入門ではなく“Cloudflare教材”になります。
Cloudflare公式でも Cache Rules はキャッシュ対象や期間を調整する中心機能として案内されています。 ([Cloudflare Docs][8])

## 第13章　守る基本：Secrets・Turnstile・Rate Limiting 🔐

安全に公開するための初歩をまとめて学ぶ章です。
secrets と environment variables の違い、APIキーの扱い方をここで整理します。
フォーム保護には Turnstile、乱打対策には Rate limiting rules という流れを学びます。
「動けばよい」から一歩進んで、「安全に動かす」視点を育てます。
Turnstile はサーバー側検証が必須で、Rate limiting rules はログインやAPI保護に使えると公式が案内しています。 ([Cloudflare Docs][9])

## 第14章　保存先の地図を作ろう：KV・D1・R2・DO・Queues 🗺️

Cloudflareには保存や処理の置き場がいくつもあるので、まず全体の役割分担を学ぶ章です。
KV は軽い保存、D1 はSQL、R2 はファイル、Durable Objects は状態、Queues は非同期、という地図を作ります。
どれをいつ使うかがわからないと、後半で混乱しやすいので先に整理します。
必要に応じて Hyperdrive や placement の考え方も軽く触れておきます。
Cloudflare公式も storage options と Workers の全体像の中で、こうした使い分けを案内しています。 ([Cloudflare Docs][10])

## 第15章　KVで“軽い記憶”を持たせよう 🗝️

Cloudflare Workers KV を使って、軽いデータ保存を学ぶ章です。
設定値、簡単なメモ、キャッシュのような用途をイメージしながら進めます。
まずは「保存する」「読む」という最小体験から始めます。
気軽に扱える保存先として、初心者にはとても入りやすい章です。
KV はグローバルな低遅延 key-value ストアとして案内されています。 ([Cloudflare Docs][11])

## 第16章　D1でSQLデータベース入門 🧾

D1を使って、表形式のデータをきちんと扱う章です。
テーブル作成、追加、一覧、更新、削除の基本を体験します。
SQLが初めてでも理解できるように、実用上よく出る文だけに絞って進めます。
アプリらしさが一段深まり、「本格感」が出てくる章です。
D1 は Cloudflare のネイティブな serverless SQL database として案内されています。 ([Cloudflare Docs][12])

## 第17章　R2とImagesでファイル・画像を扱おう 🖼️

画像やPDFなどのファイルを扱うための章です。
R2で保存の基本を学び、Imagesで最適化や変換の考え方にも触れます。
テキストだけでなく、メディアを扱えるようになると作れるものが大きく広がります。
Web制作寄りの人にも、とても実感しやすい章です。
R2 はオブジェクトストレージ、Cloudflare Images は画像の保存・変換・配信の一体型サービスとして案内されています。 ([Cloudflare Docs][13])

## 第18章　Durable Objectsで“状態のあるアプリ”へ 🧵

状態を持つアプリの考え方に入る章です。
チャット、共同編集、リアルタイム更新のような場面でなぜ普通のAPIだけでは足りないのかを学びます。
Durable Objects は compute と storage を近く持てるのが特徴なので、その感覚もつかみます。
ここで Cloudflare の設計思想の面白さがかなり見えてきます。
Durable Objects は stateful app の基礎機能で、placement の考え方とも相性が深いです。 ([Cloudflare Docs][14])

## 第19章　Queuesで“あとでやる処理”を学ぼう ⏳

その場で返さず、裏で処理する設計を学ぶ章です。
メール送信、画像処理、通知、集計などの題材と相性がよいです。
アプリを安定させるために、重い処理を分ける考え方を身につけます。
実務感がぐっと増す、重要な非同期入門の章です。
Cloudflare Queues は guaranteed delivery を持つメッセージキューとして案内されています。 ([Cloudflare Docs][15])

## 第20章　定期実行と長い処理：Cron TriggersとWorkflows 🕰️

定期実行と多段処理を学ぶ章です。
Cron Triggers で「毎朝実行」、Workflows で「失敗時リトライ込みの長い処理」を体験します。
Queuesよりさらに一歩進んだ、“運用できる自動化”の入口になります。
AIの埋め込み生成やR2後処理など、後半のAI章ともつながりやすいです。
Workflows は durable multi-step 実行、Cron Triggers は Wrangler 設定から扱える定期実行として案内されています。 ([Cloudflare Docs][16])

## 第21章　運用の基本：Logs・Observability・障害対応 📈

作るだけで終わらず、動いている状態を観測するための章です。
Workers Logs、エラー、分析の基本を学び、「どこを見れば原因がわかるか」を身につけます。
本番運用では、コードを書く力と同じくらい“見る力”が大切です。
小さなアプリでも、最初から観測の習慣を入れておくと強いです。
Cloudflare Workers には observability と logs が標準的に用意されています。 ([Cloudflare Docs][17])

## 第22章　Workers AIでAI機能を1本入れてみよう 🤖

CloudflareのAI機能に本格的に入る最初の章です。
文章生成、要約、分類、埋め込みなど、わかりやすい例から始めます。
「AIを外部の別世界ではなく、Cloudflareアプリの一部として使う」感覚を育てます。
初心者でもAI付きアプリの第一歩を踏み出せるようにします。
Workers AI は Cloudflare の global network 上で serverless にAIモデルを実行できるサービスです。 ([Cloudflare Docs][18])

## 第23章　AI Gateway・Vectorize・AI Search・Browser Rendering 🧠

AI機能を“遊び”から“実用”へ進める章です。
AI Gatewayでログ・キャッシュ・リトライ・フォールバックを管理し、Vectorizeでベクトル検索の基礎を学びます。
AI Search では、サイトや非構造データを自然言語で検索する全体像をつかみます。
Browser Rendering も使い、動的ページの取得や抽出の発想まで見せます。
Cloudflare公式でも AI Search は Vectorize・AI Gateway・R2・Browser Rendering・Workers AI と連携する形で案内されています。 ([Cloudflare Docs][19])

## 第24章　総仕上げ：作品制作と発展ロードマップ 🏁

最後は、Reactフロント・Workers API・保存機能・AI機能を組み合わせた小さな完成作品を作ります。
ここまでの学びを1本のアプリにまとめ、「Cloudflareで作れた！」という実感を得る章です。
あわせて、Cloudflare Tunnel や Zero Trust、Next.js連携、MCPサーバー自作などの次の道も紹介します。
本編はここで終わりですが、学習を続けるための地図まで渡して締めます。
Tunnel は公開IPなしで安全に接続でき、Cloudflare上で remote MCP server を作る道も公式に案内されています。 ([Cloudflare Docs][20])

[1]: https://developers.cloudflare.com/workers/wrangler/configuration/?utm_source=chatgpt.com "Configuration - Wrangler · Cloudflare Workers docs"
[2]: https://developers.cloudflare.com/workers/get-started/guide/?utm_source=chatgpt.com "Get started - CLI · Cloudflare Workers docs"
[3]: https://developers.cloudflare.com/workers/?utm_source=chatgpt.com "Overview · Cloudflare Workers docs"
[4]: https://developers.cloudflare.com/workers/development-testing/?utm_source=chatgpt.com "Development & testing · Cloudflare Workers docs"
[5]: https://developers.cloudflare.com/workers/configuration/sites/start-from-existing/?utm_source=chatgpt.com "Start from existing · Cloudflare Workers docs"
[6]: https://developers.cloudflare.com/workers/vite-plugin/get-started/?utm_source=chatgpt.com "Get started · Cloudflare Workers docs"
[7]: https://developers.cloudflare.com/workers/configuration/routing/custom-domains/?utm_source=chatgpt.com "Custom Domains · Cloudflare Workers docs"
[8]: https://developers.cloudflare.com/cache/?utm_source=chatgpt.com "Cloudflare Cache (CDN) docs"
[9]: https://developers.cloudflare.com/workers/configuration/environment-variables/?utm_source=chatgpt.com "Environment variables - Workers"
[10]: https://developers.cloudflare.com/workers/platform/storage-options/?utm_source=chatgpt.com "Choosing a data or storage product. · Cloudflare Workers ..."
[11]: https://developers.cloudflare.com/kv/?utm_source=chatgpt.com "Cloudflare Workers KV"
[12]: https://developers.cloudflare.com/d1/get-started/?utm_source=chatgpt.com "Getting started · Cloudflare D1 docs"
[13]: https://developers.cloudflare.com/r2/?utm_source=chatgpt.com "Overview · Cloudflare R2 docs"
[14]: https://developers.cloudflare.com/durable-objects/?utm_source=chatgpt.com "Overview · Cloudflare Durable Objects docs"
[15]: https://developers.cloudflare.com/queues/?utm_source=chatgpt.com "Overview · Cloudflare Queues docs"
[16]: https://developers.cloudflare.com/workers/examples/cron-trigger/?utm_source=chatgpt.com "Setting Cron Triggers · Cloudflare Workers docs"
[17]: https://developers.cloudflare.com/workers/observability/?utm_source=chatgpt.com "Observability - Workers"
[18]: https://developers.cloudflare.com/workers-ai/?utm_source=chatgpt.com "Overview · Cloudflare Workers AI docs"
[19]: https://developers.cloudflare.com/ai-gateway/?utm_source=chatgpt.com "Overview · Cloudflare AI Gateway docs"
[20]: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/?utm_source=chatgpt.com "Cloudflare Tunnel · Cloudflare One docs"
