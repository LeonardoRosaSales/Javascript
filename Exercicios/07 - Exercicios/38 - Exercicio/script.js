var n1 = parseInt(prompt('Digite um número: '));
document.write('Contagem: ');
for(c = 0; c <= n1; c++){
    if(c >= 0 ){
        document.write(c + ', ');
    }else{
        document.write(c + '.');
    };
};
document.write('FIM!');