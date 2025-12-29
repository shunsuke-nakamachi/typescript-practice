# Chapter 26: 第4層 - インフラレイヤー (Infrastructure Layer)

一番外側、一番変わりやすい技術的な詳細を書くレイヤーです。

## 1. リポジトリの実装

Domain レイヤーで定義したインターフェース (`IBookRepository`) を、実際に実装します。

```typescript
import { IBookRepository, Book } from '../domain/entity';

// インメモリ（メモリ上）の実装例
export class InMemoryBookRepository implements IBookRepository {
  private books: Book[] = [];

  async save(book: Book): Promise<void> {
    this.books.push(book);
  }

  async findById(id: string): Promise<Book | null> {
    return this.books.find(b => b.id === id) || null;
  }
}
```

## 2. External Libraries

メール送信サービス、ロギングライブラリ、外部 API への接続など、外部のシステムに関わるものは全てここに閉じ込めます。

## 演習

`InMemoryBookRepository.ts` を作成し、実際にデータを「保存」し「取得」できるクラスを完成させてください。
その後、これを `SQLite` や他の DB 実装に差し替えたくなった場合、**Domain や Use Case を1行も変えなくていい** ことを想像してみてください。
