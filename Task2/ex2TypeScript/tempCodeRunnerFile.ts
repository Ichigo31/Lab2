// Таблица соответствия букв и кодов Морзе
const morseCode: Record<string, string> = {
    'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.",
    'g': "--.", 'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..",
    'm': "--", 'n': "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.",
    's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-",
    'y': "-.--", 'z': "--.."
};

// Функция преобразования слова в код Морзе
function wordToMorse(word: string): string {
    return word.split('').map(char => morseCode[char]).join('');
}

// Функция для подсчета уникальных кодов Морзе
function uniqueMorseRepresentations(words: string[]): number {
    const uniqueCodes = new Set<string>();

    for (const word of words) {
        const morse = wordToMorse(word);
        const sortedMorse = morse.split('').sort().join('');
        uniqueCodes.add(sortedMorse);
    }

    return uniqueCodes.size;
}

// Чтение ввода и вывод результата (CommonJS-версия)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите слова: ', (input: string) => {
    const words = input.trim().split(/\s+/);
    
    // Проверка ограничений
    if (words.length > 100) {
        console.log("Ошибка: количество слов превышает 100");
        rl.close();
        return;
    }

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

    const result = uniqueMorseRepresentations(words);
    console.log(`Количество уникальных кодов Морзе: ${result}`);
    rl.close();
});