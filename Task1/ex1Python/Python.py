def check_coverage(n: int, x: int, towers: str) -> bool:
    # Проверяет, покрыты ли все кооперативы связью
    if n <= 0 or x < 0 or len(towers) != n:
        return False  # Некорректные входные данные

    covered = [False] * n  # Создаём список, отслеживающий покрытие кооперативов

    # Проходим по всем вышкам
    for i in range(n):
        if towers[i] == '1':  # Если вышка работает
            start, end = max(0, i - x), min(n - 1, i + x)  # Определяем границы зоны покрытия
            for j in range(start, end + 1):
                covered[j] = True  # Отмечаем, что кооператив находится в зоне покрытия

    return all(covered)  # Проверяем, покрыты ли все кооперативы


def main():
    try:
        n = int(input("Введите количество вышек: "))  # Ввод количества вышек
        x = int(input("Введите показатель покрытия: "))  # Ввод радиуса покрытия
        towers = input("Введите строку состояния вышек: ")  # Ввод строки с состоянием вышек

        # Проверяем корректность входных данных
        if n <= 0 or x < 0 or len(towers) != n or not set(towers).issubset({'0', '1'}):
            print("No")  # Если входные данные некорректны, выводим "No"
            return

        # Выводим результат проверки покрытия
        print("Yes" if check_coverage(n, x, towers) else "No")

    except ValueError:
        print("No")  # В случае ошибки при вводе данных


if __name__ == "__main__":
    main()  # Запускаем программу
