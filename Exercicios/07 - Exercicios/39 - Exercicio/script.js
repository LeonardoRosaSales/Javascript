var n1 = 0,
    n2 = 1,
    n3 = 0,
    resultado = "";

resultado += n1 + " " + n2;
for(var c = 1; c <= 15; c++){
    n3 = n1 + n2;
    resultado += " " + n3;
    n1 = n2;
    n2 = n3;
};
document.write(resultado);