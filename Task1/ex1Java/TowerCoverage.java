package Lab2.Task1.ex1Java;

import java.util.Scanner;

public class TowerCoverage {
    
    // Проверяет, покрыты ли все участки вышками с заданным радиусом
    public static boolean checkCoverage(int n, int x, String towers) {
        // Проверка корректности входных данных
        if (n <= 0 || x < 0 || towers.length() != n) {
            return false;
        }

        boolean[] covered = new boolean[n]; // Массив для отметки покрытых участков

        // Проходим по всем вышкам
        for (int i = 0; i < n; i++) {
            if (towers.charAt(i) == '1') { // Если вышка существует
                // Определяем зону покрытия текущей вышки
                int start = Math.max(0, i - x); // Начальный индекс покрытия
                int end = Math.min(n - 1, i + x); // Конечный индекс покрытия
                
                // Отмечаем все покрытые участки в зоне
                for (int j = start; j <= end; j++) {
                    covered[j] = true;
                }
            }
        }

        // Проверяем, все ли участки покрыты
        for (boolean c : covered) {
            if (!c) return false;
        }
        
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Ввод данных пользователем
        System.out.print("Введите количество вышек (N): ");
        int n = scanner.nextInt();
        
        System.out.print("Введите показатель покрытия (X): ");
        int x = scanner.nextInt();
        
        System.out.print("Введите строку состояния вышек: ");
        String towers = scanner.next();

        // Проверка покрытия и вывод результата
        if (checkCoverage(n, x, towers)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
        
        scanner.close();
    }
}