function media() {
    let nome = prompt('Qual é o nome do aluno? ');
    let nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`));
    let nota2 = Number(prompt(`Além do ${nota1}, qual foi a outra nota de ${nome}?`));
    let media = (nota1 + nota2) / 2;
    let resultado = 
    media >= 6 ? 'Meus Parabéns!!':
        'Estude um pouco mais!!';

    let res = document.querySelector('.res');

    res.innerHTML = `Calculando a média final de <mark>${nome}</mark>. <br>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>. <br>A média final será <mark>${media}</mark> <br>A mensagem que temos é: <font color='red'> ${resultado} </font>`;
}