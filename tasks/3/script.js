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

//task11
const input11 = document.querySelector('#text11');
const btn11 = document.querySelector('#calc11');

btn11.onclick = function () {
    let userName = input11.value.trim();

    console.log(userName.length);

    if (userName == '') {
        alert('Введите имя!')
    } else {
        alert(`Hello, ${userName}`);
    }

}

//task13
const input13 = document.querySelector('#text13');
const btn13 = document.querySelector('#calc13');

btn13.onclick = function () {
    let houseNumber = +input13.value;
    switch (true) {
        case (houseNumber >= 1 && houseNumber <= 5):
            console.log('Ваша улица - 1');
            break;
        case (houseNumber >= 6 && houseNumber <= 11):
            console.log('Ваша улица - 2');
            break;
        case (houseNumber >= 12 && houseNumber <= 20):
            console.log('Ваша улица - 3');
            break;
        default:
            console.log('Вы ввели не верно номер дома');
            break;
    }
}

//task14
const input14 = document.querySelector('#text14');
const btn14 = document.querySelector('#calc14');
const output14 = document.querySelector('#output14');

btn14.onclick = function () {
    let xRays = +input14.value;
    switch (true) {
        case (xRays >= 0 && xRays <= 25):
            output14.innerText = xRays;
            console.log('Не обнаруживается');
            break;
        case (xRays > 25 && xRays <= 50):
            output14.innerText = xRays;
            console.log('Снижение числа лимфоцитов');
            break;
        case (xRays > 50 && xRays <= 100):
            output14.innerText = xRays;
            console.log('Вялость, рвота');
            break;
        case (xRays > 100 && xRays <= 150):
            output14.innerText = xRays;
            console.log('Смертность 5%');
            break;
        case (xRays > 150 && xRays <= 350):
            output14.innerText = xRays;
            console.log('Смертность 50% за 30 суток');
            break;
        case (xRays > 350 && xRays <= 600):
            output14.innerText = xRays;
            console.log('90% смертность за 2 недели');
            break;
        default:
            console.log('Введите значение от 0 до 1000');
            break;
    }
}

//task16
const input16 = document.querySelector('#text16');
const btn16 = document.querySelector('#calc16');
const output16 = document.querySelector('#output16');

btn16.onclick = function () {
    let capacity = +input16.value;
    let cost = 0;
    switch (true) {
        case (capacity == 500):
            output16.innerText = 2525;
            input16.value = '';
            break;
        case (capacity > 500 && capacity <= 1200):
            output16.innerText = 5050;
            input16.value = '';
            break;
        case (capacity > 1200 && capacity <= 1600):
            output16.innerText = 9675;
            input16.value = '';
            break;
        case (capacity > 1600 && capacity <= 2000):
            output16.innerText = 11075;
            input16.value = '';
            break;
        default:
            alert('Введите значение от 500 до 2000');
            break;
    }
}