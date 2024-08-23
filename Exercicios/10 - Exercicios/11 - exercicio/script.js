function bissexto() {
    let ano = Number(prompt('Qual é o ano que você quer verificar?'));
    let res = document.querySelector('.res');

    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        res.innerHTML = `O ano de ${ano} <strong>é bissexto</strong>`;
    } else {
        res.innerHTML = `O ano de ${ano} <strong>não é bissexto</strong>`;
    };
};