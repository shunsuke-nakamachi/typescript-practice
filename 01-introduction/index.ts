/**
 * Chapter 01: Introduction
 * TypeScriptの基本：型によるエラー検知
 */

function greet(name: string) {
  return `Hello, ${name}!`;
}

// 正しい使い方
console.log(greet("Alice"));

// エラーになるコード（コメントを外すとエディタで赤線が出ます）
// console.log(greet(123)); 
// ^ 数字を渡すと TypeScript が「stringを期待しているのにnumberが渡されている」と教えてくれます。
