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
}

function createGameBoard(){
  for(let i = 0; i < 9; i++){
    const div = document.createElement('div');
    div.setAttribute('data-id',i);
    gameBoardElement.appendChild(div);
  }
}

function gameBoardBoxClicked(){
  gameBoardElement.addEventListener('click', (e) => {
    console.log(e.target);
  })
}