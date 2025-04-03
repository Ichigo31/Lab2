# Таблица кодов Морзе
MORSE_CODE = {
    'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.",
    'g': "--.", 'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..",
    'm': "--", 'n': "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.",
    's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-",
    'y': "-.--", 'z': "--.."
}

def word_to_morse(word):
    """Преобразует слово в код Морзе с проверкой символов"""
    morse = []
    for char in word:
        if char not in MORSE_CODE:
            raise ValueError(f"Недопустимый символ: {char}")
        morse.append(MORSE_CODE[char])
    return ''.join(morse)

def count_unique_morse(words):
    """Подсчитывает уникальные коды Морзе с учетом перестановок букв"""
    unique_codes = set()
    
    for word in words:
        # Проверка длины слова
        if len(word) > 12:
            print(f"Ошибка: слово '{word}' слишком длинное (максимум 12 символов)")
            return None
        
        try:
            morse = word_to_morse(word)
            # Сортируем символы для учета перестановок
            sorted_morse = ''.join(sorted(morse))
            unique_codes.add(sorted_morse)
        except ValueError as e:
            print(f"Ошибка: {e}")
            return None
    
    return len(unique_codes)

def main():
    print("Введите слова через пробел:")
    try:
        input_words = input().strip().split()
        
        # Проверка количества слов
        if len(input_words) > 100:
            print("Ошибка: слишком много слов (максимум 100)")
            return
        
        result = count_unique_morse(input_words)
        if result is not None:
            print(f"Количество уникальных кодов Морзе: {result}")
    except Exception as e:
        print(f"Произошла ошибка: {e}")

if __name__ == "__main__":
    main()