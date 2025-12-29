# Chapter 02: 基本の型 (Primitive & Basic Types)

このチャプターでは、TypeScriptで最も頻繁に使う基本的な型について学びます。

## 1. プリミティブ型 (Primitive Types)

JavaScriptでおなじみの型に、そのまま型注釈をつけることができます。

- `string`: 文字列
- `number`: 数値（整数も小数もこれ一つ）
- `boolean`: 真偽値 (`true` または `false`)

```typescript
let message: string = "Hello TS";
let count: number = 42;
let isDone: boolean = false;
```

## 2. 配列とタプル (Array & Tuple)

### 配列 (Array)
同じ型の値をまとめて管理します。

```typescript
let scores: number[] = [10, 20, 30];
let names: Array<string> = ["Alice", "Bob"]; // 別の書き方
```

### タプル (Tuple)
固定された数の、異なる型を持つ配列です。

```typescript
let person: [string, number] = ["Alice", 25];
```

## 3. 特別な型 (any, unknown)

### any
どんな型でも代入できてしまいます。強力ですが、使いすぎるとTypeScriptのメリットが消えてしまうので、注意が必要です。

### unknown
anyと同様にどんな値も代入できますが、使う前に「中身が何か」をチェックしないと操作できない安全な型です。

## 演習課題

`exercise.ts` の中にある型注釈の不足やエラーを修正してください。
実行コマンド：
```bash
npx tsx exercise.ts
```
