function conveter() {
    let n1 = Number(prompt('Digite uma temperatura em °C(Celsius)'));
    let res = document.querySelector('.res');
    let kelvin = n1 + 273.15;
    let fahrenheit = (n1 * 1.8) + 32;

    if (n1 === 0) {
        res.innerHTML = 'Digite um valor para converter!';
    } else {
        res.innerHTML = `<h1>A temperatura ${n1}°C, corresponde a... </h1><br>${kelvin}°K (Kelvin) <br>${fahrenheit}°F (Fahrenheit)`;
    };
};