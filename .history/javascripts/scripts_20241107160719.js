const gameBoardElement = document.querySelector('.gameboard');

const gameBoard = {
  gameBoard : ['','','','','','','','','']
}
const players = {
  player1: 'X',
  player2: 'O',
}

startGame();

function startGame(){
  createGameBoard();
  gameBoardBoxClicked();
}

function createGameBoard(){
  for(let i = 0; i < 9; i++){
    const div = document.createElement('div');
    div.setAttribute('data-id',i);
    gameBoardElement.appendChild(div);
  }
}

function gameBoardBoxClicked(){
  let playing = '';
  let turn = false;
  gameBoardElement.addEventListener('click', (e) => {
    const boxClicked = e.target;
   // Check if box has already been clicked
   if (boxClicked.getAttribute('data-clicked') === 'true') {
    return; // Exit the function if already clicked
  }

  // Set playing value based on turn
  if (turn) {
    playing = players.player2;
    turn = false;
  } else {
    playing = players.player1;
    turn = true;
  }
  
  boxClicked.textContent = playing;

  // Mark the box as clicked by setting data-clicked to true
  boxClicked.setAttribute('data-clicked', 'true');
});
}

function updateTheGameBoardObj(turns){

}