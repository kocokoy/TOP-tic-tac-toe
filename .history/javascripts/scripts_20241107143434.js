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
    const div = document.createElement('div','i');
    div.setAttribute('data-id');
    gameBoardElement.appendChild(div);
  }
}

function gameBoardBoxClicked(){

}