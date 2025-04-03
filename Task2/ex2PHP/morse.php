<?php
// Таблица кодов Морзе
$morseCode = [
    'a' => ".-", 'b' => "-...", 'c' => "-.-.", 'd' => "-..", 'e' => ".", 'f' => "..-.",
    'g' => "--.", 'h' => "....", 'i' => "..", 'j' => ".---", 'k' => "-.-", 'l' => ".-..",
    'm' => "--", 'n' => "-.", 'o' => "---", 'p' => ".--.", 'q' => "--.-", 'r' => ".-.",
    's' => "...", 't' => "-", 'u' => "..-", 'v' => "...-", 'w' => ".--", 'x' => "-..-",
    'y' => "-.--", 'z' => "--.."
];

// Функция для преобразования слова в код Морзе
function convertToMorse($word, $morseCode) {
    $morse = "";
    foreach (str_split($word) as $char) {
        if (!isset($morseCode[$char])) {
            echo "Ошибка: Введены недопустимые символы (только строчные буквы разрешены).\n";
            exit(1);
        }
        $morse .= $morseCode[$char];
    }
    return $morse;
}

// Считываем ввод
echo "Введите слова: ";
$input = trim(fgets(STDIN));

// Разбиваем строку на слова
$words = explode(" ", $input);
$words = array_filter($words, fn($word) => !empty($word)); // Убираем пустые элементы

// Множество для хранения уникальных кодов Морзе
$uniqueMorseCodes = [];

foreach ($words as $word) {
    // Преобразуем слово в код Морзе
    $morse = convertToMorse($word, $morseCode);
    
    // Сортируем код Морзе, чтобы учитывать перестановки букв
    $sortedMorse = str_split($morse);
    sort($sortedMorse);
    $sortedMorse = implode("", $sortedMorse);
    
    // Добавляем в массив, используя ключи массива для уникальности
    $uniqueMorseCodes[$sortedMorse] = true;
}

// Выводим количество уникальных кодов Морзе
echo "Количество уникальных кодов Морзе: " . count($uniqueMorseCodes) . "\n";
