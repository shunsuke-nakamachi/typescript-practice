# Chapter 25: 第3層 - 配信レイヤー (Controller / Adapter)

ついにお馴染みの Hono が登場します。コントローラーの役割は「翻訳」です。

## 1. 翻訳の役割

1. **HTTP リクエスト**を受け取る
2. データを **Use Case が扱える形式**（ただの引数）に変換する
3. Use Case を実行する
4. **結果を HTTP レスポンス**（JSON 等）に変換して返す

```typescript
// 例: Hono でのコントローラー
app.post('/books', async (c) => {
  const { id, title, price } = await c.req.json();
  
  // Use Case を実行（具体的な DB 操作は見えない）
  const result = await createBookUseCase.execute(id, title, price);
  
  return c.json(result, 201);
});
```

## 2. 依存関係の注入 (DI)

コントローラーは Use Case を必要とします。では、その Use Case はどこで作られるのでしょうか？
この「組み立て」については、後の Ch 27 で詳しく学びます。

## 演習

これまでに書いた Hono のハンドラーを、「ただ Use Case を呼ぶだけ」の薄いコードにリファクタリングしてみましょう。
