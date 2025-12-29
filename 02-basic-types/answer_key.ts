export { };

/**
 * Chapter 02: Model Answers
 */

// 演習 2-1: 正しく型注釈をつけよう
let movieTitle: string = "Inception";
let prices: number[] = [1000, 2000, 3000];

let score: number = 100;
score = 95; // 文字列 "Excellent" ではなく数値を代入するように修正

// 演習 2-2: タプルを使ってみよう
type UserRecord = [string, number];
const me: UserRecord = ["Shunsuke", 30];

console.log(movieTitle);
console.log(prices);
console.log(me);
