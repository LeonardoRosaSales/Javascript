function calc() {
    let nome = document.querySelector('#nome').value;
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let res = document.querySelector('.res');
    let imc = weight / (height * height);

    res.innerHTML = `${nome} seu IMC é ${imc.toFixed(1)} e você está com peso ideal. Parabéns!!!`;
}