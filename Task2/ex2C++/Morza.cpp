#include <iostream>
#include <map>
#include <set>
#include <string>
#include <sstream>
#include <vector>
#include <algorithm>  // Подключаем заголовочный файл для sort

using namespace std;

// Код Морзе для каждой буквы
map<char, string> morseCode = {
    {'a', ".-"}, {'b', "-..."}, {'c', "-.-."}, {'d', "-.."}, {'e', "."}, {'f', "..-."}, {'g', "--."},
    {'h', "...."}, {'i', ".."}, {'j', ".---"}, {'k', "-.-"}, {'l', ".-.."}, {'m', "--"}, {'n', "-."},
    {'o', "---"}, {'p', ".--."}, {'q', "--.-"}, {'r', ".-."}, {'s', "..."}, {'t', "-"}, {'u', "..-"},
    {'v', "...-"}, {'w', ".--"}, {'x', "-..-"}, {'y', "-.--"}, {'z', "--.."}
};

// Функция для преобразования слова в код Морзе
string convertToMorse(const string& word) {
    string morse;
    for (char c : word) {
        morse += morseCode[c];  // Преобразуем букву в код Морзе
    }
    return morse;
}

int main() {
    set<string> uniqueMorseCodes;  // Множество для уникальных кодов Морзе
    string input;

    // Чтение входной строки
    cout << "Введите слова: ";
    getline(cin, input);

    istringstream stream(input);
    string word;
    
    // Обрабатываем каждое слово
    while (stream >> word) {
        // Преобразуем слово в код Морзе
        string morse = convertToMorse(word);
        
        // Для каждой строки из Морзе сортируем её, чтобы учесть перестановки букв
        sort(morse.begin(), morse.end());
        
        // Добавляем отсортированный код в множество
        uniqueMorseCodes.insert(morse);
    }
    
    // Выводим количество уникальных кодов
    cout << "Количество уникальных кодов Морзе: " << uniqueMorseCodes.size() << endl;

    return 0;
}
