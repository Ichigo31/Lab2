# Проверяет, является ли число палиндромом (формат ABC == CBA)
def is_palindrome(num)
  num = num.abs
  return false unless num >= 100 && num <= 999  # Только 3-значные
  (num / 100) == (num % 10)  # Сравниваем первую и последнюю цифру
end

# Основной код
print "Введите числа через пробел: "
input = gets.chomp  # Получаем ввод

print "Результат: "
first = true  # Флаг первого элемента

input.split.each do |token|
  next unless token =~ /^-?\d+$/  # Пропускаем не числа
  
  num = token.to_i
  if num.abs.between?(100, 999)  # Проверяем 3-значность
    print ", " unless first  # Разделитель для элементов
    print "#{num} - #{is_palindrome(num) ? 'YES' : 'NO'}"
    first = false
  end
end

puts first ? "нет трехзначных чисел" : ""  # Сообщение если чисел нет