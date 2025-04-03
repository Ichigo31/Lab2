use std::io::{self, Write};

// Функция для проверки покрытия всех позиций вышками
fn check_coverage(n: usize, x: usize, towers: &str) -> bool {
    // Создаем вектор для отслеживания покрытия позиций вышками
    let mut covered = vec![false; n];

    // Проходим по всем вышкам
    for i in 0..n {
        if towers.chars().nth(i).unwrap() == '1' {
            // Если вышка работает, то она может покрывать соседей
            let start = if i >= x { i - x } else { 0 };
            let end = if i + x < n { i + x } else { n - 1 };

            // Обновляем зоны покрытия для текущей вышки
            for j in start..=end {
                covered[j] = true;
            }
        }
    }

    // Проверяем, все ли позиции покрыты
    for c in covered {
        if !c {
            return false; // Если хотя бы одна позиция не покрыта, возвращаем false
        }
    }

    true // Если все позиции покрыты, возвращаем true
}

fn main() {
    let mut input = String::new();

    // Ввод данных
    print!("Введите количество вышек: ");
    io::stdout().flush().unwrap(); // Ожидаем, чтобы пользователю увидеть запрос
    io::stdin().read_line(&mut input).unwrap();
    let n: usize = input.trim().parse().unwrap_or(0);
    input.clear();

    if n == 0 {
        println!("No");
        return;
    }

    print!("Введите показатель покрытия: ");
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut input).unwrap();
    let x: usize = input.trim().parse().unwrap_or(0);
    input.clear();

    print!("Введите строку состояния вышек: ");
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut input).unwrap();
    let towers = input.trim();

    if towers.len() != n || !towers.chars().all(|c| c == '0' || c == '1') {
        println!("No");
        return;
    }

    // Выводим результат проверки покрытия
    if check_coverage(n, x, towers) {
        println!("Yes");
    } else {
        println!("No");
    }
}

//cargo run

