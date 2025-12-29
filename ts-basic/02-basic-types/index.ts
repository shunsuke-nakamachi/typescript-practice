/**
 * Chapter 02: Basic Types Sample
 */

// 型推論：初期値がある場合、TSが自動で型を決めてくれます
let city = "Tokyo"; // string型と推論される
// city = 100; // エラー: Type 'number' is not assignable to type 'string'.

// 明示的な型注釈
const year: number = 2024;

// 配列
const colors: string[] = ["red", "blue", "green"];
colors.push("yellow");
// colors.push(1); // エラー: Argument of type 'number' is not assignable to parameter of type 'string'.

// ログ出力
console.log(`${city} in ${year} is beautiful with ${colors.join(", ")}.`);
