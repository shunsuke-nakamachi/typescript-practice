# Chapter 23: 第1層 - ドメインレイヤー (Domain Layer)

ドメインレイヤーは、アプリケーションの「心臓」です。ここにはフレームワークやデータベースのコードは1行も入りません。

## 1. Entity (エンティティ)

単なるデータの入れ物ではなく、そのデータそのものが持つルールを記述します。

```typescript
// 例: Book エンティティ
export class Book {
  constructor(
    public readonly id: string,
    public title: string,
    public price: number
  ) {
    // ビジネスルールの検証
    if (price < 0) throw new Error("価格は0以上である必要があります");
  }

  // 割引後の価格を計算するロジック（ビジネスルール）
  getDiscountedPrice(rate: number): number {
    return this.price * (1 - rate);
  }
}
```

## 2. Repository Interface (リポジトリのインターフェース)

「どうやって保存するか」ではなく「何ができるか」を定義します。

```typescript
export interface IBookRepository {
  save(book: Book): Promise<void>;
  findById(id: string): Promise<Book | null>;
}
```

## 演習

`entity.ts` を作成し、自分の好きなビジネスモデル（例：ユーザー、商品、注文）を定義してみてください。その際、コンストラクタで不正なデータが入らないようにガード（チェック）を入れてみましょう。
