const monthNames: string[] = ["січень", "лютий", "березень", "квітень", "травень", "червень","липень", "серпень", "вересень", "жовтень", "листопад", "грудень",];
const seasonNames: string[] = ["Зима", "Весна", "Літо", "Осінь"];
function seasonIndex(month: number): number {
    if (month === 12 || month === 1 || month === 2) return 1;
    if (month === 3 || month === 4 || month === 5) return 2;
    if (month === 6 || month === 7 || month === 8) return 3;
    return 4;}

function getSeason(month: number): number;
function getSeason(month: string): string;


function getSeason(month: number | string): number | string {
    if (typeof month === "number") {
        if (!Number.isInteger(month) || month < 1 || month > 12) {
            throw new Error(`Некоректний номер місяця: ${month}. Потрібно ціле число від 1 до 12.`);
        }
        return seasonIndex(month);
    }

    const index = monthNames.indexOf(month.trim().toLowerCase());
    if (index === -1) {
        throw new Error(`Невідома назва місяця: "${month}".`);
    }
    return seasonNames[seasonIndex(index + 1) - 1];
}

try {
    console.log(getSeason(1));
    console.log(getSeason(7));
    console.log(getSeason(12));
    console.log(getSeason("Квітень"));
    console.log(getSeason("жовтень"));
    console.log(getSeason("грудень"));
    console.log(getSeason(13));
} catch (error) {
    if (error instanceof Error) {
        console.error("Помилка:", error.message);
    } else {
        console.error("Невідома помилка:", error);
    }
}
