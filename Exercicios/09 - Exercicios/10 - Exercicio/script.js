function desc() {
    let produto = prompt('Qual o nome do produto que você está comprando?');
    let preco = Number(prompt(`Qual preço do(a) ${produto}?`).replace(',', '.'));
    let res = document.querySelector('.res');
    let desc = (preco * 10) / 100;
    let precoFinal = preco - desc;

    if (preco === 0) {
        alert('Digite um preço');
    } else {
        res.innerHTML = `<strong>Calculando o desconto de 10% para ${produto}</strong> <br>O preço original era <strong>${preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong> <br>Você acaba de ganhar <strong>${desc.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong> de desconto <strong>(-10%)</strong> <br>No fim, você vai pagar <strong>${precoFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong> no produto <strong>${produto}!</strong>`;
    };
};