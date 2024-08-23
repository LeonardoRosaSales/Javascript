function calcVel() {
    let inputNumber = Number(document.querySelector('#txtvel').value);
    let result = document.querySelector('.res');

    result.innerHTML += `<p> Sua velocidade é ${inputNumber} Km/h </p>`

    if (inputNumber > 60) {
        result.innerHTML += `<p> Você está <strong> Multado </strong> por excesso de velocidade. </p>`;
    } else {
        result.innerHTML += `<p> Parabéns! Continue dirigindo com responsabilidade </p>`;
    };

    result.innerHTML += '<p> Dirija sempre com responsabilidade';
};
