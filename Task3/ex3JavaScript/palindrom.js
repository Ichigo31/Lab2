// Функция проверки трехзначного палиндрома
function isThreeDigitPalindrome(num) {
  // Проверяем трехзначность числа
  const absNum = num < 0 ? -num : num;
  if (absNum < 100 || absNum > 999) return false;
  
  // Сравниваем первую и последнюю цифру
  const firstDigit = Math.floor(absNum / 100);
  const lastDigit = absNum % 10;
  return firstDigit === lastDigit;
}

// Основная функция обработки ввода
function processInput() {
  process.stdin.setEncoding('utf8');
  console.log("Введите количество чисел, затем сами числа:");
  
  let numbersCount = 0;
  let numbersProcessed = 0;
  let result = "";
  
  process.stdin.on('data', function(input) {
      // Обрабатываем ввод посимвольно
      for (let i = 0; i < input.length; i++) {
          const char = input[i];
          
          // Если это цифра
          if (char >= '0' && char <= '9') {
              if (numbersCount === 0) {
                  // Считываем количество чисел
                  numbersCount = numbersCount * 10 + parseInt(char);
              } else {
                  // Считываем сами числа
                  let num = 0;
                  let isNegative = false;
                  
                  // Обрабатываем знак минуса
                  if (input[i-1] === '-') {
                      isNegative = true;
                  }
                  
                  // Собираем число из цифр
                  while (i < input.length && input[i] >= '0' && input[i] <= '9') {
                      num = num * 10 + parseInt(input[i]);
                      i++;
                  }
                  
                  // Применяем знак
                  if (isNegative) {
                      num = -num;
                  }
                  
                  // Проверяем число
                  if (numbersProcessed < numbersCount) {
                      const absNum = num < 0 ? -num : num;
                      if (absNum >= 100 && absNum <= 999) {
                          if (result) result += ", ";
                          result += `${num} - ${isThreeDigitPalindrome(num) ? "YES" : "NO"}`;
                      }
                      numbersProcessed++;
                  }
              }
          }
      }
      
      // Если все числа обработаны - выводим результат
      if (numbersProcessed >= numbersCount) {
          console.log("Результат:", result || "нет трехзначных чисел");
          process.exit();
      }
  });
}

// Запуск программы
processInput();