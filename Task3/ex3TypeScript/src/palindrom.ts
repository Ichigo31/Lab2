/**
 * Проверяет, является ли число трёхзначным палиндромом.
 * @param num - Проверяемое число
 * @returns true, если число трёхзначное и является палиндромом
 */
function isThreeDigitPalindrome(num: number): boolean {
    const absNum = Math.abs(num); // Работаем с модулем числа
    if (absNum < 100 || absNum > 999) return false; // Проверка на трёхзначность
    return Math.floor(absNum / 100) === absNum % 10; // Сравниваем первую и последнюю цифры
}

function main(): void {
    // Настройка ввода/вывода
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Запрос ввода и обработка данных
    rl.question('Введите числа через пробел: ', (input: string) => {
        const numbers = input.trim().split(/\s+/); // Разбиваем строку на числа
        let result = 'Результат: ';
        let isFirstOutput = true; // Флаг для форматирования вывода

        // Обработка каждого числа
        for (const numStr of numbers) {
            const num = parseInt(numStr, 10);
            
            // Пропускаем некорректные значения
            if (isNaN(num)) continue;
            
            // Проверяем трёхзначные числа
            if (Math.abs(num) >= 100 && Math.abs(num) <= 999) {
                if (!isFirstOutput) result += ', '; // Добавляем разделитель
                result += `${num} - ${isThreeDigitPalindrome(num) ? 'YES' : 'NO'}`;
                isFirstOutput = false;
            }
        }

        console.log(result); // Вывод результата
        rl.close(); // Закрываем ввод
    });
}

// Запуск программы
main();