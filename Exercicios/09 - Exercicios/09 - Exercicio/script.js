function converter() {
    let cot = Number(prompt('Antes de tudo, forneça a cotação do dólar agora.').replace(",", "."));
    let real = Number(prompt('Quantos R$ você quer conveter?').replace(",", "."));
    let res = document.querySelector('.res');
    let dolar = real / cot;

    if (cot === 0) {
        alert('Digite uma cotação antes!');
    } else {
        res.innerHTML = `<strong>${real.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong> convertidos em dólar é igual a <strong>${dolar.toLocaleString('us', { style: 'currency', currency: 'USD' })}</strong>`;
    };
};