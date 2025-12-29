# Chapter 13: ミドルウェア (Middleware)

ミドルウェアは、リクエストがハンドラーに到達する前や、レスポンスがクライアントに返される後に行う処理です。

## 1. Hono の 構造 (Onion Model)

Hono のミドルウェアは「玉ねぎ構造」になっています。
1. `next()` を呼ぶ前の処理（行き）
2. 次のミドルウェアまたはハンドラーの実行
3. `next()` を呼んだ後の処理（帰り）

```typescript
app.use(async (c, next) => {
  console.log('Before handler')
  await next()
  console.log('After handler')
})
```

## 2. 組み込みミドルウェア

Hono には便利なミドルウェアがあらかじめ用意されています。
- `logger()`: リクエストログを出力
- `prettyJSON()`: JSON を整形して出力
- `basicAuth()`: ベーシック認証を適用

```typescript
import { logger } from 'hono/logger'
app.use('*', logger())
```

## 演習課題

特定のパスに対して、リクエストヘッダーをチェックする独自のミドルウェアを作成してみましょう。
