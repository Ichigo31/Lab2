"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Таблица соответствия букв и кодов Морзе
var morseCode = {
    'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.",
    'g': "--.", 'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..",
    'm': "--", 'n': "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.",
    's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-",
    'y': "-.--", 'z': "--.."
};
// Функция преобразования слова в код Морзе
function wordToMorse(word) {
    return word.split('').map(function (char) { return morseCode[char]; }).join('');
}
// Функция для подсчета уникальных кодов Морзе
function uniqueMorseRepresentations(words) {
    var uniqueCodes = new Set();
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var morse = wordToMorse(word);
        var sortedMorse = morse.split('').sort().join('');
        uniqueCodes.add(sortedMorse);
    }
    return uniqueCodes.size;
}
// Чтение ввода и вывод результата
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Введите слова: ', function (input) {
    var words = input.trim().split(/\s+/);
    // Проверка ограничений
    if (words.length > 100) {
        console.log("Ошибка: количество слов превышает 100");
        rl.close();
        return;
    }
    for (var _i = 0, words_2 = words; _i < words_2.length; _i++) {
        var word = words_2[_i];
        if (word.length > 12) {
            console.log("\u041E\u0448\u0438\u0431\u043A\u0430: \u0441\u043B\u043E\u0432\u043E \"".concat(word, "\" \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 12 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"));
            rl.close();
            return;
        }
        if (!/^[a-z]+$/.test(word)) {
            console.log("\u041E\u0448\u0438\u0431\u043A\u0430: \u0441\u043B\u043E\u0432\u043E \"".concat(word, "\" \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u044B"));
            rl.close();
            return;
        }
    }
    var result = uniqueMorseRepresentations(words);
    console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u0434\u043E\u0432 \u041C\u043E\u0440\u0437\u0435: ".concat(result));
    rl.close();
});
