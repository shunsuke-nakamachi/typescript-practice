/**
 * Chapter 10: Final Project Task
 * 
 * 以下の条件を満たすToDo管理システムを構築してください。
 */

enum TodoPriority {
    Low,
    Medium,
    High
}

interface TodoItem {
    id: number;
    task: string;
    priority: TodoPriority;
    completed: boolean;
}

/**
 * 演習: TodoList クラスを作成してください。
 * ジェネリクスを使って、任意の「IDを持つオブジェクト」を管理できるようにしても面白いです。
 */

class TodoManager {
    private todos: TodoItem[] = [];

    addTodo(task: string, priority: TodoPriority): void {
        // 実装
    }

    completeTodo(id: number): void {
        // 実装
    }

    listTodos(): void {
        // 実装
    }
}

// 動作確認
const myTodos = new TodoManager();
// ...
