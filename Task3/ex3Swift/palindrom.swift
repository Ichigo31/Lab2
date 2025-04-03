import Foundation

/// Проверяет, является ли число трехзначным палиндромом
/// - Parameter num: Проверяемое число
/// - Returns: true, если число является трехзначным палиндромом
func isThreeDigitPalindrome(_ num: Int) -> Bool {
    let absNum = abs(num)
    guard absNum >= 100 && absNum <= 999 else { return false }
    return (absNum / 100) == (absNum % 10)
}

func main() {
    print("Введите числа через пробел:", terminator: " ")
    guard let input = readLine() else { return }
    
    let numbers = input.components(separatedBy: .whitespaces)
    var result = "Результат: "
    var isFirst = true
    
    for numStr in numbers {
        guard let num = Int(numStr) else { continue }
        
        if abs(num) >= 100 && abs(num) <= 999 {
            if !isFirst {
                result += ", "
            }
            result += "\(num) - \(isThreeDigitPalindrome(num) ? "YES" : "NO")"
            isFirst = false
        }
    }
    
    print(result)
}

// Запуск программы
main()