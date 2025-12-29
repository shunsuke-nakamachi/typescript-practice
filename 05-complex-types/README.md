# Chapter 05: 複雑な型 (Union, Intersection, Enums)

より複雑なデータの状態を表現するための型を学びます。

## 1. Union Types (共用体)

「A または B」という型を表現します。

```typescript
let result: number | string;
result = 100;
result = "Error";
```

## 2. Intersection Types (交差型)

複数の型を1つに合体させます。

```typescript
interface HasName { name: string; }
interface HasAge { age: number; }

type Person = HasName & HasAge;
```

## 3. 型エイリアス (type) vs 基礎

`interface` と似ていますが、Union型などに名前を付けるときは `type` を使います。

```typescript
type Status = "success" | "loading" | "error";
```

## 4. Enum (列挙型)

定数のセットに名前を付けて管理できます。

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right
}
```

## 演習課題

`exercise.ts` の課題を解いてみましょう。
