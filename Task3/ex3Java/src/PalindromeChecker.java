import java.util.Scanner; // Импорт класса для ввода данных

public class PalindromeChecker {
    // Проверяет, является ли число трехзначным палиндромом
    public static boolean isPalindrome(int num) {
        num = Math.abs(num); // Работаем с абсолютным значением числа
        // Проверяем трехзначность и равенство первой/последней цифры
        return num >= 100 && num <= 999 && (num / 100) == (num % 10);
    }

    public static void main(String[] args) {
        System.out.print("Введите числа через пробел: ");
        Scanner scanner = new Scanner(System.in); // Создаем объект Scanner для ввода
        
        // Читаем ввод пока есть данные
        while (scanner.hasNext()) {
            if (scanner.hasNextInt()) { // Если введено число
                int num = scanner.nextInt();
                // Проверяем трехзначность
                if (Math.abs(num) >= 100 && Math.abs(num) <= 999) {
                    // Выводим результат проверки (YES/NO)
                    System.out.println(num + " - " + 
                        (isPalindrome(num) ? "YES" : "NO"));
                }
            } else {
                scanner.next(); // Пропускаем нечисловые значения
            }
        }
        scanner.close(); // Закрываем Scanner
    }
}