function soma(){
    var n1 = Number(prompt('Digite um número: '));
    var dobro = n1 * 2;
    var div = n1 / 2;
    var res = document.querySelector('.resu');

    res.innerHTML = `o dobro de ${n1} é ${dobro} e a metade é ${div}!`;
};