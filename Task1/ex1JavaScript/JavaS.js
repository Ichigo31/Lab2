const readline = require('readline');

// Функция для проверки покрытия всех кооперативов связью
function checkCoverage(n, x, towers) {
    // Проверка корректности входных данных
    if (n <= 0 || x < 0 || towers.length !== n) {
        return false;
    }

    // Массив для отслеживания покрытия каждой позиции (кооператива)
    const covered = Array(n).fill(false);

    // Проходим по всем вышкам
    for (let i = 0; i < n; i++) {
        // Если вышка работает (S[i] == '1')
        if (towers[i] === '1') {
            // Для текущей вышки обновляем диапазон покрытия
            const start = Math.max(0, i - x);  // Левая граница (не меньше 0)
            const end = Math.min(n - 1, i + x); // Правая граница (не больше n-1)

            // Помечаем все позиции в этом диапазоне как покрытые
            for (let j = start; j <= end; j++) {
                covered[j] = true;
            }
        }
    }

    // Проверяем, все ли позиции покрыты
    return !covered.includes(false);
}

// Создаем интерфейс для ввода данных с консоли
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция для ввода данных и запуска программы
function main() {
    rl.question('Введите количество вышек: ', (nInput) => {
        const n = parseInt(nInput, 10);
        if (isNaN(n) || n <= 0) {
            console.log('No');
            rl.close();
            return; // Некорректный ввод
        }

        rl.question('Введите показатель покрытия: ', (xInput) => {
            const x = parseInt(xInput, 10);
            if (isNaN(x) || x < 0) {
                console.log('No');
                rl.close();
                return; // Некорректный ввод
            }

            rl.question('Введите строку состояния вышек: ', (towers) => {
                if (towers.length !== n || !/^[01]+$/.test(towers)) {
                    console.log('No');
                    rl.close();
                    return; // Некорректный ввод (неверная длина или неверные символы)
                }

                // Выводим результат проверки
                console.log(checkCoverage(n, x, towers) ? 'Yes' : 'No');
                rl.close(); // Закрываем интерфейс после завершения
            });
        });
    });
}

// Запуск программы
main();
