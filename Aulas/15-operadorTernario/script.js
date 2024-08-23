// var idade = parseFloat(prompt('Digite sua idade: '));

// // var idade = 18;

// // if(idade >= 18){
// //     document.write('Adulto');
// // }else{
// //     document.write('Menor de idade');
// // };

// // '?' == { == então
// //  ':'== else == se não

// // var result = idade >= 18 ? 'Adulto' : 'Menor de idade' 
// // document.write(result)

// idade >= 18 ? document.write('Adulto') : document.write('Menor de idade');

// var temperatura = 30
// var clima = temperatura >= 30 
//     ? 'Quente' 
//     : 'frio'
// document.write(`A temperatura hoje está ${clima}`);

// var n1 = parseFloat(prompt('Digite um número: ')),
//     n2 = parseFloat(prompt('Digite outro número: '));
    
// var maiorNumero = n1 > n2 ? n1 : n2
// document.write(`O maior número é ${maiorNumero}`)

var nota1 = parseFloat(prompt('Nota 1: ')),
    nota2 = parseFloat(prompt('Nota 2: ')),
    nota3 = parseFloat(prompt('Nota 3: ')),
    nota4 = parseFloat(prompt('Nota 4: ')),
    media = (nota1 + nota2 + nota3 + nota4) / 4;

var resultado =
    media >= 9 ? 'A':
        media >= 8 ? 'B':
            media >= 7 ? 'C':
                media >= 6 ? 'D':
                    'F';

document.write(`Aproveitamento: ${resultado}`);