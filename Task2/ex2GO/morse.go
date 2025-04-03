package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strings"
)

// Карта соответствия символов и их кодов Морзе
var morseCode = map[rune]string{
	'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.",
	'g': "--.", 'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..",
	'm': "--", 'n': "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.",
	's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-",
	'y': "-.--", 'z': "--..",
}

// Преобразует слово в строку Морзе
func convertToMorse(word string) string {
	var morse strings.Builder
	for _, c := range word {
		morse.WriteString(morseCode[c]) // Добавляем код для каждого символа
	}
	return morse.String()
}

func main() {
	// Чтение ввода пользователя
	fmt.Println("Введите слова:")
	reader := bufio.NewReader(os.Stdin)
	input, _ := reader.ReadString('\n')
	input = strings.TrimSpace(input) // Удаляем лишние пробелы

	words := strings.Fields(input)          // Разбиваем строку на слова
	uniquePatterns := make(map[string]bool) // Мапа для хранения уникальных паттернов

	for _, word := range words {
		// Проверка длины слова
		if len(word) > 12 {
			fmt.Println("Ошибка: длина слова превышает 12 символов")
			return
		}

		// Преобразуем слово в код Морзе
		morse := convertToMorse(word)

		// Сортируем символы в коде Морзе для унификации паттерна
		morseChars := strings.Split(morse, "")
		sort.Strings(morseChars)
		sortedMorse := strings.Join(morseChars, "")

		// Сохраняем уникальный паттерн
		uniquePatterns[sortedMorse] = true
	}

	// Выводим количество уникальных паттернов
	fmt.Printf("Количество уникальных кодов Морзе: %d\n", len(uniquePatterns))
}
