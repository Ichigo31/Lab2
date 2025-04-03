import java.util.*

fun main() {
    // Код Морзе для каждой буквы
    val morseCode = mapOf(
        'a' to ".-", 'b' to "-...", 'c' to "-.-.", 'd' to "-..", 'e' to ".", 'f' to "..-.",
        'g' to "--.", 'h' to "....", 'i' to "..", 'j' to ".---", 'k' to "-.-", 'l' to ".-..",
        'm' to "--", 'n' to "-.", 'o' to "---", 'p' to ".--.", 'q' to "--.-", 'r' to ".-.",
        's' to "...", 't' to "-", 'u' to "..-", 'v' to "...-", 'w' to ".--", 'x' to "-..-",
        'y' to "-.--", 'z' to "--.."
    )

    // Множество для хранения уникальных кодов Морзе
    val uniqueMorseCodes = HashSet<String>()

    // Считываем ввод
    println("Введите слова: ")
    val input = readLine()?.trim() ?: return

    // Разбиваем строку на слова
    val words = input.split(" ").filter { it.isNotEmpty() }

    for (word in words) {
        // Проверяем, что слово состоит только из строчных английских букв
        if (word.any { it !in 'a'..'z' }) {
            println("Ошибка: Введены недопустимые символы (только строчные буквы разрешены).")
            return
        }

        // Преобразуем слово в код Морзе
        val morse = word.map { morseCode[it] ?: "" }.joinToString("")

        // Сортируем полученный код Морзе
        val sortedMorse = morse.toCharArray().sorted().joinToString("")

        // Добавляем отсортированный код в множество
        uniqueMorseCodes.add(sortedMorse)
    }

    // Выводим количество уникальных кодов Морзе
    println("Количество уникальных кодов Морзе: ${uniqueMorseCodes.size}")
}

//java -jar morse.jar 