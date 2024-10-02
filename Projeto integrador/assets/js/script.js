// Gotas / Microgotas
function volume(num) {
    document.getElementById('volume').innerHTML = num;

}

// Horas / Minutos
function tempo(num) {
    document.getElementById('tempo').innerHTML = num;

}

// Botão do Volume
const valor = document.querySelector('#valor'),
    n1 = document.querySelector('.um'),
    n2 = document.querySelector('.dez'),
    n3 = document.querySelector('.cem');

let number = 0;

n1.addEventListener('click', () => {
    number += 1;
    valor.innerHTML = number;
})

n2.addEventListener('click', () => {
    number += 10;
    valor.innerHTML = number;
})

n3.addEventListener('click', () => {
    number += 100;
    valor.innerHTML = number;
})

// Botão do Tempo
const valor2 = document.querySelector('#valor2'),
    n4 = document.querySelector('.umm'),
    n5 = document.querySelector('.dezz');

let number2 = 0;

n4.addEventListener('click', () => {
    number2 += 1;
    valor2.innerHTML = number2;
})

n5.addEventListener('click', () => {
    number2 += 10;
    valor2.innerHTML = number2;
})

//Calcular
function calc() {
    let volumeValor = parseFloat(number);
    let tempoValor = parseFloat(number2);
    let result = document.querySelector('.result');

    let gotaValor = document.getElementById('volume').innerHTML;
    let tempoValorTexto = document.getElementById('tempo').innerHTML;

    let resultado;
    let unidade = '';

    if (gotaValor === 'Gota' && tempoValorTexto === 'Horas') {
        resultado = volumeValor / (tempoValor * 3);
        unidade = 'gotas/minuto.';
    } else if (gotaValor === 'Gota' && tempoValorTexto === 'Minutos') {
        resultado = (volumeValor * 20) / tempoValor;
        unidade = 'gotas/minuto.';
    } else if (gotaValor === 'Micro' && tempoValorTexto === 'Horas') {
        resultado = volumeValor / tempoValor;
        unidade = 'microgotas/minuto.'; 
    } else if (gotaValor === 'Micro' && tempoValorTexto === 'Minutos') {
        resultado = (volumeValor * 60) / tempoValor;
        unidade = 'microgotas/minuto.'; 
    } else {
        resultado = 'Erro: selecione as opções corretamente';
    }

    result.innerHTML = `Resultado: ${resultado.toFixed(0)} ${unidade}`;
}

// Excluir
function excluir() {
    number = 0;
    number2 = 0;

    document.querySelector('#valor').innerHTML = number;
    document.querySelector('#valor2').innerHTML = number2;
    document.getElementById('volume').innerHTML = '';
    document.getElementById('tempo').innerHTML = '';

    document.querySelector('.result').innerHTML = '';

}