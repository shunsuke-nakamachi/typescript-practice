# Chapter 09: モジュールと設定 (Modules & Configuration)

大規模な開発に欠かせない、コードの分割管理とコンパイラの設定について学びます。

## 1. モジュール (export / import)

TypeScriptでは、`export` を使って他のファイルから使えるようにし、`import` で取り込みます。

```typescript
// math.ts
export const add = (a: number, b: number) => a + b;

// main.ts
import { add } from "./math";
```

## 2. tsconfig.json

TypeScriptのコンパイル挙動を制御する設定ファイルです。

- `target`: 出力されるJSのバージョン（`ES2020` など）
- `module`: モジュール方式（`ESNext`, `CommonJS` など）
- `strict`: 厳格な型チェックを有効にするか（基本は `true` 推奨）
- `outDir`: コンパイル後のファイルの出力先

## 演習課題

`exercise.ts` と `utils.ts` を作成し、モジュールの受け渡しを体験しましょう。
また、`npx tsc --init` を実行して `tsconfig.json` を生成してみてください。
