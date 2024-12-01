
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
                    <img src="${player.photo}" alt="${player.name}" class="w-24 h-24 object-cover rounded-full">
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

const playerForm = document.getElementById('playerForm');
const playerFormModal = document.getElementById('playerFormModal');
  

function openPlayerForm() {
  console.log("Opening player form modal...");
  playerFormModal.classList.remove('hidden');
  playerFormModal.classList.add('flex');  // Ensure modal is visible
}


function closePlayerForm() {
  console.log("Closing player form modal...");
  playerFormModal.classList.add('hidden');
  playerFormModal.classList.remove('flex'); 
}

document.getElementById('addPlayer').addEventListener('click', openPlayerForm);
document.getElementById('cancelForm').addEventListener('click', closePlayerForm);

playerForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  if (playerForm.checkValidity()) {
    const newPlayer = {
      image: document.getElementById('playerImage').value,
      name: document.getElementById('playerName').value,
      rating: document.getElementById('playerRating').value,
      position: document.getElementById('playerPosition').value,
      club: document.getElementById('playerClub').value,
    };

    console.log('New Player Details:', newPlayer); 

    addPlayerToModal(newPlayer);

    playerForm.reset();
    closePlayerForm();
  } else {
    playerForm.reportValidity();  
  }
});


function addPlayerToModal(player) {
    console.log("Adding new player card to the modal...");
  
    if (playersList) {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card2'); 
  
      playerCard.innerHTML = `
        <img src="${player.image}" alt="${player.name}" class="w-32 h-32 object-cover rounded-full ">
        <p class="mt-2">${player.name}</p>
        <p>Rating: ${player.rating}</p>
        <p>Position: ${player.position}</p>
        <p>Club: ${player.club}</p>
      `;
  
      console.log('Current players list:', playersList.innerHTML);
      
      playersList.appendChild(playerCard);
  
      playersList.offsetHeight; 

      console.log("Player card added to the modal");
  
      console.log('Updated players list:', playersList.innerHTML);
    } else {
      console.error('playersList is not found!');
    }
  }


function addNewPlayerCard(newPlayerDetails) {
    const playersList = document.querySelector('#playerslist');
  
    if (!playersList) {
      console.error('Player list container not found!');
      return;
    }
  
    const playerCard = `
      <div class="player-card2">
        <img src="${newPlayerDetails.image}" alt="${newPlayerDetails.name}" class="w-32 h-32 object-cover rounded-full">
        <p class="mt-2">${newPlayerDetails.name}</p>
        <p>Rating: ${newPlayerDetails.rating}</p>
        <p>Position: ${newPlayerDetails.position}</p>
        <p>Club: ${newPlayerDetails.club}</p>
      </div>
    `;
  
    playersList.innerHTML += playerCard;
  
    console.log('New player card added to the player list');
  }
  
  
  // Call the function to add the new player card to the player list
  addNewPlayerCard(newPlayerDetails);
