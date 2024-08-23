function clique() {
    let res = document.querySelector('.res');
    let now = new Date();
    let fuso = now.toString().replace(/\(GMT-03:00\)/g, '(Horário Padrão de Brasília)');

    res.innerHTML = `O que eu recebi do sistema foi <mark>${fuso}</mark>`;
}