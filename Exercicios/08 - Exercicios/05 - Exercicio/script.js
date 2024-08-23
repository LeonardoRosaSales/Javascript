function maior() {
    let numero = Number(prompt('Digite um número inteiro qualquer: '));
    let res = document.querySelector('.res');
    let menor = numero--;
    let maior = numero + 2

    res.innerHTML = `Antes do ${menor}, temos o número ${numero} <br>Depois do ${menor}, temos o número ${maior}`
}