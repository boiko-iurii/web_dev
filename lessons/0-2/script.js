let cl = (a) => console.log(a);
let ci = (a) => console.info(a);

let inputIn = document.querySelector('input');

let btn = document.querySelector('#btn');
let output = document.getElementById('output');


let arr = [2, 3, 5, 66, 8, 77, 15];
// arr.length = -10;


btn.onclick = function () {
    let inputInValue = +inputIn.value;

    function elementAvailability(arr, b) {
        if (arr.indexOf(b) !== -1) {
            cl('есть');
        } else {
            cl('no');
        }
    }

    elementAvailability(arr, inputInValue);

    cl(Date())


}