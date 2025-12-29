# Chapter 27: 依存性の注入とアプリの組み立て (DI & Wiring)

バラバラに作ったレイヤーを、一つのアプリケーションとして動くように繋ぎ合わせます。

## 1. Dependency Injection (DI) とは？

コンストラクタで外部からオブジェクト（依存）を渡してもらうテクニックです。
これを行うことで、プログラムを実行する直前まで「どの実装（メモリ版、本物のDB版など）」を使うか決めるのを遅らせることができます。

```typescript
// 組み立て (Wiring)
const repo = new InMemoryBookRepository(); // 好きな実装を選ぶ
const useCase = new CreateBookUseCase(repo); // repo を注入
const app = new Hono();

app.post('/books', async (c) => {
  // useCase を実行
});
```

## 2. DI コンテナ

プロジェクトが大きくなると、この組み立てが大変になります。それを自動で行ってくれるのが「DI コンテナ」と呼ばれるツールですが、まずは手動で組み立てる「Manual DI」をマスターしましょう。

## 演習

各レイヤーのクラスをインポートし、プロジェクトのルートにある `main.ts` で一つに繋ぎ合わせてサーバーを起動してみましょう。
