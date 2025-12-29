# Column: Chapter 05 の補足

## 詰まりそうなポイント：Enum（列挙型）の挙動
Enum は便利ですが、コンパイル後の JavaScript で少し特殊なオブジェクトとして出力されます。最近の TypeScript 開発では、より軽量な `Literal Type + Union` (例: `"small" | "large"`) が好まれる傾向もあります。

## 豆知識：Intersection 型（交差型）の落とし穴
`string & number` という型を作ることは可能ですが、実態として「文字列であり数値でもある値」は存在しないため、この型は `never`（決して存在しない型）になってしまいます。
