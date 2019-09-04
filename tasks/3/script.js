//task1
// let a = 4;
// console.log(a == 4);

//task2
// let b = 8;
// let c = 10;

// if (b > c) {
//     console.log('b > c');
// } else {
//     console.log('b < c');
// }

//task4
const firstInput = document.querySelector('#firstNum');
const secondInput = document.querySelector('#secondNum');
const btn = document.querySelector('#btn');

btn.onclick = function () {
    let firstNum = +firstInput.value;
    let secondNum = +secondInput.value;
    compareTwoNumbers(firstNum, secondNum);
}
function compareTwoNumbers(a, b) {
    if (a > b) {
        console.log('a>b');
    } else if (a < b) {
        console.log('a<b');
    } else {
        console.log('a=b');
    }
}
//task5
// const year = document.querySelector('#year');
// const calcBtn = document.querySelector('#calc');

// calcBtn.onclick = function () {
//     let yearValue = +year.value;
//     let res = 2019 - yearValue;

//     if (yearValue < 2000) {
//         console.log(res);
//     } else {
//         alert(res);
//     }
// }
//task7
const num7 = document.querySelector('#num7');
const calcBtn7 = document.querySelector('#calc7');

calcBtn7.onclick = function () {
    let num7Value = +num7.value;
    // let res = 2019 - yearValue;

    if (num7Value > 0) {
        alert('Больше 0');
    } else if (num7Value < 0) {
        alert('Меньше 0');
    } else {
        alert('Равно 0');

    }
}

//task8
const num8 = document.querySelector('#num8');
const calcBtn8 = document.querySelector('#calc8');

calcBtn8.onclick = function () {
    let num8Value = +num8.value;
    // let res = 2019 - yearValue;

    if (num8Value % 2 == 0) {
        alert('Четное');
    } else {
        alert('Нечетное');

    }
}
//task10
const input10 = document.querySelector('#text10');
const btn10 = document.querySelector('#calc10');

btn10.onclick = function () {
    let userName = input10.value;

    if (userName.indexOf(' ') == -1 && userName.length != 0) {
        alert(`Hello, ${userName}`);
    } else if (userName.length == 0) {
        console.log('Введите имя');
    } else {
        console.log('Имя введено не корректно');
    }


}