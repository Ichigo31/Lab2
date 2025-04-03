package main

import (
	"fmt"
)

// Функция для проверки покрытия всех позиций вышками
func checkCoverage(n, x int, towers string) bool {
	// Массив для отслеживания покрытия всех позиций
	covered := make([]bool, n)

	// Проходим по всем вышкам
	for i := 0; i < n; i++ {
		// Если вышка работает, то она может покрывать свои соседи
		if towers[i] == '1' {
			// Вычисляем диапазон покрытия для текущей вышки
			start := max(0, i-x) // Начало диапазона покрытия
			end := min(n-1, i+x) // Конец диапазона покрытия
			// Обновляем зоны покрытия для текущей вышки
			for j := start; j <= end; j++ {
				covered[j] = true // Помечаем, что эта позиция покрыта
			}
		}
	}

	// Проверяем, все ли позиции покрыты
	for _, c := range covered {
		if !c { // Если хотя бы одна позиция не покрыта
			return false
		}
	}

	// Если все позиции покрыты, возвращаем true
	return true
}

// Функция для получения максимального значения
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// Функция для получения минимального значения
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	var n, x int
	var towers string

	// Ввод количества вышек
	fmt.Print("Введите количество вышек: ")
	_, err := fmt.Scanf("%d", &n)
	if err != nil || n <= 0 { // Проверка корректности ввода
		fmt.Println("No")
		return
	}

	// Ввод показателя покрытия
	fmt.Print("Введите показатель покрытия: ")
	_, err = fmt.Scanf("%d", &x)
	if err != nil || x < 0 { // Проверка корректности ввода
		fmt.Println("No")
		return
	}

	// Ввод строки состояния вышек
	fmt.Print("Введите строку состояния вышек: ")
	_, err = fmt.Scanf("%s", &towers)                                   // Исправлено: теперь корректно обрабатывается ввод строки
	if err != nil || len(towers) != n || !isValidTowersString(towers) { // Проверка корректности строки
		fmt.Println("No")
		return
	}

	// Проверка покрытия всех позиций
	if checkCoverage(n, x, towers) {
		fmt.Println("Yes") // Все позиции покрыты
	} else {
		fmt.Println("No") // Не все позиции покрыты
	}
}

// Функция для проверки корректности строки состояния вышек
func isValidTowersString(towers string) bool {
	// Проверяем, что строка состоит только из '0' и '1'
	for _, c := range towers {
		if c != '0' && c != '1' {
			return false // Если найден некорректный символ, возвращаем false
		}
	}
	return true // Если все символы корректны, возвращаем true
}

// go run 1go.go
