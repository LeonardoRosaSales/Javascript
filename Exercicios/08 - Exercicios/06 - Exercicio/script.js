function calcu() {
    let product = prompt('Que produto está comprando: ');
    let valor = Number(prompt(`Quanto custa o ${product} que está comprando: `));
    let valor2 = Number(prompt(`Qual foi o valor que você deu pra pagar o ${product}? `));
    let res = valor2 - valor;

    alert(`Você comprou ${product} que custou ${valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}. \nDeu ${valor2.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} em dinheiro e vai receber ${res.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} de troco, Volte sempre!!`);
}