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

  // Define the event listener callback separately so it can be removed
  function handleClick(e) {
    const boxClicked = e.target;
    if (turn) {
      playing = players.player2;
      turn = false;
    } else {
      playing = players.player1;
      turn = true;
    }   
    boxClicked.textContent = playing;

    // Remove the event listener from the clicked box
    boxClicked.removeEventListener("click", handleClick);
  }

  // Add the event listener with the named function
  gameBoardElement.addEventListener('click', handleClick);
}

function updateTheGameBoardObj(turns){

}