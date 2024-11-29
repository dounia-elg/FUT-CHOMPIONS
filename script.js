// const { log } = require("console");

// Get the modal and close button elements
const modal = document.getElementById('playersModal');
const closeModalButton = document.getElementById('closeModal');
const playersList = document.getElementById('playersList');

// Function to show the modal
function openModal(e) {
    modal.classList.remove('hidden'); 
    modal.classList.add('flex'); 
    fetchPlayers(e); 
}

// Function to close the modal
function closeModal() {
    modal.classList.add('hidden'); 
    modal.classList.remove('flex'); 
}

// Event listener for opening the modal
document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', (e) => {
        openModal(e);
    });
});


closeModalButton.addEventListener('click', () => {
    closeModal();
});

// Function to fetch players data from the JSON file
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
                    closeModal(); // Close the modal when a player is selected
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

    // Update the clicked card with the selected player details
    clickedCardOnField.innerHTML = `
        <img src="${player.photo}" alt="${player.name}" class="w-32 h-32 object-cover rounded-full">
        <p class="mt-2">${player.name}</p>
        <p>Rating: ${player.rating}</p>
        
    `;
}


