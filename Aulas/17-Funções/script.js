var output = document.querySelector('.output');
var mensagem = "";

function criarTabuada() {
    // alert('Função criarTabuada() está funcionando');

    limparTabuada();
    var n = parseFloat(prompt('Digite um número: '));
    var i = 1;

    while(i <= 10){
        mensagem += `${n} x ${i} = ${n * i} <br>`;
        i++;
    };

    output.innerHTML = mensagem;
};

function limparTabuada(){
    mensagem = "";
    output.innerHTML = mensagem;
};