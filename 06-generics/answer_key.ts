export { };

/**
 * Chapter 06: Model Answers
 */

// 演習 6-1
function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(getFirst([1, 2, 3])); // 1
console.log(getFirst(["a", "b"])); // "a"

// 演習 6-2
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

const entry: KeyValuePair<string, number> = {
    key: "score",
    value: 100
};
