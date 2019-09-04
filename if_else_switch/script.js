const inputIn = document.querySelector('#inputIn');
const btn = document.querySelector('button');


btn.addEventListener('click', () => {
    let inputInVal = inputIn.value;
    let age = +inputInVal;

    if (age <= 16) {
        console.log('to 16');
    }
    else if (age <= 21) {
        console.log('from 17 to 21');
    }
    else if (age <= 25) {
        console.log('from 22 to 25');
    }
    else {
        console.log(' > 25');
    }

    console.log('1');

})

btn.addEventListener('click', () => {

    let inputInVal = inputIn.value;
    let age = +inputInVal;

    switch (true) {
        case (age <= 16):
            console.log('to 16');
            break;
        case (age <= 21):
            console.log('to 21');
            break;
        case (age <= 25):
            console.log('to 25');
            break;
        default:
            console.log(' > 25');
            break;
    }

    console.log('2');
})


let b = '4';

console.log(b > '3');