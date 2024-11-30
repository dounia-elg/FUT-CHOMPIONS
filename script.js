
const modal = document.getElementById('playersModal');
const closeModalButton = document.getElementById('closeModal');
const playersList = document.getElementById('playersList');


function openModal(e) {
    modal.classList.remove('hidden'); 
    modal.classList.add('flex'); 
    fetchPlayers(e); 
}


function closeModal() {
    modal.classList.add('hidden'); 
    modal.classList.remove('flex'); 
}


document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', (e) => {
        openModal(e);
    });
});


closeModalButton.addEventListener('click', () => {
    closeModal();
});


function fetchPlayers(e) {

    
    fetch('players.json')
        .then(response => response.json())
        .then(data => {
            const players = data.players; 
            playersList.innerHTML = ''; 
            players.forEach(player => {
                const playerCard = document.createElement('div');
                playerCard.classList.add('player-card2');
                playerCard.innerHTML = `
                    <img src="${player.photo}" alt="${player.name}" class="w-32 h-32 object-cover rounded-full">
                    <p class="mt-2 name">${player.name}</p>
                    <p>Rating: ${player.rating}</p>
                    <p>Position: ${player.position}</p>
                    <p>Club: ${player.club}</p>
                `;

                playerCard.addEventListener('click', () => {
                    selectPlayer(player,e);
                    closeModal(); 
                    
                });

                playersList.appendChild(playerCard);
            });
        })
        .catch(error => {
            console.error('Error fetching players:', error);
        });
}


function selectPlayer(player, event) {
    console.log('Selected player:', player);

    
    const clickedCardOnField = event.target.closest('.player-card');
    console.log('Clicked card:', clickedCardOnField);

    
    
    clickedCardOnField.innerHTML = `
        <img src="${player.photo}" alt="${player.name}" class="w-32 h-32 object-cover rounded-full">
        <p class="mt-2">${player.name}</p>
        <p>Rating: ${player.rating}</p>
        
    `;
}



/******************************Player Form Modal********************************** */

const addPlayerButton = document.getElementById('addPlayer');
const playerFormModal = document.getElementById('playerFormModal');
const cancelFormButton = document.getElementById('cancelForm');
const playerForm = document.getElementById('playerForm');

function openPlayerForm() {
  playerFormModal.classList.remove('hidden');
}

function closePlayerForm() {
  playerFormModal.classList.add('hidden');
}

addPlayerButton.addEventListener('click', openPlayerForm);
cancelFormButton.addEventListener('click', closePlayerForm);

playerForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const newPlayer = {
    image: document.getElementById('playerImage').value,
    name: document.getElementById('playerName').value,
    rating: document.getElementById('playerRating').value,
    position: document.getElementById('playerPosition').value,
    club: document.getElementById('playerClub').value,
  };

  console.log('New Player:', newPlayer);

  playerForm.reset();

  closePlayerForm();

});



