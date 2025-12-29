export { };

/**
 * Chapter 10: Final Project Model Answer
 */

enum TodoPriority {
    Low,
    Medium,
    High,
}

interface TodoItem {
    id: number;
    task: string;
    priority: TodoPriority;
    completed: boolean;
}

class TodoManager {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    addTodo(task: string, priority: TodoPriority): void {
        const newTodo: TodoItem = {
            id: this.nextId++,
            task,
            priority,
            completed: false,
        };
        this.todos.push(newTodo);
        console.log(`Added: ${task}`);
    }

    completeTodo(id: number): void {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Completed: ${todo.task}`);
        } else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }

    listTodos(): void {
        console.log("--- My Todo List ---");
        this.todos.forEach((t) => {
            const status = t.completed ? "[x]" : "[ ]";
            console.log(`${t.id}: ${status} ${t.task} (Priority: ${TodoPriority[t.priority]})`);
        });
    }
}

// 動作確認
const myTodos = new TodoManager();
myTodos.addTodo("Typescriptを学ぶ", TodoPriority.High);
myTodos.addTodo("お茶を飲む", TodoPriority.Low);
myTodos.listTodos();
myTodos.completeTodo(1);
myTodos.listTodos();
