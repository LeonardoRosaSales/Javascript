function start() {
    let n2 = Number(prompt('Digite um número: '));

    let buttonStart = document.querySelector('.buttonStart');

    buttonStart.remove();

    if (isNaN(n2)) {
        alert('[ERRO] Digite um Número');
        return write(0);
    }else{
        return write(n2);
    };
};

function write(message) {
    let output = document.querySelector('.output').innerHTML = message;
};

function startCalc(symbol) {
    let n1 = Number(document.querySelector('.output').textContent);
    let n2 = Number(prompt('Digite outro número: '));

    let result = calc(symbol, n1, n2);
    write(result);
};

function calc(symbol, n1, n2) {

    if (isNaN(n1) || isNaN(n2)) {
        alert("[ERRO] Digite somente Números");
        return numberCalc;
        // throw new Error('[ERRO] Digite somente Números');
    };

    let numberCalc = null;
    switch (symbol) {
        case '+':
            numberCalc = n1 + n2;
            break;
        case '-':
            numberCalc = n1 - n2;
            break;
        case '*':
            numberCalc = n1 * n2;
            break;
        case '/':
            numberCalc = n1 / n2;
            break;
    };
    return numberCalc;
};

