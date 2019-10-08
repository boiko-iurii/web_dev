
// let output1 = document.querySelector('#output1');
// let output2 = document.querySelector('#output2');
// let output3 = document.querySelector('#output3');
// let output4 = document.querySelector('#output4');
// let output5 = document.querySelector('#output5');
// let output6 = document.querySelector('#output6');

/* Task 1 
** С помощью вложенных циклов и символа * нарисуйте: *** *** ***
*/

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
        output1.innerHTML += '*';
    }
    output1.innerHTML += '  ';
}

/* Task 2
** С помощью вложенных циклов и символа * нарисуйте:  *****
**                                                    *****
**                                                    *****
*/

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 5; k++) {
        output2.innerHTML += '*';
    }
    output2.innerHTML += '<br>';
}

/* Task 3
** С помощью вложенных циклов и символа * нарисуйте:  101010
**                                                    101010
**                                                    101010
*/

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
        if (k % 2 == 0) {
            output3.innerHTML += '1';
        }
        else {
            output3.innerHTML += '0';
        }
    }
    output3.innerHTML += '<br>';
}

/* Task 4
** С помощью вложенных циклов и символа 1,0 нарисуйте прямоугольник.
**  1 или 0 выводите в зависимости от того четная или нет переменная внутреннего цикла.
**  Каждый третий элемент заменяйте на x:  10x01x
**                                         10x01x
**                                         10x01x
*/

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
        if ((k + 1) % 3 == 0) {
            output4.innerHTML += 'x';
        }
        else if ((k + 1) % 2 == 0) {
            output4.innerHTML += '0';
        }
        else {
            output4.innerHTML += '1';
        }
    }
    output4.innerHTML += '<br>';
}

/* Task 5
**  С помощью вложенных циклов и символа * нарисуйте:
**                                                   *
**                                                   **
**                                                   ***
**
*/

for (let i = 0; i < 3; i++) {

    for (let k = 0; k <= i; k++) {

        output5.innerHTML += '*';

    }

    output5.innerHTML += '<br>';
}

/* Task 6
**  С помощью вложенных циклов и символа * нарисуйте:
**                                                   *****
**                                                   ****
**                                                   ***
**                                                   **
**                                                   *
**
*/

for (let i = 6; i >= 0; i--) {

    for (let k = i; k >= 0; k--) {

        output6.innerHTML += '*';

    }

    output6.innerHTML += '<br>';
}

/* Task 7
**  С помощью вложенных циклов и символа * нарисуйте:
**                                                     *****
**                                                    *****
**                                                   *****
**
*/


for (let i = 3; i > 0; i--) {

    for (let j = i - 1; j > 0; j--) {

        output7.innerHTML += '&nbsp;';

    }
    for (let k = 5; k > 0; k--) {

        output7.innerHTML += '*';

    }

    output7.innerHTML += '<br>';

}

/* Task 8
**  С помощью вложенных циклов и символа * нарисуйте:
**                                                   *
**                                                   **
**                                                   ***
**                                                   **
**                                                   *
**
*/


for (let i = 1; i <= 3; i++) {

    for (let k = 1; k <= i; k++) {

        output8.innerHTML += '*';

    }

    output8.innerHTML += '<br>';

}

for (let i = 2; i >= 1; i--) {

    for (let k = 1; k <= i; k++) {

        output8.innerHTML += '*';

    }

    output8.innerHTML += '<br>';

}

/* Task 9
**  С помощью вложенных циклов и символа * нарисуйте:
**                                                   ******
**                                                   *    *
**                                                   *    *
**                                                   *    *
**                                                   ******
**
*/
for (let i = 1; i <= 5; i++) {

    if (i == 1 || i == 5) {

        for (let k = 1; k <= 6; k++) {

            output9.innerHTML += '*';

        }

    } else {

        for (let k = 1; k <= 6; k++) {

            if (k == 1 || k == 6) {

                output9.innerHTML += '*';

            } else {

                output9.innerHTML += '&nbsp;';

            }

        }
    }

    output9.innerHTML += '<br>';

}

/* Task 11
**  С помощью вложенных циклов выведите таблицу умножения на 6 и 7.
**
*/

for (let i = 6; i <= 7; i++) {

    for (let k = 1; k <= 9; k++) {

        output11.innerHTML += `${i} * ${k} = ${i * k}`;

        output11.innerHTML += '<br>';
    }

    output11.innerHTML += '<br>';

}



