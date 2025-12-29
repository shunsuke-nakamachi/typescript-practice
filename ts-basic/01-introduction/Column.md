# Column: Chapter 01 の補足

## 詰まりそうなポイント：Node.js のバージョン
TypeScript 自体は古い Node.js でも動きますが、最新の型定義やライブラリを使う場合は LTS（推奨版）の Node.js を使うのが無難です。`node -v` で確認してみましょう。

## 豆知識：`tsc` と `tsx`
- **`tsc`**: TypeScript Compiler の略。TS を JS に「変換」する公式ツールです。
- **`tsx`**: ライブラリの一つで、変換と実行を一度にやってくれます。開発中は `tsx` が非常に便利ですが、本番環境では `tsc` で JS に変換したものを動かすのが一般的です。
