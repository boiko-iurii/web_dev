
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


for (let k = 0; k < 5; k++) {

    output9.innerHTML += '*';

}

for (let i = 0; i < 3; i++) {

    output9.innerHTML += '<br>';

}

for (let k = 0; k < 5; k++) {

    output9.innerHTML += '*';

}