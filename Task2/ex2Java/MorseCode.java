import java.util.*;

public class MorseCode {
    // Инициализация таблицы кодов Морзе
    private static final Map<Character, String> MORSE_CODE = new HashMap<>();
    
    static {
        MORSE_CODE.put('a', ".-");
        MORSE_CODE.put('b', "-...");
        MORSE_CODE.put('c', "-.-.");
        MORSE_CODE.put('d', "-..");
        MORSE_CODE.put('e', ".");
        MORSE_CODE.put('f', "..-.");
        MORSE_CODE.put('g', "--.");
        MORSE_CODE.put('h', "....");
        MORSE_CODE.put('i', "..");
        MORSE_CODE.put('j', ".---");
        MORSE_CODE.put('k', "-.-");
        MORSE_CODE.put('l', ".-..");
        MORSE_CODE.put('m', "--");
        MORSE_CODE.put('n', "-.");
        MORSE_CODE.put('o', "---");
        MORSE_CODE.put('p', ".--.");
        MORSE_CODE.put('q', "--.-");
        MORSE_CODE.put('r', ".-.");
        MORSE_CODE.put('s', "...");
        MORSE_CODE.put('t', "-");
        MORSE_CODE.put('u', "..-");
        MORSE_CODE.put('v', "...-");
        MORSE_CODE.put('w', ".--");
        MORSE_CODE.put('x', "-..-");
        MORSE_CODE.put('y', "-.--");
        MORSE_CODE.put('z', "--..");
    }

    // Преобразование слова в код Морзе
    private static String wordToMorse(String word) {
        StringBuilder morse = new StringBuilder();
        for (char c : word.toCharArray()) {
            String code = MORSE_CODE.get(c);
            if (code == null) {
                throw new IllegalArgumentException("Недопустимый символ: " + c);
            }
            morse.append(code);
        }
        return morse.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.println("Введите слова через пробел:");
            String input = scanner.nextLine();
            String[] words = input.split("\\s+");
            Set<String> uniqueCodes = new HashSet<>();

            for (String word : words) {
                // Проверка длины слова
                if (word.length() > 12) {
                    System.out.println("Ошибка: слово '" + word + "' слишком длинное (максимум 12 символов)");
                    return;
                }

                try {
                    String morse = wordToMorse(word);
                    // Сортируем символы кода для учета перестановок букв
                    char[] chars = morse.toCharArray();
                    Arrays.sort(chars);
                    uniqueCodes.add(new String(chars));
                } catch (IllegalArgumentException e) {
                    System.out.println("Ошибка: " + e.getMessage());
                    return;
                }
            }

            System.out.println("Количество уникальных кодов Морзе: " + uniqueCodes.size());
        } finally {
            scanner.close();
        }
    }
}