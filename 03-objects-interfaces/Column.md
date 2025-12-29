# Column: Chapter 03 の補足

## 詰まりそうなポイント：`interface` か `type` か
どちらでも同じようなことができますが、最初は以下の基準で選ぶと良いです。
- オブジェクトの構造を定義するなら `interface`
- Union型（`string | number`）などに名前を付けるなら `type`

## 豆知識：Duck Typing（構造的部分型）
TypeScript は「名前」ではなく「形」で型を判断します。
例えば `interface A { name: string }` を期待している場所に、`interface B { name: string, age: number }` を渡してもエラーになりません。「name さえ持っていればOK」という考え方で、これを Duck Typing と呼びます。
