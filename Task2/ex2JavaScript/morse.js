const readline = require('readline');

// Таблица кодов Морзе (символ → код)
const morseCode = {
  'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.",
  'g': "--.", 'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..",
  'm': "--", 'n': "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.",
  's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-",
  'y': "-.--", 'z': "--.."
};

// Преобразует слово в строку Морзе
function convertToMorse(word) {
  return word.split('').map(char => {
    const code = morseCode[char];
    if (!code) throw new Error(`Недопустимый символ: ${char}`);
    return code;
  }).join(''); // Соединяем коды символов в одну строку
}

// Основная функция программы
function main() {
  // Настройка интерфейса для чтения ввода
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('Введите слова (через пробел):');
  
  // Обработка введенной строки
  rl.on('line', (input) => {
    try {
      // Разбиваем ввод на слова, удаляя лишние пробелы
      const words = input.trim().split(/\s+/);
      
      // Проверка ограничения на количество слов
      if (words.length > 100) {
        throw new Error('Превышено максимальное количество слов (100)');
      }

      const uniqueCodes = new Set(); // Хранилище уникальных кодов

      for (const word of words) {
        // Проверка длины слова
        if (word.length > 12) {
          throw new Error(`Слово "${word}" превышает 12 символов`);
        }

        // Проверка на допустимые символы (только a-z)
        if (!/^[a-z]+$/.test(word)) {
          throw new Error(`Слово "${word}" содержит недопустимые символы`);
        }

        // Преобразуем в Морзе и сортируем символы кода
        const morse = convertToMorse(word);
        const sortedMorse = morse.split('').sort().join('');
        uniqueCodes.add(sortedMorse); // Добавляем в Set (гарантирует уникальность)
      }

      // Выводим количество уникальных кодов
      console.log(`Результат: ${uniqueCodes.size}`);
      rl.close();
    } catch (error) {
      // Обработка ошибок с подсказкой для пользователя
      console.error(`Ошибка: ${error.message}`);
      console.log('Попробуйте снова:');
    }
  });
}

// Запуск программы
main();