import * as readline from 'readline';

// Функция для проверки покрытия всех позиций вышками
function checkCoverage(n: number, x: number, towers: string): boolean {
    // Массив для отслеживания покрытия всех позиций
    const covered: boolean[] = new Array(n).fill(false);

    // Проходим по всем вышкам
    for (let i = 0; i < n; i++) {
        // Если вышка работает, то она может покрывать свои соседи
        if (towers[i] === '1') {
            // Обновляем зоны покрытия для текущей вышки
            const start = Math.max(0, i - x);  // Начало диапазона покрытия
            const end = Math.min(n - 1, i + x); // Конец диапазона покрытия
            for (let j = start; j <= end; j++) {
                covered[j] = true; // Помечаем, что эта позиция покрыта
            }
        }
    }

    // Проверяем, все ли позиции покрыты
    for (const c of covered) {
        if (!c) { // Если хотя бы одна позиция не покрыта
            return false;
        }
    }

    // Если все позиции покрыты, возвращаем true
    return true;
}

// Функция для проверки корректности строки состояния вышек
function isValidTowersString(towers: string): boolean {
    // Проверяем, что строка состоит только из '0' и '1'
    for (let i = 0; i < towers.length; i++) {
        if (towers[i] !== '0' && towers[i] !== '1') {
            return false; // Если найден некорректный символ, возвращаем false
        }
    }
    return true; // Если все символы корректны, возвращаем true
}

// Функция для ввода и обработки данных
function main(): void {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Введите количество вышек: ", (nInput: string) => {
        const n = parseInt(nInput);
        if (isNaN(n) || n <= 0) {
            console.log("No");
            rl.close();
            return;
        }

        rl.question("Введите показатель покрытия: ", (xInput: string) => {
            const x = parseInt(xInput);
            if (isNaN(x) || x < 0) {
                console.log("No");
                rl.close();
                return;
            }

            rl.question("Введите строку состояния вышек: ", (towers: string) => {
                if (towers.length !== n || !isValidTowersString(towers)) {
                    console.log("No");
                } else {
                    console.log(checkCoverage(n, x, towers) ? "Yes" : "No");
                }
                rl.close();
            });
        });
    });
}

// Вызов функции main для выполнения программы
main();


//ts-node 1Type.ts