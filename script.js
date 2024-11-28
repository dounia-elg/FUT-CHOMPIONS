const modal = document.getElementById('player-modal');
const closeBtn = document.querySelector('.close');
const allButton = document.querySelector('.All');
const playersList = document.getElementById('players-list');

/********************JSON********************* */
fetch('players.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const players = data.players;

    /**********************SHOW PLAYERS*********************** */
    allButton.addEventListener('click', () => {
      playersList.innerHTML = ''; 
      players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.innerHTML = `
          <div style="display: grid;  grid-template-columns: repeat(3, 1fr); justify-content: center; align-items: center;">
            <div style="text-align: center; margin-bottom: 20px; border: 1px solid #ddd; padding: 10px; border-radius: 5px; background-color: gold;">
              <h3>${player.name}</h3>
              <img src="${player.photo}" alt="${player.name}" style="width: 100px; height: auto; border-radius: 5px;">
              <p><strong>Position:</strong> ${player.position}</p>
              <p><strong>Nationality:</strong> ${player.nationality} <img src="${player.flag}" alt="${player.nationality}" style="width: 20px; height: auto;"></p>
              <p><strong>Club:</strong> ${player.club} <img src="${player.logo}" alt="${player.club}" style="width: 20px; height: auto;"></p>
              <p><strong>Rating:</strong> ${player.rating}</p>
            </div>
          </div>
        `;
        playersList.appendChild(playerDiv);
      });
      modal.style.display = 'block'; //SHOW MODAL
    });
  })
  .catch(error => console.error('Error fetching players.json:', error));

/******************CLOSE MODAL********************* */
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
