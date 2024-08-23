// for
/* 
    "for"- para
*/
var c = 1;

while(c <= 10){
    document.write(c + '<br>');
    c++
};

var inc = 1

do{
    document.write(inc + '<br>')
    inc++
}while(inc <= 10)

// Inicialização 
// Teste Lógico
// Incremento

for(c = 1; c<= 10; c++){
    document.write(c + '<br>')
}

var num = parseFloat(prompt('Digite um número: '));

for(c = 1; c <= 1000; c++){
    document.write(`${num} x ${c} = ${num * c} <br>`)

    if(c % 10 == 0){
        document.write('<hr>')
    }
}

var anoInicial = parseInt(prompt('Digite o ano inicial: '));
var anoFinal = parseInt(prompt('Digite o ano final: '));

for(c = anoInicial; c <= anoFinal; c++){
    if(c % 4 == 0 && c % 100 != 0 || c % 400 == 0){
        document.write(c + ' é um ano BISSEXTO!! <br>');
    }else{
        document.write(c + '<br>');
    }
}