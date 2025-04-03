#include <iostream>
#include <cstring> // Для memset()

using namespace std;

// Функция для проверки покрытия всех позиций сигналом
bool checkCoverage(int n, int x, const string& towers) {
    // Проверка корректности входных данных
    if (n <= 0 || x < 0 || towers.length() != n) { 
        return false;
    }

    // Массив для отслеживания покрытия позиций
    bool covered[n];  
    // Инициализируем массив covered значением false (0) с помощью memset
    memset(covered, 0, sizeof(covered));  

    // Проходим по всем вышкам
    for (int i = 0; i < n; ++i) {
        // Если вышка есть на текущей позиции (значение '1')
        if (towers[i] == '1') {
            // Для каждой вышки помечаем позиции, которые она покрывает
            for (int j = max(0, i - x); j <= min(n - 1, i + x); ++j) {
                covered[j] = true; // Отмечаем, что эта позиция покрыта
            }
        }
    }

    // Проверяем, покрыта ли каждая позиция
    for (int i = 0; i < n; ++i) {
        if (!covered[i]) return false; // Если хоть одна позиция не покрыта, возвращаем false
    }

    // Если все позиции покрыты, возвращаем true
    return true;
}

int main() {
    int n, x; // Размер строки и радиус покрытия
    string towers; // Строка, представляющая расположение вышек

    // Вводим значения
    cin >> n >> x >> towers;

    // Проверяем корректность ввода
    if (n <= 0 || x < 0 || towers.length() != n) { 
        cout << "No" << endl; // Если ввод некорректен, выводим "No"
        return 0; // Завершаем программу
    }

    // Выводим результат проверки покрытия всех позиций
    cout << (checkCoverage(n, x, towers) ? "Yes" : "No") << endl;

    return 0; // Завершаем программу
}

//./c++
