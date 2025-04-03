using System;

class Program
{
    // Проверяет, является ли число трехзначным палиндромом
    static bool IsThreeDigitPalindrome(int num)
    {
        num = Math.Abs(num); // Работаем с абсолютным значением числа
        if (num < 100 || num > 999) return false; // Проверка на трехзначность
        return (num / 100) == (num % 10); // Сравниваем первую и последнюю цифру
    }

    static void Main()
    {
        Console.Write("Введите числа через пробел: ");
        string input = Console.ReadLine(); // Чтение ввода пользователя
        string[] numbers = input.Split(' '); // Разделение ввода на массив чисел
        
        Console.Write("Результат: ");
        bool firstOutput = true; // Флаг для форматирования вывода
        
        foreach (string numStr in numbers)
        {
            if (int.TryParse(numStr, out int num)) // Парсинг строки в число
            {
                if (Math.Abs(num) >= 100 && Math.Abs(num) <= 999) // Проверка диапазона
                {
                    if (!firstOutput) Console.Write(", "); // Добавляем запятую перед элементами, кроме первого
                    // Вывод числа и результата проверки (YES/NO)
                    Console.Write($"{num} - {(IsThreeDigitPalindrome(num) ? "YES" : "NO")}");
                    firstOutput = false; // После первого вывода сбрасываем флаг
                }
            }
        }
    }
}

//mono palindrom.exe