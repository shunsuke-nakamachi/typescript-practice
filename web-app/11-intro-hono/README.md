# Chapter 11: Hono 入門とセットアップ

このチャプターでは、軽量で高速なWebフレームワーク「Hono」について学び、開発環境を構築します。

## 1. Hono とは？

Hono（火の）は、Cloudflare Workers, Fastly Compute, Bun, Deno, Node.js など、あらゆる JavaScript 実行環境（ランタイム）で動作する超軽量・高速なWebフレームワークです。

### なぜ Hono なのか？
1. **型安全**: TypeScript で書かれており、補完が強力です。
2. **高速**: 独自のルーター（RegExpRouter）により、非常に高いパフォーマンスを発揮します。
3. **互換性**: 標準の Web Standard（Fetch API 等）に基づいているため、特定の環境に依存しません。

## 2. セットアップ

今回は Node.js 環境で Hono を動かしてみましょう。

```bash
# 1. フォルダの作成と初期化
mkdir app
cd app
npm init -y

# 2. 必要なパッケージのインストール
npm install hono @hono/node-server
npm install -D tsx typescript @types/node
```

## 3. Hello World

`index.ts` を作成し、サーバーを起動してみましょう。

```typescript
import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

console.log('Server is running on http://localhost:3000')

serve({
  fetch: app.fetch,
  port: 3000
})
```

## 演習課題

`README.md` の指示に従って、新しいエンドポイントを追加してみましょう。
