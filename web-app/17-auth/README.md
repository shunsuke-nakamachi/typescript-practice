# Chapter 17: 認証と認可 (Authentication & Authorization)

ユーザーが誰であるかを確認し、権限があるかどうかを判定する方法を学びます。

## 1. Authentication (認証) vs Authorization (認可)

- **Authentication**: 「あなたは誰？」を確認すること（ログインなど）。
- **Authorization**: 「あなたはその操作をしていいの？」を確認すること（管理者権限など）。

## 2. Hono での認証

Hono には便利なミドルウェアがあります。
- `basicAuth`: シンプルなユーザー名とパスワード
- `jwt`: JSON Web Token を使ったモダンな認証

## 演習課題

JWT ミドルウェアを使って、保護されたエンドポイントを作成してみましょう。
