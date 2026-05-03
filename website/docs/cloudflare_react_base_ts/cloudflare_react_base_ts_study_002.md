# 第02章：Reactの超基本だけを先につかもう 🧩

この章では、React を「難しいフレームワーク」としてではなく、**画面を部品で作るための便利な道具**としてつかみます 😊
2026年4月17日時点で React 公式ドキュメントの最新メジャーは **19.2** で、学習導線は「コンポーネント → props → 条件分岐 → リスト表示 → イベント → state」の順で整理されています。さらに React 公式は新規コードで**関数コンポーネント**を勧めており、Cloudflare の公式 React 導線も **React SPA + Workers API + Cloudflare Vite plugin** を中心にしています。 ([React][1])

また、Create React App は現在メンテナンスモード扱いで、React 公式も新規プロジェクトでは Vite などの現代的なビルドツールやフレームワーク導線を案内しています。なのでこの教材でも、「古い作法を覚える」のではなく、**Cloudflare と相性のいい今のやり方**につながる React の最小限だけを身につけます 🌤️ ([React][2])

---

## この章のゴール 🎯🌷

この章で目指すのは、次の5つです。

* **コンポーネント**が「画面の部品」だとわかる
* **props** が「親から子へ渡す値」だとわかる
* **state** が「画面の中で変わる記憶」だとわかる
* **イベント**で「クリックされたらこうする」を書ける
* **`map`** で「配列から一覧表示」を作れる

ここで大事なのは、React を完璧に理解することではありません 🙌
**「画面を部品に分ける」「値が変わると見た目も変わる」**を体感できれば十分です。React 公式も、UI をコンポーネントの集まりとして考え、状態が変わると表示が更新される流れを学習の中心に置いています。 ([React][3])

---

## 1. Reactって、ひとことで言うと何？ 🤔✨


React は、**ユーザーインターフェースを小さな部品の集まりとして作るための JavaScript ライブラリ**です。ボタン、見出し、入力欄、カード、一覧などをそれぞれ部品にして、それらを組み合わせてページ全体を作ります。React 公式も、UI は小さな部品に分けられ、それを再利用しながら画面を組み立てる考え方を基本にしています。 ([React][4])

たとえば、あとで作る Cloudflare 連携アプリを思い浮かべると、こんな感じです ☁️

* 入力欄コンポーネント
* 送信ボタンコンポーネント
* 結果表示カードコンポーネント
* 履歴一覧コンポーネント

こうやって分けておくと、後から「見た目を変える」「AIの返事を出す」「Workers APIから受け取った結果を表示する」がかなり楽になります。Cloudflare の公式ガイドも、React を SPA の画面側、Workers を API 側として組み合わせる導線を示しています。 ([Cloudflare Docs][5])



---

## 2. まずは「コンポーネント」をつかもう 🧱

React のいちばん大事な考え方が **コンポーネント** です。
コンポーネントは、**見た目とちょっとしたふるまいをまとめた部品**です。React 公式では、コンポーネントは JavaScript 関数として書き、マークアップを返す形が基本です。 ([React][6])

たとえば、ボタンを 1 個の部品として書くなら、イメージはこうです 👇

```tsx
function MyButton() {
  return <button>送信</button>;
}
```

この書き方で大事なのは、**HTML っぽく見えても、ただの HTML ではない**ことです。React では **JSX** という書き方を使います。JSX は HTML に似ていますが、React 公式でも「少し厳密で、JavaScript の値を画面に差し込める構文」と説明されています。 ([React][7])

たとえば、変数を表示したいときは `{}` を使います ✨

```tsx
function Title() {
  const name = "こみやんまさん";
  return <h1>こんにちは、{name}さん</h1>;
}
```

ここではまだ「React の魔法」を考えなくて大丈夫です 😊
**関数の中で画面の見た目を返しているだけ**、くらいの理解で十分です。

---

## 3. props は「親から子へ渡すメモ」📦💌


次に覚えたいのが **props** です。
props は、**親コンポーネントから子コンポーネントへ渡す値**です。React 公式でも、親が子に props を渡し、子はそれを引数のように受け取って表示や動作に使う流れが基本として紹介されています。 ([React][8])

たとえば、「ボタンの文字だけ変えたい」とします。

```tsx
type ButtonProps = {
  label: string;
};

function MyButton({ label }: ButtonProps) {
  return <button>{label}</button>;
}

export default function App() {
  return (
    <div>
      <MyButton label="保存する" />
      <MyButton label="削除する" />
    </div>
  );
}
```

この例では、`MyButton` という部品そのものは同じです。
でも `label` を変えることで、**同じ部品を別の役割で再利用**できます 🌸

