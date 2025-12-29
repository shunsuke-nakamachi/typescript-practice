/**
 * Chapter 07: Type Manipulation Exercise
 */

interface Task {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
}

/**
 * 演習 7-1:
 * `Task` インターフェースから `id` と `title` だけを持つ
 * `TaskPreview` 型を Pick を使って作成してください。
 */

// type TaskPreview = ...

/**
 * 演習 7-2:
 * `Task` の全てのプロパティを任意にする `UpdateTaskInput` 型を Partial を使って作成してください。
 */

// type UpdateTaskInput = ...
