import kotlin.math.abs

// Функция проверки, является ли число трехзначным палиндромом
fun isThreeDigitPalindrome(num: Int): Boolean {
    val absoluteNum = abs(num)
    if (absoluteNum < 100 || absoluteNum > 999) return false
    return (absoluteNum / 100) == (absoluteNum % 10) // Сравниваем первую и последнюю цифру
}

fun main() {
    print("Введите числа через пробел: ")
    val input = readLine() ?: ""
    
    val results = mutableListOf<String>()
    var firstOutput = true
    
    // Обработка каждого числа из ввода
    input.split(" ").forEach { numStr ->
        try {
            val num = numStr.toInt()
            if (abs(num) in 100..999) { // Проверка на трехзначность
                val result = if (isThreeDigitPalindrome(num)) "YES" else "NO"
                if (!firstOutput) results.add(", ")
                results.add("$num - $result")
                firstOutput = false
            }
        } catch (e: NumberFormatException) {
            // Игнорируем нечисловые вводы
        }
    }
    
    // Вывод результатов
    print("Результат: ")
    results.forEach { print(it) }
}

//java -jar palindrom.jar 