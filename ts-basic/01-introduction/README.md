# Chapter 01: TypeScript 入門と環境構築

このチャプターでは、TypeScriptとは何か、なぜ使うのか、そして開発を始めるための環境構築について学びます。

## 1. TypeScript とは？

TypeScriptは、Microsoftによって開発されたオープンソースのプログラミング言語です。JavaScriptの「拡張版（スーパーセット）」であり、JavaScriptに**静的型付け**の機能を追加したものです。

### なぜ TypeScript を使うのか？

1. **バグを未然に防ぐ**: 実行前にコードの間違い（型の不一致など）を見つけることができます。
2. **開発効率の向上**: エディタの補完（IntelliSense）が強力になり、コードが書きやすくなります。
3. **読みやすいコード**: 変数や関数に型があることで、他の人がコードを読んだ時の理解が深まります。

## 2. 環境構築

TypeScriptを動かすには、Node.jsが必要です。

### 必要なツールのインストール

ターミナルで以下のコマンドを実行して、このディレクトリで TypeScript を使えるようにしましょう。

```bash
# 1. npmの初期化（package.jsonの作成）
npm init -y

# 2. TypeScriptのインストール
npm install -D typescript tsx
```

### 実行方法

今回は `tsx` というツールを使って、TypeScriptファイルを直接実行します。

```bash
npx tsx index.ts
```

## 3. サンプルコードを見よう

`index.ts` を開いて、TypeScriptがどのように型チェックを行うか確認してみましょう。

## 演習課題

`exercise.ts` の中にあるコメントに従って、エラーを修正し、コードを完成させてください。
解決したら、以下のコマンドで実行して結果を確認しましょう：

```bash
npx tsx exercise.ts
```
