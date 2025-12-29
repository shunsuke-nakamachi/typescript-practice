export { };

/**
 * Chapter 08: Model Answers
 */

// 演習 8-1
async function getNumbersLater(): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5]);
        }, 1000);
    });
}

// 演習 8-2
async function run() {
    try {
        const nums = await getNumbersLater();
        console.log(nums);
    } catch (e) {
        if (e instanceof Error) {
            console.error(e.message);
        }
    }
}

run();
