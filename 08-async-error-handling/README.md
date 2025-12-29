# Chapter 08: 非同期処理とエラーハンドリング (Async & Error Handling)

`Promise` や `async/await` を型安全に扱う方法を学びます。

## 1. Promise の型

非同期で値を返す場合、`Promise<型>` と記述します。

```typescript
async function fetchData(): Promise<string> {
  return "Data received";
}
```

## 2. APIレスポンスなどの不確実な型

外部から来るデータは `unknown` や `any` になりがちですが、適切にキャストしたりチェックしたりすることが重要です。

## 3. エラーハンドリング

`try...catch` の `catch(e)` で受け取る `e` はデフォルトで `unknown` です。

```typescript
try {
  // something
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
```

## 演習課題

`exercise.ts` で非同期関数の型定義を練習しましょう。
