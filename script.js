


const newPlayer = [];

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

document.querySelectorAll('.player-card').forEach(button => {
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
        .then(function(data){

            const players = data.players; 
            playersList.innerHTML = ''; 

            players.forEach(function(player) {
              const playerCard = document.createElement('div');

                playerCard.classList.add('player-card2');
                playerCard.innerHTML = `
                    <p class=" mt-7 ml-4 text-sm font-bold name">${player.name}</p>
                    <img src="${player.photo}" alt="${player.name}" class="w-28 h-28 ml-4 ">
                    <p class="text-gray-700 ml-4">Rating: ${player.rating}</p>
                    <p class="text-gray-700 ml-4"Position> ${player.position}</p>
                    <p class="text-gray-700 ml-4 text-sm mb-2"Club> ${player.club}</p>
                `;

                playerCard.addEventListener('click', () => {
                    selectPlayer(player,e);
                    closeModal(); 
                    
                });

                playersList.appendChild(playerCard);
            });

            newPlayer.forEach(function(item) {
              const playerTest = document.createElement('div');

              playerTest.classList.add('player-card2');
              playerTest.innerHTML = `
                  <p class=" mt-7 ml-4 text-sm font-bold name">${item.name}</p>
                  <img src="${item.photo}" alt="${item.name}" class="w-28 h-28 ml-4 ">
                  <p class="text-gray-700 ml-4">Rating: ${item.rating}</p>
                  <p class="text-gray-700 ml-4"Position> ${item.position}</p>
                  <p class="text-gray-700 ml-4 text-sm mb-2"Club> ${item.club}</p>
              `;

              playerTest.addEventListener('click', () => {
                  selectPlayer(item,e);
                  closeModal(); 
                  
              });

              playersList.appendChild(playerTest);
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
        <img src="${player.photo}" alt="${player.name}" class="w-16 h-16 mt-4">
        <p class="mt-2 text-[8px]">${player.name}</p>
        <p class=" text-sm ">${player.rating}</p>
        
    `;
}



/******************************Player Form Modal********************************** */

const playerForm = document.getElementById('playerForm');
const playerFormModal = document.getElementById('playerFormModal');
  

function openPlayerForm() {
  playerFormModal.classList.remove('hidden');
  playerFormModal.classList.add('flex');  
}


function closePlayerForm() {
  playerFormModal.classList.add('hidden');
  playerFormModal.classList.remove('flex'); 
}

document.getElementById('addPlayer').addEventListener('click', openPlayerForm);
document.getElementById('cancelForm').addEventListener('click', closePlayerForm);

playerForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  if (playerForm.checkValidity()) {
     const getPlayer = {
      image: document.getElementById('playerImage').value,
      name: document.getElementById('playerName').value,
      rating: document.getElementById('playerRating').value,
      position: document.getElementById('playerPosition').value,
      club: document.getElementById('playerClub').value,
    };
    
    newPlayer.push(getPlayer);

    console.log('New Player Details:', getPlayer); 

    // addPlayerToModal(getPlayer);

    playerForm.reset();
    closePlayerForm();
    console.log(newPlayer);

  } else {
    playerForm.reportValidity();  
  }
});


function addNewPlayerCard(newPlayerDetails) {
    const playersList = document.querySelector('#playerslist');
  
    const playerCard = `
      <div class="player-card2">
        <p class=" mt-7 ml-4 text-sm font-bold name">${player.name}</p>
        <img src="${player.photo}" alt="${player.name}" class="w-28 h-28 ml-4 ">
        <p class="text-gray-700 ml-4">Rating: ${player.rating}</p>
        <p class="text-gray-700 ml-4"Position> ${player.position}</p>
        <p class="text-gray-700 ml-4 text-sm mb-2"Club> ${player.club}</p>
      </div>
    `;
  
    playersList.innerHTML += playerCard;
  
  }
  
  addNewPlayerCard(newPlayerDetails);












  





  