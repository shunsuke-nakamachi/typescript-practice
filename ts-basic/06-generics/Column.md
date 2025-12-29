# Column: Chapter 06 の補足

## 詰まりそうなポイント：`T` って何？
慣習的に `T` (Type) が使われますが、実は何でも良いです。`ItemType` や `ResponseData` のように分かりやすい名前を付けることもできます。

## 豆知識：型引数のデフォルト値
ジェネリクスにも「デフォルトの型」を指定できます。
```typescript
interface Container<T = string> {
  value: T;
}
const c: Container = { value: "hello" }; // T は string になる
```
