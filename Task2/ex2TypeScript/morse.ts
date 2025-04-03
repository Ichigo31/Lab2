// Таблица соответствия букв латинского алфавита и их кодов Морзе
const morseCode: Record<string, string> = {
    'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.",
    'g': "--.", 'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..",
    'm': "--", 'n': "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.",
    's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-",
    'y': "-.--", 'z': "--.."
};

// Преобразует слово в соответствующую последовательность кодов Морзе
function wordToMorse(word: string): string {
    // Разбиваем слово на буквы, преобразуем каждую и соединяем результаты
    return word.split('').map(char => morseCode[char]).join('');
}

// Подсчитывает количество уникальных представлений слов в коде Морзе
function uniqueMorseRepresentations(words: string[]): number {
    const uniqueCodes = new Set<string>(); // Используем Set для хранения уникальных значений

    for (const word of words) {
        const morse = wordToMorse(word);
        // Сортируем символы кода для сравнения вариантов
        const sortedMorse = morse.split('').sort().join('');
        uniqueCodes.add(sortedMorse);
    }

    return uniqueCodes.size; // Количество уникальных элементов
}

// Настройка интерфейса для чтения ввода из консоли
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Запрос ввода и обработка данных
rl.question('Введите слова: ', (input: string) => {
    const words = input.trim().split(/\s+/); // Разбиваем ввод на слова
    
    // Проверка на превышение максимального количества слов
    if (words.length > 100) {
        console.log("Ошибка: количество слов превышает 100");
        rl.close();
        return;
    }

    // Проверка каждого слова на соответствие требованиям
    for (const word of words) {
        if (word.length > 12) {
            console.log(`Ошибка: слово "${word}" превышает 12 символов`);
            rl.close();
            return;
        }

        if (!/^[a-z]+$/.test(word)) {
            console.log(`Ошибка: слово "${word}" содержит недопустимые символы`);
            rl.close();
            return;
        }
    }

    // Получение и вывод результата
    const result = uniqueMorseRepresentations(words);
    console.log(`Количество уникальных кодов Морзе: ${result}`);
    rl.close(); // Закрытие интерфейса
});

// ts-node morse.ts