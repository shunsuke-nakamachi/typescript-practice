# Column: Chapter 14 & 15 の補足

## 詰まりそうなポイント：パッケージのインストール
`@hono/zod-openapi` を使うには、追加のパッケージが必要です。
```bash
npm install zod @hono/zod-validator @hono/zod-openapi @hono/swagger-ui
```

## 豆知識：Zod の推論 (z.infer)
Zod でスキーマを定義すると、そこから TypeScript の型（interface や type）を自動で生成できます。
```typescript
type User = z.infer<typeof userSchema>
// これで User 型が手に入る！
```
二重に定義する必要がないため、保守性が非常に高まります。
