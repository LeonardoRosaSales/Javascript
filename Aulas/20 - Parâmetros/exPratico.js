function calc(total) {
    let value1 = Number(document.querySelector('#txtN1').value);
    let value2 = Number(document.querySelector('#txtN2').value);
    
    if (total === '+') {
        document.querySelector('.res').innerHTML = `A soma é igual a ${value1 + value2}`;
    }else if(total === '-'){
    document.querySelector('.res').innerHTML = `A Substração é igual a ${value1 - value2}`;
    }else if (total === '*'){
    document.querySelector('.res').innerHTML= `A Multiplicação é igual a ${value1 * value2}`;
    }else{
    document.querySelector('.res').innerHTML = `A Divisão é igual a ${value1 / value2}`;
    };
};