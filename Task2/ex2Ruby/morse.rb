# Таблица кодов Морзе
MORSE_CODE = {
  'a' => ".-", 'b' => "-...", 'c' => "-.-.", 'd' => "-..", 'e' => ".", 'f' => "..-.",
  'g' => "--.", 'h' => "....", 'i' => "..", 'j' => ".---", 'k' => "-.-", 'l' => ".-..",
  'm' => "--", 'n' => "-.", 'o' => "---", 'p' => ".--.", 'q' => "--.-", 'r' => ".-.",
  's' => "...", 't' => "-", 'u' => "..-", 'v' => "...-", 'w' => ".--", 'x' => "-..-",
  'y' => "-.--", 'z' => "--.."
}.freeze

# Преобразует слово в код Морзе
def word_to_morse(word)
  word.chars.map do |char|
    MORSE_CODE[char] || raise("Недопустимый символ: #{char}")
  end.join
end

# Подсчитывает уникальные коды Морзе с учетом перестановок букв
def count_unique_morse(words)
  unique_codes = Set.new
  
  words.each do |word|
    # Проверка длины слова
    if word.length > 12
      puts "Ошибка: слово '#{word}' слишком длинное (максимум 12 символов)"
      return nil
    end

    begin
      morse = word_to_morse(word)
      # Сортируем символы для учета перестановок
      sorted_morse = morse.chars.sort.join
      unique_codes.add(sorted_morse)
    rescue => e
      puts "Ошибка: #{e.message}"
      return nil
    end
  end
  
  unique_codes.size
end

# Основная функция
def main
  puts "Введите слова через пробел:"
  input = gets.chomp
  words = input.split
  
  # Проверка количества слов
  if words.size > 100
    puts "Ошибка: слишком много слов (максимум 100)"
    return
  end
  
  result = count_unique_morse(words)
  puts "Количество уникальных кодов Морзе: #{result}" if result
end

# Запуск программы
main if __FILE__ == $0