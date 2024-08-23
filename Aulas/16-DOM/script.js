// document.write('Testando... <br>');
// document.write(document.characterSet + '<br>');
// document.write(navigator.userAgent + '<br>');
// document.write(document.URL);

// Tag
var paragrafo = document.getElementsByTagName('p')[0];
document.write(paragrafo.innerText); //Replica
paragrafo.innerHTML = 'Aqui está escrito assim: ' + paragrafo.innerText; //Substitui
paragrafo.style.color = 'blue';

var corpo = document.body;
corpo.style.background = 'black';
corpo.style.color = 'white';

// ID
var teste = document.getElementById('teste');
teste.style.background = 'green';
teste.innerText = 'Estou aguardando...';

// Name
var teste2 = document.getElementsByName('teste2')[0];
teste2.style.color = 'blue';

// Class
var teste3 = document.getElementsByClassName('teste3')[0];
teste3.style.color = 'yellow';

// Selector
var teste4 = document.querySelector('.teste3')
teste4.style.background = 'gray'

var teste5 = document.querySelector('#teste')
teste5.style.color = 'pink'