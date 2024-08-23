function media() {
    let res = document.querySelector('.res');
    let nome = prompt('Qual é o nome do aluno? ');
    let nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}? `));
    let nota2 = Number(prompt(`Além ${nota1}, qual foi a outra nota de ${nome}? `));
    let media = (nota1 + nota2) / 2

    res.innerHTML = `Calculando a média final de <mark>${nome}.</mark> <br>As notas foram obtidas <mark>${nota1}</mark> e <mark>${nota2}.</mark> <br>A média final será <mark>${media}.</mark>`;
}