React を使うときは、まず

* 固定の見た目か
* 親から変えて渡したい値か
* 自分で変わっていく値か

を分けて考えると頭が整理しやすいです。
このうち、**親から渡す値**が props です 📮



---

## 4. state は「その部品の中の記憶」🧠✨

props が「外から渡される値」なら、state は**そのコンポーネント自身が持つ記憶**です。React 公式では、state は時間とともに変わるデータで、`useState` によって「値を保持すること」と「更新時に再描画を起こすこと」の両方を実現すると説明されています。 ([React][9])

たとえば、クリックするたびに数字を増やすならこうです。

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>いまの回数: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        1増やす
      </button>
    </div>
  );
}
```

ここで見てほしいのは 2 つです 🌟

* `count` が今の値
* `setCount(...)` が値を書き換えるための関数

そして `setCount` を呼ぶと、React がもう一度そのコンポーネントを呼び直して、**新しい見た目を画面に反映**してくれます。
つまり React の感覚は、**「DOM を手でいじる」のではなく、「状態を変えたら表示がついてくる」**です 😊 ([React][9])



---

## 5. イベントは「ユーザーの操作に反応する仕組み」🖱️⚡


React では、クリックや入力などのユーザー操作に反応するために **イベントハンドラ** を使います。公式でも、JSX にイベントハンドラを追加し、クリック・ホバー・フォーカスなどの操作に応じて関数を実行できると説明されています。 ([React][10])

いちばんよく使うのは `onClick` と `onChange` です。

```tsx
function Sample() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="文字を入れてね"
      />
      <button onClick={() => alert(text)}>
        表示する
      </button>
    </div>
  );
}
```

この例では、

* 入力欄に文字を入れる
* `onChange` が動く
* state が更新される
* 見た目にも最新の値が反映される

という流れになっています ✨

React 初学者が急に楽しくなるポイントはここです。
**「自分の操作で画面が変わる」**のが見え始めると、一気に理解しやすくなります 🌈

---

## 6. `map` は「配列から一覧を作る魔法」📚✨


React では、同じ形の表示をたくさん並べたいことがよくあります。たとえば、メモ一覧、検索結果一覧、AIの返答履歴などです。React 公式では、こうした一覧表示に JavaScript の **`map()`** を使って、配列から JSX の配列を作るやり方を基本として案内しています。さらに、各要素には **`key`** が必要で、通常はデータの ID を使うのが推奨されています。 ([React][11])

例を見てみます 👇

```tsx
type Item = {
  id: number;
  title: string;
};

const items: Item[] = [
  { id: 1, title: "Cloudflareを覚える" },
  { id: 2, title: "Reactを覚える" },
  { id: 3, title: "Workers AIを試す" },
];

function TodoList() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

`map()` は、配列の 1 個ずつを取り出して、新しい形に変えるための JavaScript の道具です。
React ではそれを使って、**「データの数だけ見た目を並べる」**ことができます 🌼

あとで Cloudflare 側の API から JSON を受け取ったら、その配列を `map()` で回して表示する場面がたくさん出てきます。ここで慣れておくと、第7章以降がかなり楽になります 🔗



---

## 7. この章で覚える最小セットは、この5語だけでOK 🪄

ここまでを一言でまとめると、こうです。

* **コンポーネント**
  画面の部品
* **props**
  親から子へ渡す値
* **state**
  その部品の中で変わる記憶
* **イベント**
  クリックや入力に反応する仕組み
* **`map`**
  配列から一覧表示を作る方法

この5つだけで、かなり「アプリっぽい画面」が作れます。
React 公式の学習順も、ほぼこの流れに沿っています。つまり今やっていることは、遠回りではなく**王道の最短ルート**です 🚶‍♂️✨ ([React][12])

---

## 8. 小さな完成例を見てみよう 💡☁️

ここでは、あとで Cloudflare Workers や Workers AI につなぎやすい形のミニ例を見てみます。
まだ API 通信はしません。**React だけで「入力 → 追加 → 一覧表示 → 選択」**を作ります。これだけでも、もう小さなアプリの骨組みです 😊

```tsx
import { useState } from "react";

type PromptItem = {
  id: number;
  text: string;
};

type PromptListProps = {
  items: PromptItem[];
  onSelect: (text: string) => void;
};

function PromptList({ items, onSelect }: PromptListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <button onClick={() => onSelect(item.text)}>
            {item.text}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState("まだ選ばれていません");
  const [items, setItems] = useState<PromptItem[]>([
    { id: 1, text: "要約して" },
    { id: 2, text: "やさしく言い換えて" },
  ]);

  const addItem = () => {
    if (!input.trim()) return;

    const newItem: PromptItem = {
      id: Date.now(),
      text: input,
    };

    setItems([...items, newItem]);
    setInput("");
  };

  return (
    <div>
      <h1>AIプロンプト候補メモ</h1>

      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="新しい候補を書く"
      />

      <button onClick={addItem}>追加</button>

      <p>選択中: {selected}</p>

      <PromptList items={items} onSelect={setSelected} />
    </div>
  );
}
```

