function verificar() {
    let preco = Number(prompt('Qual era o preço anterior do produto?').replace(',', '.'));
    let precoAtual = Number(prompt('Qual é o preço atual do produto?').replace(',', '.'));
    let res = document.querySelector('.res');
    let media = precoAtual - preco;
    let porce = ((precoAtual - preco) / preco) * 100;


    res.innerHTML = `<strong>Analisando os valores informados...</strong> <br>O produto custava ${preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} e agora custa ${precoAtual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} <br>Hoje o produto está mais caro. <br>O preço subiu ${media.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} em relação ao preço anterior <br>Uma variação de ${porce.toFixed(1)}% pra cima 📈`;
}