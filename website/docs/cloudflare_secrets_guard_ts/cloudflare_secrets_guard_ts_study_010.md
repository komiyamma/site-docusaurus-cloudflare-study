# 第10章：APIキー・トークン・接続文字列の扱い方 🔑🧯

秘密情報といっても、種類はいろいろあります。  
APIキー、トークン、DB接続文字列、Webhook secretなど、それぞれ漏れたときの危険が違います。  
この章では、秘密情報の種類と置き場所を整理します 😊

---

## 1. APIキー 🔑

APIキーは、外部サービスを使うための鍵です。  
AIサービス、メール送信サービス、地図APIなどでよく使います。

漏れると、勝手に使われる可能性があります。  
その結果、料金が増えたり、アカウントが停止されたりすることがあります。

Workerで使うAPIキーは、Workers Secretに置きます。  
React側や `wrangler.jsonc` の `vars` には置きません。

---

![cloudflare_secrets_guard_ts_study_010_api_key_risk](./picture/cloudflare_secrets_guard_ts_study_010_api_key_risk.png)

## 2. Bearer token 🎫

Bearer tokenは、APIリクエストの認証に使われることがあります。

```http
Authorization: Bearer xxxxx
```

このtokenを持っている人が、本人のようにAPIを使える場合があります。  
そのため、APIキーと同じく厳重に扱います。

ログに出したり、エラー画面に出したりしないようにします。

---

![cloudflare_secrets_guard_ts_study_010_bearer_token](./picture/cloudflare_secrets_guard_ts_study_010_bearer_token.png)

## 3. DB接続文字列 🧾

DB接続文字列には、データベースの場所、ユーザー名、パスワードが含まれることがあります。

例です。

```text
postgres://user:password@host:5432/db
```

これはかなり重要な秘密情報です。  
漏れると、データベースへ接続される危険があります。

Workersから使うならSecretに置きます。  
ローカルでは `.dev.vars` に置き、Gitには入れません。

---

![cloudflare_secrets_guard_ts_study_010_db_connection](./picture/cloudflare_secrets_guard_ts_study_010_db_connection.png)

## 4. Webhook secret 🪝

Webhook secretは、外部サービスからの通知が本物か確認するために使います。  
たとえば、決済サービスやGitHubからのWebhookで使われることがあります。

Webhook secretが漏れると、偽の通知を作られる可能性があります。  
これもSecretとして扱います。

---

![cloudflare_secrets_guard_ts_study_010_webhook_secret](./picture/cloudflare_secrets_guard_ts_study_010_webhook_secret.png)

## 5. Secrets Storeという選択肢 ☁️

CloudflareにはSecrets Storeもあります。  
公式ドキュメントでは、Secrets StoreはWorkersやAI Gatewayとの統合が案内されています。

通常のWorkers Secretで十分な場面も多いですが、複数サービスで秘密情報を管理したい場合はSecrets Storeも選択肢になります。

初心者はまずWorkers Secretを使い、必要になったらSecrets Storeを調べる流れで大丈夫です。

---

![cloudflare_secrets_guard_ts_study_010_secrets_store](./picture/cloudflare_secrets_guard_ts_study_010_secrets_store.png)

## 6. 章末チェック ✅

- APIキーが漏れる危険を説明できる
- Bearer tokenをログに出してはいけないと分かる
- DB接続文字列はSecretに置くと分かる
- Webhook secretの役割が分かる
- Workers SecretとSecrets Storeの位置づけが分かる

この章で覚える一言はこれです。  
**秘密情報は種類ごとに危険を知り、Worker側の安全な場所に置きます 🔑🛡️**

