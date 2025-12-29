/**
 * Chapter 05: Complex Types
 */

type UserID = string | number;

function printID(id: UserID) {
    console.log(`ID is: ${id}`);
}

printID("abc-123");
printID(999);

/**
 * 演習 5-1: Union型とLiteral型
 *
 * 返却されるレスポンスの状態を表す型 `HaltStatus` を作成してください。
 * 文字列 "loading", "success", "error" のいずれかのみを許容するようにします。
 */

// TODO: ここに型を定義
// type HaltStatus = ...

/**
 * 演習 5-2: Enumを使ってみよう
 * 
 * 曜日を表す Enum `DayOfWeek` を作成し、それを受け取って
 * 「今日は〜です」と出力する関数 `checkDay` を実装してください。
 */
