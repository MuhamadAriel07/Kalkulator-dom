let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let result = document.getElementById('result');
let operator = '';

function setOperator(obj) {
    if (input1.value != '' && input2.value != '') {
        operator = obj.innerHTML;
        calculate();
    }
}

function calculate() {
    let val1 = parseFloat(input1.value);
    let val2 = parseFloat(input2.value);

    switch (operator) {
        case '+':
        result.innerHTML = val1 + val2;
        break;
        case '-':
        result.innerHTML = val1 - val2;
        break;
        case '*':
        result.innerHTML = val1 * val2;
        break;
        case '/':
        result.innerHTML = val1 / val2;
        break;
        default:
        result.innerHTML = '';
    }
}

function reset() {
    input1.value = '';
    input2.value = '';
    result.innerHTML = '';
    operator = null;
}
