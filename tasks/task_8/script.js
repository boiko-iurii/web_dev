// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while

function func_1() {
    let k = 0;
    let res = '';
    while (k <= 100) {
        res = res + k + ' ';
        k++;

    }
    return res;
}
// console.log(func_1());


// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while

function func_2(a, b) {
    let k = a;
    let res = '';
    while (k <= b) {
        res += k + ' ';
        k++;
    }

    return res;

}
// console.log(func_2(3, 10));

// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while

function func_3(a, b) {
    let k = b;
    let res = '';
    while (k >= a) {
        res += k + ' ';
        k--;
    }

    return res;

}
// console.log(func_3(3, 10));

// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

function func_4(a, b, c) {
    let k = b;
    let res = '';
    while (k >= a) {
        if (k % c == 0) {
            res += k + ' ';
        }
        k--;
    }
    return res;
}
// console.log(func_4(1, 100, 3));


// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

function func_5() {
    let sum = 0;
    let k = 0;
    while (k <= 20) {
        sum += k;
        k++;
    }
    return sum;
}
// console.log(func_5());

// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_6(a, b) {
    if (b > a) {
        let sum = 0;
        let k = a;
        while (k <= b) {
            sum += k;
            k++;
        }
        return sum;
    } else {
        return false;
    }
}
// console.log(func_6(1, 3));


// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_7(a, b) {
    if (b > a) {
        let prod = 1;
        let k = a;
        while (k <= b) {
            prod *= k;
            k++;
        }
        return prod;
    } else {
        return false;
    }
}
// console.log(func_7(3, 4));

// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетcя в 2 раза. Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.

function func_8() {
    let k = 1;
    let coins = 333;
    while (k < 100) {
        coins = coins * 2;
        if (coins >= 1000000) {
            return k;
            break;
        }
        k++;
    }
}
// console.log(func_8());


// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго введенного параграфа, где все четные числа заменены на символ нуля(0).

function func_9(a, b) {
    let k = a;
    let str = '';
    while (k <= b) {
        if (k % 2 == 0) {
            str += 'o';
        } else {
            str += k;
        }
        k++;
    }
    return str;

}
// console.log(func_9(1, 9));


// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *

function func_10() {

    let k = 0;
    let out = document.querySelector('#task10');
    let str = '';

    while (k < 6) {
        k++;
        if (k % 2 == 0) {
            str += '*';
        } else {
            let l = 0;
            while (l < 2) {
                str += '*';
                l++;
            }
        }
        str += '<br>';
    }

    out.innerHTML = str;

}
// func_10();


// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// while.

function func_11() {
    let out = document.querySelector('#task10');
    let res = '';
    let k = 20;

    while (k > 0) {
        if (k % 2 == 0) {
            let p1 = 0;
            while (p1 < k) {
                res += 1;
                p1++;
            }
        } else {
            let p2 = 10;
            while (p2 > 1) {
                res += 2;
                p2--;
            }
        }
        // res += k + `&nbsp;`;
        k--;

    }
    out.innerHTML = res;

}
func_11();

// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.

function func_12() {

}

// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.

function func_13() {

}

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня .Напишите функцию func_14 которая вернет день, когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 30% больше предыдущего.

function func_14() {

}

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию func_15, которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.

function func_15() {

}

// Task 16
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16 и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.

function func_16() {

}

// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, во второй 2 и т.д.Решение оформите в виде функции func_17.

function func_17() {

}


// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное количеству параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.

function func_18() {

}


// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.

function func_19() {

}

// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1

function func_20() {

}