このコードには、今覚えたいものが全部入っています 🌟

* `App` と `PromptList` が **コンポーネント**
* `items` と `onSelect` が **props**
* `input` `selected` `items` が **state**
* `onClick` `onChange` が **イベント**
* `items.map(...)` が **一覧表示**

しかもこの形は、あとでとても自然に Cloudflare へ伸ばせます。
たとえば第7章以降では、`addItem` の代わりに Worker API を呼んだり、選んだ文字列を Workers AI に送って返答を表示したりできます。Cloudflare では React 側から直接 AI の binding を触るのではなく、**Worker を通して安全に接続する**のが基本です。Bindings は Worker から Cloudflare の各種リソースへつなぐ仕組みで、Workers AI もその一つです。 ([Cloudflare Docs][13])

---

## 9. Reactでよくある「最初のつまずき」🚧😵‍💫

## つまずき1：props と state がごっちゃになる

よくある混乱はこれです。

* 親から渡される → **props**
* 自分で変わっていく → **state**

この区別だけ意識すると、かなり整理されます。
React のデータの流れは、基本的に**親から子へ渡す**形です。複数の子をそろえて動かしたいときは、共通の親に state を持たせて、子には props とイベントハンドラを渡します。 ([React][8])

## つまずき2：`map` で `key` を忘れる

一覧表示をするとき、React は各要素を区別するために `key` を使います。公式でも、通常はデータベースの ID のような安定した値を使うことが案内されています。**とりあえず index** で済ませたくなることもありますが、並び替えや追加削除がある画面では、安定 ID を使うほうが安全です。 ([React][4])

## つまずき3：state の配列を直接いじってしまう

React 公式では、state に入っている配列は**読み取り専用のように扱う**ことが勧められています。つまり `push()` や `pop()` で元配列を直接書き換えるより、`map()` や `filter()`、スプレッド構文で**新しい配列を作ってから state を更新**するのが基本です。 ([React][14])

## つまずき4：`useState` を条件分岐の中に書く

Hooks は React のルールがあり、`useState` などは**関数コンポーネントのトップレベル**で呼ぶ必要があります。ループや条件分岐の中に入れると壊れやすくなるので、最初のうちは「`use...` は一番上に書く」と覚えると安全です。 ([React][15])

## つまずき5：開発中に「なんか2回動く？」と感じる

React の Strict Mode では、開発中に不純な処理やバグを見つけやすくするため、純粋であるべき関数の一部を**2回呼ぶ**ことがあります。初学者にはびっくりポイントですが、「壊れた」のではなく、**怪しい書き方を見つけやすくするための仕組み**です。 ([React][16])



---

## 10. VS Code と GitHub Copilot はこの章でどう使う？ 🤝💻✨

2026年時点の VS Code では、GitHub Copilot は**チャット、インライン提案、エージェント機能**を持ち、より広い変更は agent mode、細かい修正は inline suggestions や chat が向いていると案内されています。VS Code 側の公式も、Copilot がプロジェクト全体を見ながら計画・編集・検証できることを説明しており、GitHub 公式も agent mode は「どのファイルを触るか判断し、コード変更やコマンド提案を行う」用途に向くとしています。 ([Visual Studio Code][17])

この章なら、Copilot にはこんな頼み方が相性よしです 😊

* 「`Button` コンポーネントを TypeScript で作って」
* 「props と state の違いがわかる最小サンプルを書いて」
* 「この `map` を使った一覧表示に `key` を追加して」
* 「初心者向けにこの TSX をやさしくコメントして」

ただし、Copilot は便利でも**答え合わせ機**ではありません。
「動くか」「型が合っているか」「自分が意味を説明できるか」は、必ず自分でも見るクセをつけましょう 🌱
その感覚は、Cloudflare の Worker や AI 周りを扱うときにもかなり大切です。

---

## 11. Cloudflare中軸の教材として、この章が大事な理由 ☁️⚛️🤖


この教材の主役は React ではなく、あくまで **Cloudflare を使った小さなアプリ作り**です。
でもそのためには、画面側で

* 入力を受け取る
* ボタンを押す
* 読み込み中を見せる
* 結果を一覧表示する

