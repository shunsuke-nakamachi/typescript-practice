# Column: Chapter 08 の補足

## 詰まりそうなポイント：`await` の忘れ
非同期関数を呼び出すときに `await` を忘れると、戻り値が `Promise<T>` のままになり、中身の値が取り出せません。型エラーをよく見ると `Promise` が付いているかどうかで気づけます。

## 豆知識：Top-level await
最近の実行環境（Node.js の最新版や、今回使っている `tsx` など）では、関数の外側でも直接 `await` を書くことができます。
```typescript
const data = await fetchData();
console.log(data);
```
以前は `async function main() { ... } main()` のように囲む必要がありました。
