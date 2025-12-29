# Chapter 14: Zod バリデーション (Zod Validation)

Web API 開発において、クライアントから送られてくるデータが正しい形式かチェック（バリデーション）することは非常に重要です。Hono と相性抜群の 「Zod」 を学びます。

## 1. Zod とは？

Zod は TypeScript-first なスキーマ宣言・バリデーションライブラリです。「まず型を定義して、それを使って値をチェックする」という流れをスムーズに行えます。

```typescript
import { z } from 'zod'

const userSchema = z.object({
  id: z.number(),
  name: z.string().min(2),
  email: z.string().email()
})

// バリデーション実行
const result = userSchema.parse({ id: 1, name: "Alice", email: "alice@example.com" })
```

## 2. Hono Zod Validator

Hono には公式のミドルウェア `@hono/zod-validator` があります。これを使うと、リクエストボディやクエリをその場でバリデーションし、不正な場合は自動で 400 Bad Request を返すことができます。

```typescript
import { zValidator } from '@hono/zod-validator'

app.post('/user', zValidator('json', userSchema), (c) => {
  const data = c.req.valid('json') // 型が付いた安全なデータ
  return c.json(data)
})
```

## 演習課題

`exercise.ts` の指示に従って、投稿記事（Post）のバリデーションスキーマを作成してみましょう。
