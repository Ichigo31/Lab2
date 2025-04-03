use std::io;

/// Проверяет, является ли число трёхзначным палиндромом
fn is_palindrome(num: i32) -> bool {
    let num = num.abs();  // Берём модуль для отрицательных чисел
    // Проверяем трёхзначность и совпадение крайних цифр
    num >= 100 && num <= 999 && (num / 100) == (num % 10)
}

fn main() {
    println!("Введите числа через пробел:");
    
    // Чтение ввода с обработкой ошибок
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    
    let mut first = true;  // Флаг первого вывода
    print!("Результат: ");
    
    // Разбиваем ввод на числа
    for token in input.trim().split_whitespace() {
        if let Ok(num) = token.parse::<i32>() {
            // Проверяем трёхзначность
            if num.abs() >= 100 && num.abs() <= 999 {
                // Форматируем вывод с разделителями
                if !first { print!(", "); }
                print!("{} - {}", num, if is_palindrome(num) { "YES" } else { "NO" });
                first = false;
            }
        }
    }
    
    println!();  // Перенос строки после вывода
}