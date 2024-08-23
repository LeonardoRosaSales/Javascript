function clique() {
    let valor1 = Number(prompt('Primeiro valor: '));
    let valor2 = Number(prompt('Segundo valor: '));
    let calcu = Number(prompt(`Valores informados ${valor1} e ${valor2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`));
    let res = document.querySelector('.res');
    let somar = valor1 + valor2;
    let subtrair = valor1 - valor2;
    let multi = valor1 * valor2;
    let dividir = valor1 / valor2;

    if (valor1 === 0) {
        res.innerHTML = '<strong>Calculando...</strong> <br><br>OPÇÃO INVÁLIDA! Você digitou 0 e 0, mas não sei o que fazer com eles.'
    } else {
        switch (calcu) {
            case 1:
                res.innerHTML = `<strong>Calculando...</strong> <br><br>${valor1} + ${valor2} = ${somar}`;
                break;
            case 2:
                res.innerHTML = `<strong>Calculando...</strong> <br><br>${valor1} - ${valor2} = ${subtrair}`;
                break;
            case 3:
                res.innerHTML = `<strong>Calculando...</strong> <br><br>${valor1} * ${valor2} = ${multi}`;
                break;
            case 4:
                res.innerHTML = `<strong>Calculando...</strong> <br><br>${valor1} / ${valor2} = ${dividir}`;
                break;

            default:
                break;
        };
    };
};