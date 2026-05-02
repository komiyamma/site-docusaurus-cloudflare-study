# 静的サイトをCloudflareで公開しよう 15章アウトライン案 🏠📘🌈

## この教材のゴール 🎯

HTML/CSS/JavaScript の小さなサイトを Cloudflare に公開し、`workers.dev` で確認し、独自ドメインへ載せ替え、キャッシュや安全対策を入れ、最後は React の軽い導入と Cloudflare AI の入り口まで体験できる構成です。
「とりあえず公開できた！」で終わらず、「どう速くするか」「どう安全にするか」「どう少し賢くするか」まで、やさしく一歩ずつ登れる流れにします。([Cloudflare Docs][1])

## 第01章： Cloudflareで静的サイトを出すってどういうこと？ ☁️

最初は、Cloudflare の中で「静的ファイルを置いて見せる」「Worker で動く処理を返す」「Pages で公開する」の3つを、図でざっくり理解する章です。演習は、1ページのプロフィールサイトを題材に、どこが静的ファイルでどこが動的処理かを色分けすること。ここで“Cloudflareで見せる”全体像をつかみます。([Cloudflare Docs][1])

## 第02章： Web公開の超基礎をやさしく整理しよう 🌍

この章では、ドメイン、DNS、HTTPS、CDN、キャッシュ、Edge という言葉を、専門用語まみれにせずに整理します。演習は「ブラウザでURLを開いたとき、裏で何が起きるか」をマンガみたいな流れ図にすること。Cloudflare の設定画面を怖がらなくなるための土台作りです。([Cloudflare Docs][3])

## 第03章： Cloudflareダッシュボードを散歩しよう 👀

Workers & Pages、DNS、Cache、AI、R2 など、今回よく使う場所だけに絞って眺める章です。演習は、静的サイト公開に直接関係するメニューに印を付けること。全部を覚えるのではなく、「迷子にならない」ことを最優先にします。([Cloudflare Docs][4])

## 第04章： VS CodeとGitHub Copilotで“学びやすい開発環境”を作ろう 🛠️🤖

ここでは VS Code で作業を始め、Copilot に「この設定は何？」「このエラーを子ども向けに説明して」みたいに聞きながら進む流れを入れます。Cloudflare 公式も GitHub Copilot 向けに `.github/copilot-instructions.md` を置くやり方を案内していて、VS Code 側でも Copilot は標準搭載です。演習は、Cloudflare 用の Copilot 指示ファイルを 1 つ作って、説明の粒度をそろえることです。([Cloudflare Docs][5])

## 第05章： C3で最初の静的サイト雛形を作ろう 🚀

この章では `create-cloudflare` を使って、最小の静的サイト雛形を作ります。最初は凝らずに、見出し・本文・画像1枚くらいの小さなサイトでOK。演習は「自分の趣味紹介ミニサイト」を作ることにして、HTML/CSS/JavaScript の役割分担を体で覚えます。([Cloudflare Docs][6])

## 第06章： Workers Static Assetsで公開してみよう 📦

ここが教材の最初の山です。Cloudflare では静的アセットを Worker の一部として配信でき、`wrangler deploy` で `*.workers.dev` に公開できます。演習は、作ったサイトを実際にアップしてURLで見られるところまで進めること。しかも静的アセットへのリクエストは無料・無制限なので、「まず公開して触る」教材と相性がとても良いです。([Cloudflare Docs][1])

## 第07章： `wrangler.jsonc` を読めるようになろう 🧾

この章は設定ファイルの恐怖をなくす章です。`name`、`compatibility_date`、`assets.directory`、`workers_dev` など、静的サイト公開に必要な項目だけをやさしく読みます。Cloudflare は新規プロジェクトで `wrangler.jsonc` を推奨しているので、ここで「設定は難しい呪文じゃなくて、公開の地図なんだ」とわかるようにします。演習は、`assets.directory` を自分の構成に合わせて書き換えることです。([Cloudflare Docs][7])

## 第08章： `workers.dev` で確認しよう、でも本番との違いも知ろう 🔍

この章では `workers.dev` を使って公開確認する流れを学びます。`workers.dev` は最初の確認にはとても便利ですが、本番用途では Route や Custom Domain が推奨されます。演習は、`workers.dev` のURLを開き、更新して再デプロイして、変化が反映される気持ちよさを体験すること。必要ならアクセス制限も軽く触れます。([Cloudflare Docs][8])

## 第09章： 独自ドメインとSSL/TLSをつなごう 🌐🔐

この章では、`example.com` や `site.example.com` で見せるところまで進みます。Cloudflare の Custom Domains は DNS 設定や証明書発行をかなり自動で面倒見てくれるので、初心者でも「自分のドメインで公開できた！」を体験しやすいです。演習は、サブドメイン1つをつないで、`workers.dev` と独自ドメインの役割の違いを言葉にすることです。([Cloudflare Docs][3])

## 第10章： 速くする基本：キャッシュを味方につけよう ⚡

Cloudflareらしさがグッと出る章です。CSS、JS、画像、PDF は標準キャッシュの話と相性が良い一方、HTML や JSON はデフォルトではキャッシュされません。だから「何を速くしたいのか」を考えて Cache Rules を使う感覚を学びます。演習は、トップページHTMLは短め、画像は長め、というようにキャッシュ方針を自分で決めることです。([Cloudflare Docs][9])

