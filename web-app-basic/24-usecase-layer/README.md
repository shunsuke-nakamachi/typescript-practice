# Chapter 24: 第2層 - ユースケースレイヤー (Use Case Layer)

ユースケースは、「ユーザーが何をしたいか」を記述する場所です。

## 1. 役割

ユースケースはドメインオブジェクト（Entity）を操作し、リポジトリを使って保存や取得を指示します。
しかし、**具体的な保存先（DB）が何であるかは知りません。** インターフェースだけを信じて動きます。

```typescript
import { Book, IBookRepository } from '../domain/entity';

export class CreateBookUseCase {
  constructor(private bookRepo: IBookRepository) {}

  async execute(id: string, title: string, price: number) {
    const newBook = new Book(id, title, price);
    await this.bookRepo.save(newBook);
    return newBook;
  }
}
```

## 2. なぜインターフェースを使うのか？

テストの時に、本物のデータベースの代わりに「メモリ上に保存するだけの偽物（Mock）」に差し替えることができるからです。これにより、テストが100倍速くなり、信頼性が上がります。

## 演習

`usecase.ts` を作成し、データの「取得」や「更新」のユースケースを実装してみましょう。
