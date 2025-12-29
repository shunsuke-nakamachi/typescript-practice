export { };

/**
 * Chapter 07: Model Answers
 */

interface Task {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
}

// 演習 7-1
type TaskPreview = Pick<Task, "id" | "title">;

const preview: TaskPreview = {
    id: "1",
    title: "Learn TS"
};

// 演習 7-2
type UpdateTaskInput = Partial<Task>;

const update: UpdateTaskInput = {
    isCompleted: true
};
