# Chapter 19: 環境変数と設定 (Environment & Config)

デプロイ先や開発環境で変わる設定（APIキー等）をソースコードに直接書かずに管理する方法を学びます。

## 1. .env ファイル

機密情報を保存するためのファイルです。**絶対に Git にコミットしてはいけません。**

## 2. Hono での環境変数

`dotenv` を使ったり、特定のプラットフォーム（Cloudflare 等）が提供する仕組みを使ったりします。

```typescript
import { env } from 'hono/adapter'
// ...
const { DATABASE_URL } = env(c)
```

## 演習課題

`.env` ファイルから値を読み込み、レスポンスで返す処理を実装してみましょう。
