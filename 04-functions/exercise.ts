/**
 * Chapter 04: Functions
 */

// 1. 基本的な関数
function calcTotal(price: number, tax: number = 1.1): number {
    return Math.floor(price * tax);
}

console.log(`Total: ${calcTotal(1000)}`);

/**
 * 演習 4-1: 文字列を変換する関数を作ろう
 *
 * 引数 `text` (string) と、任意引数 `upper` (boolean) を受け取り、
 * `upper` が true なら大文字に、そうでなければそのまま返す関数 `formatText` を作成せよ。
 * `upper` のデフォルト値は false とすること。
 */

// TODO: ここに関数を実装
