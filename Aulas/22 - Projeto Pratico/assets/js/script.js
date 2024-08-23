function verify() {
    let date = new Date();
    let year = date.getFullYear();
    let txtYear = Number(document.querySelector('#txtAno').value);
    let typeGen = document.getElementsByName('radGen');
    let result = document.querySelector('#res');

    if (txtYear == '' || txtYear > year) {
        alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        let age = year - txtYear;

        let img = document.createElement('img');
        img.setAttribute('id', 'photo');

        if (typeGen[0].checked) {
            if (age >= 0 && age < 16) {
                result.innerHTML = `Você tem ${age} anos, aguarde completar 16 anos`;

                img.setAttribute('src', 'assets/img/bebe-homem.png');
                img.style.borderRadius = '50%';
                img.style.width = '420px';
            } else if (age >= 16 && age < 18) {
                result.innerHTML = `Você tem ${age} anos, seu voto é facultativo.`;

                img.setAttribute('src', 'assets/img/jovem-homem.png');
                img.style.borderRadius = '50%';
                img.style.width = '420px';
            } else if (age >= 18 && age < 70) {
                result.innerHTML = `Você tem ${age} anos, seu voto é obrigatório.`;

                img.setAttribute('src', 'assets/img/adulto-homem.jpg');
                img.style.borderRadius = '50%';
                img.style.width = '420px';
            } else {
                result.innerHTML = `Você tem ${age} anos, seu voto é facultativo.`;

                img.setAttribute('src', 'assets/img/idoso-homem.jpeg');
                img.style.borderRadius = '50%';
                img.style.width = '420px';
            };
        } else if (typeGen[1].checked) {
            if (age >= 0 && age < 16) {
                result.innerHTML = `Você tem ${age} anos, aguarde completar 16 anos`;

                img.setAttribute('src', 'assets/img/bebe-mulher.png');
                img.style.borderRadius = '50%';
                img.style.width = '420px';
            } else if (age >= 16 && age < 18) {
                result.innerHTML = `Você tem ${age} anos, seu voto é facultativo.`;

                img.setAttribute('src', 'assets/img/jovem-mulher.png');
                img.style.borderRadius = '50%';
                img.style.width = '420px';
            } else if (age >= 18 && age < 70) {
                result.innerHTML = `Você tem ${age} anos, seu voto é obrigatório.`;

                img.setAttribute('src', 'assets/img/adulto-mulher.jpeg');
                img.style.borderRadius = '50%';
                img.style.width = '420px';
            } else {
                result.innerHTML = `Você tem ${age} anos, seu voto é facultativo.`;

                img.setAttribute('src', 'assets/img/idoso-mulher.jpeg');
                img.style.borderRadius = '50%';
                img.style.width = '420px';
            };
        };

        result.appendChild(img);
        result.style.textAlign = 'center';
    };
};