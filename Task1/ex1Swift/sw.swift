import Foundation

// Функция для проверки покрытия всех кооперативов связью
func checkCoverage(n: Int, x: Int, towers: String) -> Bool {
    // Проверяем корректность входных данных
    if n <= 0 || x < 0 || towers.count != n {
        return false
    }
    
    // Создаём массив, где будем отмечать, какие позиции покрыты связью
    var covered = [Bool](repeating: false, count: n)
    
    // Проходим по всем вышкам
    for (i, tower) in towers.enumerated() {
        if tower == "1" { // Если вышка работает
            // Определяем диапазон покрытия вышки
            let start = max(0, i - x)  // Левая граница (не меньше 0)
            let end = min(n - 1, i + x) // Правая граница (не больше n-1)
            
            // Помечаем все позиции в этом диапазоне как покрытые связью
            for j in start...end {
                covered[j] = true
            }
        }
    }
    
    // Проверяем, есть ли непокрытые позиции
    return !covered.contains(false)
}

// Функция для ввода данных и запуска программы
func main() {
    // Запрашиваем у пользователя количество вышек
    print("Введите количество вышек:")
    guard let nInput = readLine(), let n = Int(nInput), n > 0 else {
        print("No") // Некорректный ввод — сразу выводим "No" и завершаем программу
        return
    }

    // Запрашиваем показатель покрытия вышек
    print("Введите показатель покрытия:")
    guard let xInput = readLine(), let x = Int(xInput), x >= 0 else {
        print("No") // Некорректный ввод — выводим "No" и завершаем программу
        return
    }

    // Запрашиваем строку состояния вышек
    print("Введите строку состояния вышек:")
    guard let towers = readLine(), towers.count == n, towers.allSatisfy({ $0 == "0" || $0 == "1" }) else {
        print("No") // Некорректный ввод (длина строки не совпадает с n или есть недопустимые символы)
        return
    }

    // Вызываем функцию проверки и выводим результат
    print(checkCoverage(n: n, x: x, towers: towers) ? "Yes" : "No")
}

// Запуск программы
main()
//swift sw.swift 