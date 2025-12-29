export { };

/**
 * Chapter 01: Model Answers
 */

// 演習 1-1: エラーを直してみよう
const age: number = 25; // "25" (string) から 25 (number) へ修正

console.log(`Your age is ${age}`);

// 演習 1-2: 新しい関数を作ってみよう
function double(num: number): number {
    return num * 2;
}

console.log(double(10)); // 期待値: 20
