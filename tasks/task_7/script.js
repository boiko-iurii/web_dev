
/* Task 1
** Создайте функцию (именнованную), которая при клике на кнопке выводит в консоль ваше имя.
**
*/

document.querySelector('#button1').onclick = displayNameOnClick;

function displayNameOnClick() {
    console.log('Iurii');
}

/* Task 2
** Создайте функцию (именованную). Функция должна примать один параметр - имя (например Ivan) 
** и выводить имя переданное ей в консоль. Запустите функцию и передайте в качестве имени Sergey.
**
*/

function displayNameToConsole(name) {
    console.log(name);
}

displayNameToConsole('Sergey');

/* Task 3
**
*/

document.querySelector('#button3').onclick = () => {

    func3(2);

}

function func3(num) {
    console.log(num * 10);
}

/* Task 4
** Создайте кнопку и функцию. При нажатии кнопки, функция окрашивает данную кнопку в background: red.
**
*/

document.querySelector('#button4').onclick = function () {
    this.style.background = 'red';
}

/* Task 5
** Создайте функцию, которая возвращает ваше имя. Имя вводится с input.
**
*/

document.querySelector('#input5').onchange = function () {
    // return this.value;
    console.log(this.value);
}

/* Task 6
** Создайте функцию, которая принимает 2 числа и возвращает большее число из двух,
** либо любое из них если они равны.
**
*/

function toCompare(a, b) {
    if (a > b || a == b) {
        console.log(a);
    } else if (a < b) {
        console.log(b)
    }
}

toCompare(7, 6);

/* Task 9
** Создайте функцию, которая возвращает случайное число в указанном диапазоне.
** Диапазон указывает пользователь с помощью двух переменных, которые передаются
** функции в качестве параметров.
**
*/

function randomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

randomNum(1, 100);

/* Task 11
** Создайте функцию f11, которая возвращает число 5. Создайте функцию которая
** принимает 2 параметра и перемножает их между собой. В качестве первого
** параметра передайте f11().
**
*/

function f11() {
    return 5;
}
function multiply(a, b) {
    return a * b;
}

multiply(f11(), 2);

/* Task 13
** Создайте функцию emptyInput - которая принимает в качестве параметра input,
** удаляет все пробелы введенные до и после значения (trim), и проверяет - если
** результат равен пустой строке - то возвращает false, если нет - то сам результат
** с обрезанными пробелами.
**
*/

document.querySelector('#input13').onchange = function () {
    console.log(emptyInput(this));
}

function emptyInput(input) {
    if (input.value == '') {

        return false;

    } else {

        return input.value.trim();

    }
}

/* Task 15
** Создайте div, задайте ему ширину и высоту в CSS, границу.
** Добавьте на div событие onmousemove - и стрелочную функцию срабатывающую при этом событии.
** Стрелочная функция должна выводить move в консоль.
**
*/

document.querySelector('#div15').onmousemove = () => {
    console.log('move');
}
/* Task 16
** Создайте div, задайте ему ширину и высоту в CSS, границу.
** Добавьте на div событие onmouseenter - и стрелочную функцию срабатывающую при этом событии.
** Стрелочная функция должна выводить enter в консоль.
**
*/

document.querySelector('#div16').onmouseenter = () => {
    console.log('enter');
}
/* Task 17
** Создайте div, задайте ему ширину и высоту в CSS, границу.
** Добавьте на div событие onmouseleave - и стрелочную функцию срабатывающую при этом событии.
** Стрелочная функция должна выводить leave в консоль.
**
*/

document.querySelector('#div17').onmouseleave = () => {
    console.log('leave');
}