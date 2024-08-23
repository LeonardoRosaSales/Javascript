function addPlayer() {
    let position = document.querySelector('#position').value;   
    let name = document.querySelector('#name').value;   
    let number = document.querySelector('#number').value;   

    let confirmation = confirm(`Escalar ${name} como ${position}?`);

    if (confirmation) { // ou if(confimation === true)
        let teamList = document.querySelector('#team-list');
        let playerItem = document.createElement('li');

        playerItem.id = 'player-' + number;
        
        playerItem.innerHTML = `${position}: ${name} (${number})`

        teamList.appendChild(playerItem);
        document.querySelector('#position').value = '';
        document.querySelector('#name').value = '';
        document.querySelector('#number').value = '';
    }
}

function removePlayer() {
    let number = document.querySelector('#numberToRemove').value;
    let playerToRemove = document.querySelector('#player-' + number);

    let confimation = confirm(`Remover o jogador ${playerToRemove.innerText}?`);

    if (confimation) {
        // document.querySelector('#team-list').removeChild(playerToRemove);
        playerToRemove.remove();
        document.querySelector('#numberToRemove').value = '';
    }
}