# Chapter 12: ルーティング、リクエスト、レスポンス (Routing, Request, Response)

Hono でどのように URL を処理し、データを受け取り、返すかを学びます。

## 1. パス形式とメソッド

Hono は、直感的なメソッド名でエンドポイントを定義できます。

```typescript
app.get('/posts', (c) => /* ... */)
app.post('/posts', (c) => /* ... */)
app.put('/posts/:id', (c) => /* ... */)
app.delete('/posts/:id', (c) => /* ... */)
```

## 2. コンテキスト (Context `c`)

Hono のハンドラーの第一引数 `c` には、リクエスト情報やレスポンスを作成するためのメソッドが豊富に用意されています。

- `c.req.param('id')`: パスパラメータを取得 (`/posts/:id`)
- `c.req.query('q')`: クエリパラメータを取得 (`/search?q=hono`)
- `await c.req.json()`: JSON 形式のリクエストボディを取得
- `c.text('...')`: テキストを返す
- `c.json({ ... })`: JSON を返す

## 演習課題

`exercise.ts` の指示に従って、パスパラメータやクエリパラメータを扱うエンドポイントを作成してみましょう。
