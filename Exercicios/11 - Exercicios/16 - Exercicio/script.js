function calc() {
    let anoNasc = Number(prompt('Em que ano você nasceu?'));
    let res = document.querySelector('.res');
    let anoAtual = 2023;
    let idade = anoAtual - anoNasc;

    res.innerHTML = `Quem nasceu em ${anoNasc} vai completar <strong>${idade}</strong> em ${anoAtual}.`;
}