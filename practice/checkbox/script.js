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