import Foundation

let morseCode: [Character: String] = [
    "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
    "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
    "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
    "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
    "y": "-.--", "z": "--.."
]

print("Введите слова через пробел:", terminator: " ")
guard let input = readLine()?.lowercased() else {
    fatalError("Ошибка чтения ввода")
}

let words = input.components(separatedBy: .whitespaces).filter { !$0.isEmpty }
var uniqueCodes = Set<String>()

for word in words {
    // Проверка на допустимые символы
    guard word.allSatisfy({ morseCode.keys.contains($0) }) else {
        print("Ошибка: слово '\(word)' содержит недопустимые символы")
        exit(1)
    }
    
    let morse = word.map { morseCode[$0]! }.joined()
    let sortedMorse = String(morse.sorted())
    uniqueCodes.insert(sortedMorse)
}

print("Количество уникальных кодов Морзе: \(uniqueCodes.count)")