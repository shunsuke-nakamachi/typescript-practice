export { };

/**
 * Chapter 05: Model Answers
 */

// 演習 5-1
type HaltStatus = "loading" | "success" | "error";

const currentStatus: HaltStatus = "success";

// 演習 5-2
enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function checkDay(day: DayOfWeek): void {
    // Enum の数値から名前を逆引きする例
    console.log(`今日は ${DayOfWeek[day]} です`);
}

checkDay(DayOfWeek.Friday);
