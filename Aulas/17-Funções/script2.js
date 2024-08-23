function somar(){
    // var tn1 = document.querySelector('#txtn1');
    var tn1 = Number(document.querySelector('#txtn1').value);
    // var tn2 = document.getElementById('txtn2');
    var tn2 = parseFloat(document.querySelector('#txtn2').value);
    var res = document.querySelector('.res');

    // var n1 = Number(tn1.value);
    // var n2 = Number(tn2.value);

    // var s = n1 + n2;
    var s = tn1 + tn2;

    res.innerHTML = `A soma entre ${tn1} e ${tn2} é igual a ${s}.`;
};