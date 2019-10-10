// Task 1.
// Напишите функцию func_1, которая присваивает p.u-1 ширину 200px. Проверьте ее работу. Допишите возможность присваивать высоту равную 100px
function func_1() {
    const p = document.querySelector('p.u-1');
    p.style.width = '200px';
    p.style.height = '100px';
}
func_1();

// Task 2.
// Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному классу через CSS зеленый цвет фона.
function func_2() {
    document.querySelector('p.u-2').classList.add('css-1');
}
func_2();

// Task 3.
// Используя цикл, добавьте на все блоки p.u-3 событие onclick. По клику запускайте функцию func_3, которая окрашивает элемент,
// на котором произошло событие в красный цвет фона. Для обращения внутри функции к такому элементу используйте this.

// (function a() {

//     const p = document.querySelectorAll('p.u-3');
//     let k = 0;
//     while (k < p.length) {
//         p[k].onclick = func_3;
//         k++;
//     }
//     function func_3() {
//         this.style.backgroundColor = 'red';
//     }

// }())

// Task 4.
// Используя цикл, добавьте на все блоки p.u-4 событие onclick. По клику запускайте функцию func_4, которая присваивает элементу,
// на котором произошло событие, класс css-2. Для обращения внутри функции к такому элементу используйте this.

// (function b() {
//     const p = document.querySelectorAll('p.u-4');
//     let k = 0;
//     while (k < p.length) {
//         p[k].onclick = func_4;
//         k++;
//     }

//     function func_4() {
//         this.classList.add('css-2');
//     }
// }())

// Task 5.
// C помощью цикла, повесьте на блоки p.u-5 функцию func_5, которая при клике будет удалять класс css-3 с элемента, на котором произошло событие.

// (function () {
//     const p = document.querySelectorAll('p.u-5');
//     let k = 0;
//     while (k < p.length) {
//         p[k].onclick = func_5;
//         k++;
//     }

//     function func_5() {
//         this.classList.remove('css-3');
//     }

// }())

// Task 6.
// Есть кнопка .u-6. Напишите функцию, которая при клике делает toggle классу .active для данной кнопки.

// (function func_6() {
//     document.querySelector('.u-6').onclick = function () {
//         this.classList.toggle('active');
//     }
// }())

// Task 7.
// Напишите функцию func-7, которая будучи запущенной возвращает количество элементов с классом css-3.

// function func_7() {
//     const el = document.querySelectorAll('.css-3');
//     console.log(el.length);
// }
// func_7();

// Task 8.
// Напишите функцию func-8, которая будучи запущенной, присваивает всем элементам p.u-1 атрибут title со значением test-data.

function func_8() {
    const el = document.querySelectorAll('p.u-1');

    for (let i = 0; i < el.length; i++) {
        el[i].setAttribute('title', 'test-data');
        console.log(el[i]);
    }
}
// func_8();

// Task 9.
// С помощью цикла получите кнопки .u-9. Добавьте на них событие onclick которое запускает функцию func-9. Функция возращает data атрибут элемента, по которому кликнули.
function func_9() {

}

// Task 10.
// Напишите функцию func-10, которая при клике на кнопке .u-10__button читает атрибут валюты data-currency и на основании этого выводит в p.u-10__out коэффициент данной валюты по отношению к доллару. Коэффициент возьмите приблизительно из интернета. Считается, что пользователь всегда вводит валюту в долларах.
function func_10() {

}