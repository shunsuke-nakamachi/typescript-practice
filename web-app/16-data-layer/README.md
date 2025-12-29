# Chapter 16: データの永続化とモック DB (Data Persistence & Mock DB)

本番ではデータベース（PostgreSQL, MySQL, MongoDB等）を使いますが、まずはメモリ上でのデータ管理方法を学びます。

## 1. データの管理

配列やオブジェクトを使って、擬似的なデータベースを作成します。

```typescript
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]
```

## 2. CRUD 処理

- Create: `push`
- Read: `find`, `filter`
- Update: `map` や対象要素への再代入
- Delete: `filter`

## 演習課題

`db.ts` を作成し、CRUD 操作を行うシンプルなクラスを実装してみましょう。
