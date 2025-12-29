# Chapter 07: 型の操作 (Type Manipulation)

TypeScriptが提供する、既存の型から新しい型を「作り出す」便利な機能を学びます。

## 1. Type Guards (型ガード)

`typeof` や `instanceof` を使って、型を絞り込みます。

```typescript
function printLength(val: string | number) {
  if (typeof val === "string") {
    console.log(val.length); // ここでは val は string 確定
  }
}
```

## 2. Utility Types

よく使われる型変換が標準で用意されています。

- `Partial<T>`: 全てのプロパティを任意 (`?`) にする
- `Readonly<T>`: 全てのプロパティを読み取り専用にする
- `Pick<T, K>`: 指定したプロパティだけを抜き出す
- `Omit<T, K>`: 指定したプロパティを除外する

```typescript
interface User { id: number; name: string; age: number; }
type UserSummary = Pick<User, "id" | "name">;
```

## 演習課題

`exercise.ts` で Utility Types を使いこなしてみましょう。
