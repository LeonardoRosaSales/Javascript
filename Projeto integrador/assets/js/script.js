function volume(num) {
    document.getElementById('volume').innerHTML = num;
}

function tempo(num) {
    document.getElementById('tempo').innerHTML = num;
}

const valor = document.querySelector('#valor'),
n1 = document.querySelector('.um'),
n2 = document.querySelector('.dez');

let number = 0;

n1.addEventListener('click', () =>{
    number += 1;
    valor.textContent = number;
})

n2.addEventListener('click', () =>{
    number += 10;
    valor.textContent = number;
})

const valor2 = document.querySelector('#valor2'),
n3 = document.querySelector('.umm'),
n4 = document.querySelector('.dezz');

let number2 = 0;

n3.addEventListener('click', () =>{
    number2 += 1;
    valor2.textContent = number2;
})

n4.addEventListener('click', () =>{
    number2 += 10;
    valor2.textContent = number2;
})

function calc() {
    
}