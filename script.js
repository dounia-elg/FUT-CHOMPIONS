
const newPlayer = [];

const modal = document.getElementById('playersModal');
const closeModalButton = document.getElementById('closeModal');
const playersList = document.getElementById('playersList');
const removePlayer = document.getElementById("removePlayer");


function openModal(e,position) {
    modal.classList.remove('hidden'); 
    modal.classList.add('flex'); 

    removePlayer.addEventListener("click",()=>{
      let content1;
      selectPlayer(content1,e);
      modal.classList.add('hidden'); 
    modal.classList.remove('flex'); 
    })
    
    fetchPlayers(e, position); 
}


function closeModal() {
    modal.classList.add('hidden'); 
    modal.classList.remove('flex'); 
}

document.querySelectorAll('.player-card').forEach((button,index) => {
    button.addEventListener('click', (e) => {
      let position;
      if(index === 0){
        position = "GK";
      }else if(index === 1){
        position = "LB";
      }else if(index === 2){
        position = "CB";
      }else if(index === 3){
        position = "CB";
      }else if(index === 4){
        position = "RB";
      }else if(index === 5){
        position = "LM";
      }else if(index === 6){
        position = "CM";
      }else if(index === 7){
        position = "CM";
      }else if(index === 8){
        position = "RM";
      }else if(index === 9){
        position = "ST";
      }else if(index === 10){
        position = "ST";
      }
        openModal(e,position);
    });
});

closeModalButton.addEventListener('click', () => {
    closeModal();
});


function fetchPlayers(e,getPosition) {

    fetch('players.json')
        .then(response => response.json())
        .then(function(data){

            const players = data.players; 
            playersList.innerHTML = ''; 

            players.forEach(function(player) {


              if(getPosition){
                if(player.position == getPosition){
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
                }
              }else{
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
                
              }
              



              
            });

            newPlayer.forEach(function(item) {

              if(getPosition){
                if(item.position == getPosition){
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
                }
              }else{
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
              
              }
              

              
          });

          



            
        })
        .catch(error => {
            console.error('Error fetching players:', error);
        });
}


function removePlayers(element){
  let getElement = element.target;
  getElement.innerHTML = ``;
}


function selectPlayer(player, event) {
  
 
  const clickedCardOnField = event.target.closest('.player-card');

    

  if(!player){
    clickedCardOnField.innerHTML = `<button class="plus">+</button>  `;
  }else{

    clickedCardOnField.innerHTML = `
    <img src="${player.photo}" alt="${player.name}" class="w-16 h-16 mt-4">
    <p class="mt-2 text-[8px]">${player.name}</p>
    <p class=" text-sm ">${player.rating}</p>
    
`;
  }
    
    
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

  
    playerForm.reset();
    closePlayerForm();
    console.log(newPlayer);

  } else {
    playerForm.reportValidity();  
  }
});












  





  