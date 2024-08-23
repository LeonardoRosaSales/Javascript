// function mostrarArea(l, a) {
//     let width = Number(document.querySelector('#width').value);
//     let height = Number(document.querySelector('#height').value);
//     let resolut = document.querySelector('.res');

//     // let area = width* height;

//     let area = l * a

//     resolut.innerHTML = `A área é igual a ${area} M<sup>2</sup>`;
// };

function mostrarArea(l, a) {
    let resolut = document.querySelector('.res');
    let area = l * a

    resolut.innerHTML = `A área é igual a ${area} M<sup>2</sup>`;
}
