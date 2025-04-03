use std::collections::HashSet;
use std::io::{self, Write};

fn main() {
    // Карта кодов Морзе для каждой буквы
    let morse_code: std::collections::HashMap<char, &str> = [
        ('a', ".-"), ('b', "-..."), ('c', "-.-."), ('d', "-.."), ('e', "."), ('f', "..-."), ('g', "--."),
        ('h', "...."), ('i', ".."), ('j', ".---"), ('k', "-.-"), ('l', ".-.."), ('m', "--"), ('n', "-."),
        ('o', "---"), ('p', ".--."), ('q', "--.-"), ('r', ".-."), ('s', "..."), ('t', "-"), ('u', "..-"),
        ('v', "...-"), ('w', ".--"), ('x', "-..-"), ('y', "-.--"), ('z', "--..")
    ].iter().cloned().collect();

    // Множество для хранения уникальных кодов Морзе
    let mut unique_morse_codes = HashSet::new();

    // Ввод данных
    print!("Введите слова: ");
    io::stdout().flush().unwrap();
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let input = input.trim();

    // Разбиваем строку на слова
    let words: Vec<&str> = input.split_whitespace().collect();

    // Обрабатываем каждое слово
    for word in words {
        // Преобразуем слово в код Морзе
        let morse: String = word.chars().map(|c| {
            *morse_code.get(&c).unwrap_or(&"")  // Получаем код Морзе для каждой буквы
        }).collect();

        // Сортируем символы кода Морзе
        let mut morse_chars: Vec<char> = morse.chars().collect();
        morse_chars.sort();
        let sorted_morse: String = morse_chars.into_iter().collect();

        // Добавляем отсортированный код Морзе в множество
        unique_morse_codes.insert(sorted_morse);
    }

    // Выводим количество уникальных кодов Морзе
    println!("Количество уникальных кодов Морзе: {}", unique_morse_codes.len());
}
