# Chapter 10: 高度なパターンと総仕上げ (Advanced Patterns & Project)

最後のチャプターでは、より高度な型表現に触れ、学んだことを組み合わせて小さなプロジェクトを作成します。

## 1. Template Literal Types (テンプレートリテラル型)

文字列の中に型を埋め込むことができます。

```typescript
type Color = "red" | "blue";
type Intensity = "light" | "dark";

type ColorTone = `${Intensity}-${Color}`;
// "light-red" | "light-blue" | "dark-red" | "dark-blue" になる
```

## 2. 実践プロジェクト：ToDo 管理 CLI

これまでの知識を総動員して、簡単なToDo管理ロジックを作成してみましょう。

- インターフェースによるデータ定義
- Enumによるステータス管理
- ジェネリクスを使ったデータ保存クラス
- 非同期処理（模擬APIなど）

## 演習課題

`project.ts` を開き、指示に従ってToDo管理システムを完成させてください。
