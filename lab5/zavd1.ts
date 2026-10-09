function throwSeasonError(message: string): never {
    throw new Error(message);
}
function getSeasonByFirstMonth(month: number): string {
    if (month < 1 || month > 12 || !Number.isInteger(month)) {
        throwSeasonError(`Некоректний номер місяця: ${month}. Місяць має бути цілим числом від 1 до 12.`);
    }
    switch (month) {
        case 3:
            return "Весна";
        case 6:
            return "Літо";
        case 9:
            return "Осінь";
        case 12:
            return "Зима";
        default:
            return throwSeasonError(`Місяць ${month} є коректним, але це не перший місяць пори року.`);
    }
}
try {
    console.log(getSeasonByFirstMonth(3));
    console.log(getSeasonByFirstMonth(6)); 
    console.log(getSeasonByFirstMonth(9));  
    console.log(getSeasonByFirstMonth(12)); 
    console.log(getSeasonByFirstMonth(0)); 

} catch (error) {
    if (error instanceof Error) {
        console.error("Помилка:", error.message);
    }
}
