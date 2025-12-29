# Column: Chapter 07 の補足

## 詰まりそうなポイント：型アサーション (`as`)
`as string` のように書くと、強制的にその型として扱わせることができます。しかし、これはコンパイラを無理やり黙らせる行為です。実態とズレがあると実行時にエラーになるため、最終手段と考えましょう。

## 豆知識：`Record<K, V>`
よく使う Utility Type です。
`Record<string, number>` と書けば、「キーが文字列、値が数値のオブジェクト」を簡単に定義できます。
```typescript
const scores: Record<string, number> = {
  math: 100,
  english: 90
};
```
