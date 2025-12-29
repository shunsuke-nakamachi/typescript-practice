# Chapter 03: オブジェクトとインターフェース (Objects & Interfaces)

TypeScriptでデータ構造を定義する最も重要な方法の1つがインターフェースです。

## 1. オブジェクトの型

JavaScriptのオブジェクトに型を付けるには、キーと値の型のペアを指定します。

```typescript
const user: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
```

## 2. インターフェース (Interface)

同じ構造を何度も使い回したい場合は、`interface` キーワードを使って型に名前を付けます。

```typescript
interface User {
  name: string;
  age: number;
  email?: string; // ? をつけると「任意（あってもなくても良い）」になります
  readonly id: number; // readonly をつけると後から変更できなくなります
}

const user1: User = { name: "Bob", age: 30, id: 1 };
// user1.id = 2; // エラー: Cannot assign to 'id' because it is a read-only property.
```

## 3. インターフェースの継承 (extends)

既存のインターフェースを元に、新しいインターフェースを作ることができます。

```typescript
interface AdminUser extends User {
  isAdmin: boolean;
}
```

## 演習課題

`exercise.ts` の中で、構造を定義し、オブジェクトを作成してください。
