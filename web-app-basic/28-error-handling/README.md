# Chapter 28: 高度なエラーハンドリング (Advanced Error Handling)

エラーは「敵」ではなく、ユーザーに必要な情報を伝える「対話」です。

## 1. カスタムエラークラス

単なる `Error` ではなく、何が起きたか明確なエラークラスを自作します。

```typescript
export class DomainError extends Error {
  constructor(public message: string, public statusCode: number = 400) {
    super(message);
  }
}

export class NotFoundError extends DomainError {
  constructor(resource: string) {
    super(`${resource}が見つかりません`, 404);
  }
}
```

## 2. グローバルエラーハンドラー

Hono には `app.onError` があり、ここで全てのエラーを一括管理できます。

```typescript
app.onError((err, c) => {
  if (err instanceof DomainError) {
    return c.json({ message: err.message }, err.statusCode);
  }
  return c.json({ message: 'Internal Server Error' }, 500);
});
```

## 演習

独自の `ApplicationError` を作成し、それが発生したときに適切な HTTP ステータスコードが返るようにミドルウェアを設定してみましょう。