## 第11章： 画像・PDF・重いファイルをどう置くか考えよう 🖼️📄

静的サイトは画像で重くなりやすいので、この章では「何を同梱し、何を外に置くか」を考えます。基本は Static Assets で十分ですが、ファイルが増える、画像配信をもっと細かくやりたい、大きめアセットを扱いたい、という時に R2 や関連サービスへ進む道筋をここで軽く見せます。演習は、画像多めのページを題材に、読み込みを軽くする改善案を3つ出すことです。([Cloudflare Docs][1])

## 第12章： Reactを少しだけ入れて“静的サイト＋ちょい動き”にしよう ⚛️

ここでは React を主役にしすぎず、「Cloudflare上の静的サイトに少しインタラクションを足す」ために使います。Cloudflare の React + Vite 導線では、Vite plugin が Workers runtime にかなり近いローカル体験を作ってくれますし、SPA の場合は `not_found_handling = "single-page-application"` の考え方も大事です。演習は、ボタンで表示切替する小さな React SPA を作って Cloudflare に載せることです。([Cloudflare Docs][10])

## 第13章： フォーム公開の安全対策を入れよう 🛡️

静的サイトでも、お問い合わせや簡単な投稿フォームを置くと一気に実用感が出ます。この章では Turnstile、レート制限、プレビューURLの扱いなど、「公開したら困ること」を先回りして考えます。演習は、お問い合わせフォームの設計図を作り、「迷惑送信をどう減らすか」を文章で説明することです。([Cloudflare Docs][11])

## 第14章： GitHub連携とWorkers Buildsで“更新しやすいサイト”にしよう 🔁

公開はできても、更新が面倒だと続きません。この章では GitHub とつなぎ、push で自動ビルド・自動デプロイされる流れを作ります。Cloudflare の Workers Builds は GitHub / GitLab 連携、preview URL、framework 検出、必要に応じた自動PRまで持っているので、教材としても“いまどき感”があります。演習は、テキスト1行を直して push し、preview URL で確認してから本番反映する流れを体験することです。([Cloudflare Docs][12])

## 第15章： Cloudflare AIで“ただの静的サイト”を一歩進化させよう 🤖✨

最後は AI の入り口です。まず Workers AI で「ページ内容を3行要約する」「Q&Aボタンを付ける」などの軽い機能を足し、さらに発展編として AI Search でサイト内検索を自然言語化する道を見せます。AI Search は Web サイトを継続クロールして自然言語検索でき、public endpoint や UI snippets、CLI 管理も進んでいます。さらに旧 Browser Rendering は今は Browser Run 表記なので、教材ではその呼び名も最新化しておくと親切です。最後に「Next.js は紹介まで」に留め、Cloudflare主軸のまま次の学習先だけを案内して締めます。([Cloudflare Docs][13])

## この15章構成のポイント 💡

この並びだと、最初は「HTML/CSS/JS を置いて見せる」ことに集中し、そのあとで `wrangler.jsonc`、独自ドメイン、キャッシュ、安全対策、更新自動化へと自然に進めます。React は中盤で軽く、Next.js は最後に入口だけ、AI は終盤で“おまけ”ではなく“今の Cloudflare なら普通に触ってよい機能”として扱えるのが強みです。Cloudflare 公式の新しい静的サイト導線、Vite plugin、Workers Builds、AI Search / Workers AI の流れとも噛み合っています。([Cloudflare Docs][6])


[1]: https://developers.cloudflare.com/workers/static-assets/ "Static Assets · Cloudflare Workers docs"
[2]: https://developers.cloudflare.com/ai-search/ "Cloudflare AI Search · Cloudflare AI Search docs"
[3]: https://developers.cloudflare.com/workers/configuration/routing/custom-domains/ "Custom Domains · Cloudflare Workers docs"
[4]: https://developers.cloudflare.com/pages/ "Overview · Cloudflare Pages docs"
[5]: https://developers.cloudflare.com/workers/get-started/prompting/ "Prompting · Cloudflare Workers docs"
[6]: https://developers.cloudflare.com/workers/static-assets/get-started/ "Get Started · Cloudflare Workers docs"
[7]: https://developers.cloudflare.com/workers/wrangler/configuration/ "Configuration - Wrangler · Cloudflare Workers docs"
[8]: https://developers.cloudflare.com/workers/configuration/routing/workers-dev/ "workers.dev · Cloudflare Workers docs"
[9]: https://developers.cloudflare.com/cache/concepts/default-cache-behavior/ "Default Cache Behavior · Cloudflare Cache (CDN) docs"
[10]: https://developers.cloudflare.com/workers/development-testing/wrangler-vs-vite/ "Choosing between Wrangler & Vite · Cloudflare Workers docs"
[11]: https://developers.cloudflare.com/agents/model-context-protocol/mcp-servers-for-cloudflare/?utm_source=chatgpt.com "Cloudflare's own MCP servers"
[12]: https://developers.cloudflare.com/workers/ci-cd/builds/ "Builds · Cloudflare Workers docs"
[13]: https://developers.cloudflare.com/workers-ai/ "Overview · Cloudflare Workers AI docs"