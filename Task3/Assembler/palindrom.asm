section .data
    ; [Блок данных] Строковые константы для вывода
    prompt      db "Введите трехзначные числа: ", 0  ; Приглашение ко вводу
    yes_msg     db " - YES", 0                      ; Суффикс для палиндромов  
    no_msg      db " - NO", 0                       ; Суффикс для обычных чисел
    space       db " ", 0                           ; Разделитель между выводами
    newline     db 10, 0                            ; Перевод строки (ASCII 10)
    format_int  db "%d", 0                          ; Формат для вывода чисел
    format_str  db "%s", 0                          ; Формат для вывода строк

section .bss
    ; [Блок неинициализированных данных] Буфер для ввода
    currentNum  resd 1                              ; 4-байтовый буфер под число

section .text
    ; [Блок объявлений] Внешние функции из libc
    global main
    extern printf, scanf, isdigit

main:
    ; [Блок инициализации] Пролог функции
    push rbp
    mov rbp, rsp

    ; [Блок вывода] Печать приглашения
    mov rdi, prompt
    xor eax, eax
    call printf

read_loop:
    ; [Блок ввода] Чтение числа через scanf
    mov rdi, format_int
    mov rsi, currentNum
    xor eax, eax
    call scanf
    
    ; [Блок проверки] Конец ввода (EOF/ошибка)
    cmp eax, 0
    jle exit_program
    
    ; [Блок проверки] Валидация трехзначности
    mov eax, [currentNum]
    cmp eax, 100
    jl not_three_digit
    cmp eax, 999
    jg not_three_digit
    
    ; [Блок вычислений] Проверка палиндрома:
    mov ecx, eax        ; Сохраняем исходное число
    
    ; - Получение первой цифры (сотни)
    mov eax, ecx
    mov ebx, 100
    xor edx, edx
    div ebx
    mov esi, eax        ; ESI = первая цифра
    
    ; - Получение последней цифры (единицы)
    mov eax, ecx
    mov ebx, 10
    xor edx, edx
    div ebx
    mov edi, edx        ; EDI = последняя цифра
    
    ; [Блок сравнения] Первая vs последняя цифра
    cmp esi, edi
    jne not_palindrome
    
    ; [Блок вывода] Случай палиндрома (YES)
    mov rdi, format_int
    mov esi, [currentNum]
    call printf
    mov rdi, yes_msg
    call printf
    jmp print_space

not_palindrome:
    ; [Блок вывода] Случай не палиндрома (NO)
    mov rdi, format_int
    mov esi, [currentNum]
    call printf
    mov rdi, no_msg
    call printf

print_space:
    ; [Блок форматирования] Разделитель между результатами
    mov rdi, space
    call printf
    jmp read_loop

not_three_digit:
    ; [Блок пропуска] Игнорируем не трехзначные числа
    jmp read_loop

exit_program:
    ; [Блок завершения] Финализация вывода
    mov rdi, newline
    call printf
    
    ; Эпилог функции
    xor eax, eax
    pop rbp
    ret