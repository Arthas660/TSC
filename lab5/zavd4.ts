const weekends: string[] = ["субота", "неділя"];
const holidays: string[] = ["Новий рік", "Різдво", "Великдень", "День Незалежності"];

function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateDays(length: number): (number | string)[] {
    const result: (number | string)[] = [];

    for (let i = 0; i < length; i++) {
        const kind = randomInt(1, 3);

        if (kind === 1) {
            result.push(randomInt(1, 5));
        } else if (kind === 2) {
            result.push(weekends[randomInt(0, weekends.length - 1)]);
        } else {
            result.push(holidays[randomInt(0, holidays.length - 1)]);
        }
    }
    return result;
}

function compare(days: (number | string)[]): string {
    let weekendCount = 0;
    let holidayCount = 0;

    for (const day of days) {
        if (typeof day === "number") continue; 

        if (weekends.includes(day)) {
            weekendCount++;
        } else if (holidays.includes(day)) {
            holidayCount++;
        }
    }

    console.log(`Вихідних: ${weekendCount}, святкових: ${holidayCount}`);

    if (weekendCount > holidayCount) return "Вихідних було більше";
    if (holidayCount > weekendCount) return "Святкових було більше";
    return "Порівну";
}

const days = generateDays(15);
console.log(days);
console.log(compare(days));
