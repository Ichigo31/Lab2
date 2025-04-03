using System;

class Program
{
    // Функция для проверки покрытия всех позиций вышками
    static bool CheckCoverage(int n, int x, string towers)
    {
        // Проверяем корректность входных данных
        if (n <= 0 || x < 0 || towers.Length != n)
            return false;

        bool[] covered = new bool[n]; // Массив для отслеживания покрытия

        // Проходим по всем вышкам
        for (int i = 0; i < n; i++)
        {
            // Если вышка работает, то она может покрывать свои соседи
            if (towers[i] == '1')
            {
                // Обновляем зоны покрытия для текущей вышки
                for (int j = Math.Max(0, i - x); j <= Math.Min(n - 1, i + x); j++)
                {
                    covered[j] = true; // Заносим в массив, что эта позиция покрыта
                }
            }
        }

        // Проверяем, все ли позиции покрыты
        foreach (bool c in covered)
        {
            if (!c) return false; // Если хотя бы одна позиция не покрыта, возвращаем false
        }

        return true; // Все позиции покрыты, возвращаем true
    }

    static void Main()
    {
        // Ввод данных с проверками на null и корректность
        Console.Write("Введите количество вышек: ");
        string? nInput = Console.ReadLine(); // Используем nullable string (string?)
        if (nInput == null || !int.TryParse(nInput, out int n) || n <= 0)
        {
            Console.WriteLine("No");
            return; // Если введено неверное значение, выводим "No" и завершаем программу
        }

        Console.Write("Введите показатель покрытия: ");
        string? xInput = Console.ReadLine(); // Используем nullable string (string?)
        if (xInput == null || !int.TryParse(xInput, out int x) || x < 0)
        {
            Console.WriteLine("No");
            return; // Если введено неверное значение, выводим "No" и завершаем программу
        }

        Console.Write("Введите строку состояния вышек: ");
        string? towers = Console.ReadLine(); // Используем nullable string (string?)

        // Проверка корректности введённых данных
        if (towers == null || towers.Length != n || !IsValidTowersString(towers))
        {
            Console.WriteLine("No");
            return; // Если данные некорректные, выводим "No"
        }

        // Выводим результат проверки покрытия
        Console.WriteLine(CheckCoverage(n, x, towers) ? "Yes" : "No");
    }

    // Дополнительная функция для проверки корректности строки состояния вышек
    static bool IsValidTowersString(string towers)
    {
        foreach (char c in towers)
        {
            if (c != '0' && c != '1')
            {
                return false; // Если в строке есть символы, отличные от '0' и '1', возвращаем false
            }
        }
        return true; // Если все символы валидны, возвращаем true
    }
}

//dotnet run 1c#.cs 