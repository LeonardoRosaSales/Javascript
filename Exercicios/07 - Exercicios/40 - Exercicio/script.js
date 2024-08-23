var soma = 0,
    media,
    div = 0,
    pares = 0,
    n1 = 0;

for (c = 1; c <= 5; c++) {
    var numero = parseInt(prompt('Digite o ' + c + ' número: '));
    soma += numero;
    if (numero % 5 === 0) {
        div++;
    };

    if (numero % 2 === 0) {
        pares += numero;
        n1++;
    };
};
media = soma / 5;

document.write('Soma de todos os valores: ' + soma + '<br>');
document.write('Média de todos os valores: ' + media + '<br>');
document.write('Quantidade de valores divisíveis por 5: ' + div + '<br>');
document.write('Soma de todos os valores pares: ' + pares);