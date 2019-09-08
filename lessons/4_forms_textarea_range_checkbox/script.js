let pass = document.querySelector('#pass');
let btn1 = document.querySelector('#go-1');
let output1 = document.querySelector('#output-1');

let color = document.querySelector('#col');
let btn2 = document.querySelector('#set');
let setColor = document.querySelector('.set-color');
let output2 = document.querySelector('#output-2');


btn1.onclick = () => {
    output1.innerText = pass.value;
}



btn2.onclick = () => {
    setColor.style.backgroundColor = color.value;
    output2.innerText = color.value;
}

