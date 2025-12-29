# Column: Chapter 16 - 19 の補足

## 詰まりそうなポイント：テスト環境の構築
テストを実行するには `vitest` のインストールと、`package.json` への `"test": "vitest"` の追記が必要です。

## 豆知識：Drizzle ORM
Chapter 16 ではモックを使いますが、実際の開発では `Drizzle ORM` や `Prisma` といった ORM （Object-Relational Mapper）を使ってデータベースを操作するのが現在の TypeScript 開発の主流です。これらも型安全にデータベース操作ができるよう設計されています。