という基本動作が必要です。React は、その部分をかなり整理して書ける道具です。Cloudflare の公式 React ガイドも、React SPA を画面側に置き、Worker を API として組み合わせる構成を基本導線にしています。 ([Cloudflare Docs][5])

さらに AI 機能を入れるときも、ブラウザから直接いろいろ触るより、**React は入力と表示に集中し、AI やデータ処理は Worker 側に任せる**ほうが設計しやすいです。Cloudflare 公式でも、Bindings を使って Worker から Cloudflare の各サービスへつなぐ形が基本で、Workers AI もその一部として扱われています。 ([Cloudflare Docs][13])

つまりこの章は、React を深掘りする章ではなく、
**「Cloudflare の力を見やすい画面で使うための最低限の React を手に入れる章」**です 🌈

---

## 12. この章の理解チェック ✅🎓

ここまで読んだら、次の質問に答えられればOKです。

1. コンポーネントって何？
2. props と state の違いは？
3. ボタンを押したときに処理を動かすには何を書く？
4. 配列から一覧を作るには何を使う？
5. 一覧表示で `key` が必要なのはなぜ？

全部すらすら言えなくても大丈夫です 🙆
**「親から渡すのが props、自分で変わるのが state」**と、
**「配列は `map` で並べる」**が残っていれば十分前進です。

---

## 13. ミニ練習問題 📝🌼

## 練習1：あいさつカードを作ろう

`GreetingCard` コンポーネントを作って、`name` を props で受け取って表示してみましょう。

## 練習2：クリック回数カウンターを作ろう

`useState` を使って、ボタンを押すたびに数が増えるようにしてみましょう。

## 練習3：やりたいこと一覧を作ろう

文字列の配列を `map()` で `<li>` に変えて表示してみましょう。`key` も忘れずに入れてみましょう。

## 練習4：Cloudflareっぽい題材に変えよう

一覧の中身を
「要約する」「言い換える」「翻訳する」「3行で説明する」
みたいな AI 操作用の候補にしてみましょう 🤖

こうすると、第7章や第13章へつながる感覚がかなり出てきます。

---

## この章のまとめ 🌟

React の超基本は、実はそんなに多くありません。

* 画面は **コンポーネント** に分ける
* 値を渡すときは **props**
* 自分で変わる記憶は **state**
* 操作に反応するのが **イベント**
* 配列を並べるのが **`map`**

この5つがわかるだけで、**Cloudflare とつなぐ前の画面側の準備**はかなり進みます ☁️✨
次章では、TypeScript を「難問」ではなく「事故防止グッズ」として見ながら、React と Workers の間で安心して値をやり取りするための最小限を整理していきます 🛟

必要なら続けて、この教材の流れに合わせた **第3章** も同じテンションで作れます。

[1]: https://react.dev/versions?utm_source=chatgpt.com "React Versions"
[2]: https://react.dev/blog/2025/02/14/sunsetting-create-react-app?utm_source=chatgpt.com "Sunsetting Create React App"
[3]: https://react.dev/?utm_source=chatgpt.com "React"
[4]: https://react.dev/learn/describing-the-ui?utm_source=chatgpt.com "Describing the UI"
[5]: https://developers.cloudflare.com/workers/framework-guides/web-apps/react/?utm_source=chatgpt.com "React + Vite · Cloudflare Workers docs"
[6]: https://react.dev/learn?utm_source=chatgpt.com "Quick Start"
[7]: https://react.dev/learn/writing-markup-with-jsx?utm_source=chatgpt.com "Writing Markup with JSX"
[8]: https://react.dev/learn/passing-props-to-a-component?utm_source=chatgpt.com "Passing Props to a Component"
[9]: https://react.dev/learn/state-a-components-memory?utm_source=chatgpt.com "State: A Component's Memory"
[10]: https://react.dev/learn/responding-to-events?utm_source=chatgpt.com "Responding to Events"
[11]: https://react.dev/learn/rendering-lists?utm_source=chatgpt.com "Rendering Lists"
[12]: https://react.dev/learn/build-a-react-app-from-scratch?utm_source=chatgpt.com "Build a React app from Scratch"
[13]: https://developers.cloudflare.com/workers/runtime-apis/bindings/?utm_source=chatgpt.com "Bindings (env) - Workers"
[14]: https://react.dev/learn/updating-arrays-in-state?utm_source=chatgpt.com "Updating Arrays in State"
[15]: https://react.dev/warnings/invalid-hook-call-warning?utm_source=chatgpt.com "Rules of Hooks"
[16]: https://react.dev/reference/react/StrictMode?utm_source=chatgpt.com "<StrictMode> – React"
[17]: https://code.visualstudio.com/docs/copilot/overview?utm_source=chatgpt.com "GitHub Copilot in VS Code"
