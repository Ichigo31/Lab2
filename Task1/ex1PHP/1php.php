<?php

// Функция для проверки покрытия всех позиций вышками
function checkCoverage($n, $x, $towers) {
    // Проверяем корректность входных данных
    if ($n <= 0 || $x < 0 || strlen($towers) != $n) {
        return false; // Если данные некорректны, возвращаем false
    }

    // Создаем массив для отслеживания покрытия позиций вышками
    $covered = array_fill(0, $n, false);

    // Проходим по всем вышкам
    for ($i = 0; $i < $n; $i++) {
        // Если вышка работает
        if ($towers[$i] == '1') {
            // Обновляем зоны покрытия для текущей вышки
            for ($j = max(0, $i - $x); $j <= min($n - 1, $i + $x); $j++) {
                $covered[$j] = true; // Отмечаем позицию как покрытую
            }
        }
    }

    // Проверяем, все ли позиции покрыты
    foreach ($covered as $c) {
        if (!$c) {
            return false; // Если хотя бы одна позиция не покрыта, возвращаем false
        }
    }

    return true; // Если все позиции покрыты, возвращаем true
}

// Функция для ввода данных с экрана
function getInput($message) {
    echo $message;
    $input = trim(fgets(STDIN));
    return $input; // Возвращаем введенные данные
}

// Основная программа
$nInput = getInput("Введите количество вышек: ");
$n = intval($nInput);
if ($n <= 0) {
    echo "No\n";
    exit;
}

$xInput = getInput("Введите показатель покрытия: ");
$x = intval($xInput);
if ($x < 0) {
    echo "No\n";
    exit;
}

$towers = getInput("Введите строку состояния вышек: ");
if (strlen($towers) != $n || !preg_match('/^[01]+$/', $towers)) {
    echo "No\n";
    exit;
}

// Выводим результат проверки покрытия
echo checkCoverage($n, $x, $towers) ? "Yes\n" : "No\n";

?>

 // php 1php.php
