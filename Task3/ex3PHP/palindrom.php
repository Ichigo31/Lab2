<?php
/**
 * Проверяет, является ли число трехзначным палиндромом
 * @param int $num Проверяемое число
 * @return bool Результат проверки
 */
function isThreeDigitPalindrome($num) {
    $absNum = abs($num);
    // Проверяем трехзначность и совпадение первой/последней цифры
    return $absNum >= 100 && $absNum <= 999 && 
           intval($absNum / 100) == $absNum % 10;
}

// Основной поток выполнения
echo "Введите числа через пробел: ";
$input = trim(fgets(STDIN)); // Читаем ввод

$first = true; // Флаг первого вывода
echo "Результат: ";

// Обрабатываем каждое число
foreach (explode(' ', $input) as $numStr) {
    if (is_numeric($numStr)) {
        $num = intval($numStr);
        // Проверяем трехзначность
        if (abs($num) >= 100 && abs($num) <= 999) {
            // Форматируем вывод с разделителями
            if (!$first) echo ", "; 
            echo $num." - ".(isThreeDigitPalindrome($num) ? "YES" : "NO");
            $first = false;
        }
    }
}

echo "\n"; // Завершаем вывод
?>