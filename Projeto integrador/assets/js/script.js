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
    valor.textContent = number;
})

n2.addEventListener('click', () => {
    number += 10;
    valor.textContent = number;
})

n3.addEventListener('click', () => {
    number += 100;
    valor.textContent = number;
})

// Botão do Tempo
const valor2 = document.querySelector('#valor2'),
    n4 = document.querySelector('.umm'),
    n5 = document.querySelector('.dezz');

let number2 = 0;

n4.addEventListener('click', () => {
    number2 += 1;
    valor2.textContent = number2;
})

n5.addEventListener('click', () => {
    number2 += 10;
    valor2.textContent = number2;
})

// Calcular
function calc() {
    let volumeValue = number;
    let tempoValue = number2;
    let result = document.querySelector('.result');
    let gota = document.querySelector('.gota');
    let microgota = document.querySelector('.microgota');
    let hora = document.querySelector('.horas');
    let min = document.querySelector('.min');

    let resultado;

    if (gota === 'Gota' && hora === 'Horas') {
        resultado = volumeValue / (tempoValue * 3);
    } else if (gota === 'Gota' && min === 'Minutos') {
        resultado = (volumeValue * 20) / tempoValue;
    }

    if (microgota === 'Micro' && hora === 'Horas') {
        resultado = volumeValue / tempoValue;
    } else if (microgota === 'Micro' && min === 'Minutos') {
        resultado = (volumeValue * 60) / tempoValue;
    }

    result.textContent = `Resultado: ${resultado}`;
}