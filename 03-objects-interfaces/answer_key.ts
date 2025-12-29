export { };

/**
 * Chapter 03: Model Answers
 */

interface Book {
    title: string;
    author: string;
    pages: number;
    isRead?: boolean;
}

const myBook: Book = {
    title: "TypeScript Deep Dive",
    author: "Basarat",
    pages: 500,
    isRead: true
};

console.log(myBook);