/* Task 12
**  С помощью вложенных циклов выведите:
**                                      1
**                                      12
**                                      123
**                                      1234
**                                      12345
**
*/


for (let i = 1; i <= 5; i++) {

    for (let k = 1; k <= i; k++) {

        output12.innerHTML += k;

    }

    output12.innerHTML += '<br>';

}

/* Task 13
**  С помощью вложенных циклов выведите:
**                                      01 02 03 04 05 06 07 08 09 10
**                                      11 12 13 14 15 16 17 18 19 20
**                                      21 22 23 24 25 26 27 28 29 30
**                                      31 32 33 34 35 36 37 38 39 40
**                                      41 42 43 44 45 46 47 48 49 50
**
*/

for (let i = 0; i < 5; i++) {

    for (let k = 1; k <= 10; k++) {

        if (k == 10) {

            output13.innerHTML += `${i + 1}0`;

        } else {

            output13.innerHTML += `${i}${k}&nbsp;`;

        }

    }

    output13.innerHTML += '<br>';

}


/* Task 14
**  С помощью вложенных циклов выведите:
**                                      54321
**                                      4321
**                                      321
**                                      21
**                                      1
**
*/


for (let i = 5; i >= 1; i--) {

    for (let k = i; k >= 1; k--) {

        output14.innerHTML += k;

    }

    output14.innerHTML += '<br>';

}


/* Task 15
**  С помощью вложенных циклов выведите:
**                                      x x x x 1
**                                      x x x 2 1
**                                      x x 3 2 1
**                                      x 4 3 2 1
**                                      5 4 3 2 1
**
*/

for (let i = 1; i <= 5; i++) {

    for (let k = 5; k > i; k--) {

        output15.innerHTML += 'x&nbsp;';

    }

    for (let k = i; k >= 1; k--) {

        output15.innerHTML += `${k}&nbsp;`;

    }

    output15.innerHTML += '<br>';

}

/* Task 16
**  С помощью вложенных циклов выведите:
**                                      1
**                                      2 2
**                                      3 3 3
**                                      4 4 4 4
**                                      5 5 5 5 5
**
*/


for (let i = 1; i <= 5; i++) {

    for (let k = i; k >= 1; k--) {

        output16.innerHTML += `${i}&nbsp;`;

    }

    output16.innerHTML += '<br>';

}


/* Task 17
**  С помощью вложенных циклов выведите:
**                                      5
**                                      4 4
**                                      3 3 3
**                                      2 2 2 2
**                                      1 1 1 1 1
**
*/

for (let i = 5; i >= 1; i--) {

    for (let j = i; j <= 5; j++) {

        output17.innerHTML += `${i}&nbsp;`;

    }

    output17.innerHTML += '<br>';

}
/* Task 18
**  С помощью вложенных циклов выведите:
**                                      5
**                                      x x
**                                      3 3 3
**                                      x x x x
**                                      1 1 1 1 1
**
*/

for (let i = 5; i >= 1; i--) {

    if (i % 2 == 0) {

        for (let j = i; j <= 5; j++) {

            output18.innerHTML += `x&nbsp;`;

        }

    } else {


        for (let j = i; j <= 5; j++) {

            output18.innerHTML += `${i}&nbsp;`;

        }

    }

    output18.innerHTML += '<br>';

}

/* Task 19
**  С помощью вложенных циклов и символа * нарисуйте:
**                                                     *****
**                                                    *******
**                                                   *********
**
*/

for (let i = 0; i < 3; i++) {

    for (let k = 0; k <= i + 4; k++) {

        output19.innerHTML += '*';

    }

    output19.innerHTML += '<br>';
}

/* Task 20
**  С помощью вложенных циклов и символа * нарисуйте:
**                                                     **
**                                                    ****
**                                                   ******
**                                                    ****
**                                                     **
**
*/

for (let i = 1; i <= 3; i++) {

    for (let k = 0; k < i * 2; k++) {

        output20.innerHTML += '*';

    }

    output20.innerHTML += '<br>';

}
for (let i = 2; i >= 1; i--) {

    for (let k = 0; k < i * 2; k++) {

        output20.innerHTML += '*';

    }

    output20.innerHTML += '<br>';

}