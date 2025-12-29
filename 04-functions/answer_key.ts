export { };

/**
 * Chapter 04: Model Answers
 */

function formatText(text: string, upper: boolean = false): string {
    if (upper) {
        return text.toUpperCase();
    }
    return text;
}

console.log(formatText("hello"));           // "hello"
console.log(formatText("hello", true));     // "HELLO"
