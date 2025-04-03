using System;
using System.Collections.Generic;

class Program
{
    // Словарь для преобразования букв в код Морзе
    static Dictionary<char, string> morseCode = new Dictionary<char, string>
    {
        {'a', ".-"}, {'b', "-..."}, {'c', "-.-."}, {'d', "-.."}, {'e', "."}, {'f', "..-."}, {'g', "--."},
        {'h', "...."}, {'i', ".."}, {'j', ".---"}, {'k', "-.-"}, {'l', ".-.."}, {'m', "--"}, {'n', "-."},
        {'o', "---"}, {'p', ".--."}, {'q', "--.-"}, {'r', ".-."}, {'s', "..."}, {'t', "-"}, {'u', "..-"},
        {'v', "...-"}, {'w', ".--"}, {'x', "-..-"}, {'y', "-.--"}, {'z', "--.."}
    };

    // Функция для преобразования слова в код Морзе
    static string ConvertToMorse(string word)
    {
        string morse = "";
        
        // Преобразуем каждый символ слова в соответствующий код Морзе
        foreach (char c in word)
        {
            if (!char.IsLower(c))
            {
                Console.WriteLine("Ошибка: Введены недопустимые символы (только строчные буквы разрешены).");
                Environment.Exit(1); // Завершаем программу при ошибке
            }
            morse += morseCode[c];
        }

        return morse;
    }

    static void Main()
    {
        // Множество для хранения уникальных кодов Морзе
        HashSet<string> uniqueMorseCodes = new HashSet<string>();

        // Запрашиваем ввод пользователя
        Console.WriteLine("Введите слова: ");
        string input = Console.ReadLine(); // Считываем строку

        // Разбиваем строку на отдельные слова
        string[] words = input.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);

        // Обрабатываем каждое слово
        foreach (string word in words)
        {
            // Проверяем, что слово состоит только из строчных букв
            foreach (char c in word)
            {
                if (!char.IsLower(c))
                {
                    Console.WriteLine("Ошибка: Введены недопустимые символы (только строчные буквы разрешены).");
                    return; // Завершаем программу при ошибке
                }
            }

            // Преобразуем слово в код Морзе
            string morse = ConvertToMorse(word);

            // Сортируем код Морзе, чтобы он был независим от порядка букв
            char[] morseArray = morse.ToCharArray();
            Array.Sort(morseArray);
            morse = new string(morseArray);

            // Добавляем уникальный код Морзе в множество
            uniqueMorseCodes.Add(morse);
        }

        // Выводим количество уникальных кодов Морзе
        Console.WriteLine("Количество уникальных кодов Морзе: " + uniqueMorseCodes.Count);
    }
}
//./morse.exe