package main

import (
	"bufio"   // Пакет для буферизованного ввода/вывода
	"fmt"     // Пакет для форматированного ввода/вывода (аналог printf/scanf в C)
	"os"      // Пакет для работы с ОС (ввод/вывод, аргументы командной строки и т.д.)
	"strconv" // Пакет для преобразования строк в числа и обратно
	"strings" // Пакет для работы со строками
)

// isPalindrome проверяет, является ли число трехзначным палиндромом
func isPalindrome(num int) bool {
	num = abs(num)
	if num < 100 || num > 999 {
		return false
	}
	return num/100 == num%10 // Сравниваем первую и последнюю цифру
}

// abs возвращает модуль числа
func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func main() {
	fmt.Print("Введите числа через пробел: ")

	reader := bufio.NewReader(os.Stdin)
	input, _ := reader.ReadString('\n')
	input = strings.TrimSpace(input)

	var results []string

	// Обрабатываем каждое число из ввода
	for _, token := range strings.Fields(input) {
		num, err := strconv.Atoi(token)
		if err != nil {
			continue // Пропускаем нечисловые значения
		}

		if abs(num) >= 100 && abs(num) <= 999 {
			result := fmt.Sprintf("%d - %v", num, isPalindrome(num))
			results = append(results, result)
		}
	}

	// Выводим результаты
	if len(results) > 0 {
		fmt.Println("Результат:", strings.Join(results, ", "))
	} else {
		fmt.Println("Нет трехзначных чисел для проверки")
	}
}
