#include <iostream>

// Проверка, является ли число трехзначным палиндромом
bool isPalindrome(int num) {
    num = abs(num); // Работаем с модулем числа
    if (num < 100 || num > 999) return false;
    return (num / 100) == (num % 10); // Сравниваем первую и последнюю цифру
}

int main() {
    std::cout << "Введите числа через пробел: ";
    int num;
    
    // Обработка каждого числа из ввода
    while (std::cin >> num) {
        if (abs(num) >= 100 && abs(num) <= 999) { // Проверка на трехзначность
            std::cout << num << " - " << (isPalindrome(num) ? "YES" : "NO") << "\n";
        }
    }
    
    return 0;
}