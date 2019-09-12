let checkbox = document.querySelectorAll('.input');

checkbox.forEach(function (element) {
    element.onclick = checkFunc;

})

function checkFunc() {
    if (this.checked) {
        console.log('1');
    }
    else {
        console.log('0')
    }
    console.log(this);
}

document.querySelector('input[type="date"]').oninput = function () {
    console.log(this.value);
}

function bodyClass() {
    document.querySelector('body').classList.add('my-class');
    console.log('class was add...')
}

document.documentElement.onclick = function () {
    let test = function () {
        document.querySelector('body').classList.add('test');
    };
    bodyClass(test);
}