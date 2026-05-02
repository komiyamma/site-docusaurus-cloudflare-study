# 第07章：Workers AIでembeddingを作ってVectorizeへ保存しよう 🧩

Vectorizeへ入れるベクトルは、Workers AIで作れます。  
ここでは、学習メモをembeddingにして保存する流れを見ます。

---

## 1. 文章からembeddingを作る 🤖

![Embedding Generation](./picture/cloudflare_ai_functions_ts_study_007_01_embedding_generation.png)

Workers AIのembeddingモデルを使います。

```ts
const embedding = await env.AI.run("@cf/baai/bge-base-en-v1.5", {
  text: ["Cloudflare Workersを学ぶメモ"],
});
```

モデル名や入力形式は、Workers AIのModel Catalogで確認します。

---

## 2. Vectorizeへinsertする 📥

![Inserting into Vectorize](./picture/cloudflare_ai_functions_ts_study_007_02_vectorize_insertion.png)

Vectorizeへ保存する例です。

```ts
await env.VECTORIZE.insert([
  {
    id: noteId,
    values: embedding.data[0],
    metadata: {
      title: "Workers学習メモ",
      source: "study-note",
    },
  },
]);
```

`id` は後でD1やR2の元データとつなぐために使います。

---

## 3. metadataを考える 🏷️

![Metadata Structure](./picture/cloudflare_ai_functions_ts_study_007_03_metadata_structure.png)

metadataには、検索後に使う情報を入れます。

- title
- source
- r2Key
- userId
- createdAt
- visibility

ただし、長文本文やsecretを入れすぎないようにします。

---

## 4. D1ともつなげる 🗄️

![Linking Vectorize and D1](./picture/cloudflare_ai_functions_ts_study_007_04_linking_d1.png)

本文や詳しい情報はD1へ置きます。

```text
D1: noteId, title, body
Vectorize: noteId, embedding, metadata
```

検索でnoteIdを取り、D1から本文を読む構成です。

---

## 5. 章末チェック ✅

![Chapter Summary](./picture/cloudflare_ai_functions_ts_study_007_05_summary.png)

- Workers AIでembeddingを作れる
- Vectorizeへinsertできる
- vector idで元データとつなげると分かる
- metadataに入れる情報を選べる
- 本文はD1やR2へ置く設計が分かる

この章で覚える一言はこれです。  
**embeddingはVectorizeへ、本文はD1やR2へ置いてIDでつなげます 🧩**
