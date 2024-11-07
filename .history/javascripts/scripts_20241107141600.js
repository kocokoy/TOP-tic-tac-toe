const gameBoardElement = document.querySelector('.gameboard');

const gameBoard = {
  gameBoard : []
}
const players = {
  player1: 'X',
  player2: 'O',
}

startGame();
function startGame(){
  createGameBoard()
}
function createGameBoard(){
  const div = document.createElement('div');
  for(let i = 0; i < 9; i++){
    gameBoardElement.appendChild(div);
  }
}