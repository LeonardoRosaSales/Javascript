// function sendHour() {
//     let hour = Number(document.querySelector('#hour').value);
//     let res = document.querySelector('.res');

//     if (hour < 12) {
//         res.innerHTML = 'Bom dia!'; 
//     }else if (hour >= 12 && hour <= 18) {
//         res.innerHTML = 'Boa Tarde!';
//     }else{
//         res.innerHTML = 'Boa Noite!';
//     };
// };

function sendHour() {
    let now = new Date(); //Construtor de Objetos
    let res = document.querySelector('.res');
    // res.innerHTML = now;
    let hour = now.getHours();
    let min = now.getMinutes();
    let mil = now.getSeconds();

    res.innerHTML = `Agora são exatamente ${hour}:${min}:${mil} horas!`;
}