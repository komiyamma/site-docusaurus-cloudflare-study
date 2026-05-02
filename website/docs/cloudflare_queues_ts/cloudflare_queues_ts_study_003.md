# 第03章：最初のQueueを作ろう 🛠️

ここからは、実際にQueueを作る準備をします。  
Windows、VS Code、Node、Wranglerを使う前提で進めます。

---

## 1. Queueを作成する 📬

WranglerでQueueを作ります。

```powershell
npx wrangler queues create contact-jobs
```

![Creating a new Queue via terminal](./picture/cloudflare_queues_ts_study_003_create_queue.png)

名前は、用途が分かるものにします。

```text
contact-jobs
email-jobs
image-processing-jobs
ai-embedding-jobs
```

あとから見て分かる名前が大切です。

---

## 2. Producer bindingを書く ⚙️

`wrangler.jsonc` にproducer bindingを追加します。

```jsonc
{
  "queues": {
    "producers": [
      {
        "binding": "CONTACT_QUEUE",
        "queue": "contact-jobs"
      }
    ]
  }
}
```

![Producer binding in config file](./picture/cloudflare_queues_ts_study_003_producer_binding.png)

Workerでは `env.CONTACT_QUEUE` として使えます。

---

## 3. Env型を書く 🧩

TypeScriptではEnv型も用意します。

```ts
export interface Env {
  CONTACT_QUEUE: Queue<ContactJob>;
}

type ContactJob = {
  jobId: string;
  name: string;
  message: string;
};
```

![TypeScript Env types for Queue](./picture/cloudflare_queues_ts_study_003_env_types.png)

型があると、メッセージの形を間違えにくくなります。

---

## 4. まずは小さく始める 🌱

最初からメールAPIやAI APIまでつなぐと混乱します。  
まずはQueueへ入れて、consumerで `console.log()` するだけで十分です。

```text
第1段階: sendしてlog
第2段階: D1へ保存
第3段階: 外部APIを呼ぶ
```

![Starting small with queues](./picture/cloudflare_queues_ts_study_003_start_small.png)

段階を分けると、エラーの場所を見つけやすくなります。

---

## 5. 章末チェック ✅

- WranglerでQueueを作れる
- `queues.producers` のbindingを書ける
- Env型に `Queue<T>` を書ける
- Queue名は用途が分かる名前にすると分かる
- 最初はlogだけで試せばよいと分かる

この章で覚える一言はこれです。  
**Queueは、作成・binding・型定義の3点セットで準備します 🛠️**

![Summary of queue preparation](./picture/cloudflare_queues_ts_study_003_summary.png)
