# Chapter 18: テスト (Testing)

書いたコードが期待通りに動くか、自動でチェックする仕組みを導入します。

## 1. Vitest とは？

Vite エコシステムの高速なテストランナーです。Hono のテストとも非常に相性が良いです。

## 2. Hono アプリのテスト

Hono の `app.request()` を使うと、実際にサーバーを起動せずにリクエストを送った結果を確認できます。

```typescript
test('GET /hello returns 200', async () => {
  const res = await app.request('/hello')
  expect(res.status).toBe(200)
})
```

## 演習課題

Vitest をセットアップし、最初のエンドポイントテストを書いてみましょう。
