# Chapter 06: ジェネリクス (Generics)

型を引数のように扱い、再利用性の高いコンポーネントを作るのがジェネリクスです。

## 1. なぜジェネリクスが必要か？

例えば、引数をそのまま返す関数を作るとき、`any` を使うと型情報が消えてしまいますが、ジェネリクスなら維持できます。

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const n = identity<number>(10); // n は number 型
const s = identity<string>("hi"); // s は string 型
```

## 2. ジェネリック・インターフェース

```typescript
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Apple" };
```

## 演習課題

`exercise.ts` の課題で、型に等しい柔軟性を持たせてみましょう。
