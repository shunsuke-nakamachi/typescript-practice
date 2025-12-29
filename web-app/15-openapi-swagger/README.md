# Chapter 15: OpenAPI と Swagger UI (OpenAPI & Swagger UI)

API の仕様書を自動で生成し、ブラウザ上でテストできる環境を構築します。

## 1. OpenAPI とは？

API の構造（エンドポイント、パラメータ、レスポンスなど）を記述するための標準規格です。これがあることで、フロントエンドエンジニアとの連携がスムーズになります。

## 2. @hono/zod-openapi

Hono では `@hono/zod-openapi` を使うことで、Zod のスキーマから OpenAPI 形式の定義を自動生成できます。

主な手順：
1. `createRoute` でルートを定義する（パス、入出力の型など）。
2. `app.openapi(route, callback)` で実装する。
3. `app.get('/doc', ...)` で JSON を公開する。
4. `@hono/swagger-ui` で見た目を用意する。

## 演習課題

実際に Swagger UI を表示して、API を叩いてみましょう。
