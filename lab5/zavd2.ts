function getLast(value: number): number;
function getLast(value: string): string;
function getLast(value: number | string): number | string {
    if (typeof value === "number") {
        if (!Number.isInteger(value)) {
            throw new Error(`Очікується ціле число, отримано: ${value}`);
        }
        return Math.abs(value) % 10;
    }

    if (value.length === 0) {
        throw new Error("Рядок не може бути порожнім");
    }
    return value[value.length - 1];
}

try {
    console.log(getLast(12345));
    console.log(getLast(-987));
    console.log(getLast("Привіт"));
    console.log(getLast("2024")); 
    console.log(getLast(3.14)); 
} catch (error) {
    if (error instanceof Error) {
        console.error("Помилка:", error.message);
    }
}
