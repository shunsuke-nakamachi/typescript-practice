# Chapter 04: 関数 (Functions)

関数に型を付けることで、引数の渡し間違いや、戻り値の勘違いを防ぐことができます。

## 1. 引数と戻り値の型

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (x: number, y: number): number => {
  return x * y;
};
```

## 2. オプショナル引数とデフォルト引数

- **オプショナル**: 引数名の後に `?` をつけます。
- **デフォルト**: `=` で初期値を指定します。

```typescript
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
```

## 3. 戻り値がない関数 (void)

何も返さない関数の戻り値の型は `void` です。

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

## 演習課題

`exercise.ts` にて、指定された関数の型を完成させてください。
