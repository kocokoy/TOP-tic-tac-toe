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

      if(checkButtonIsClicked(boxClicked)){
        return;
      }

      if (turn) {
        playing = players.player2;
        turn = false;
      } else {
        playing = players.player1;
        turn = true;
      }
  
  boxClicked.textContent = playing;
  boxClicked.setAttribute('data-clicked', 'true');
  updateGameBoardArray(boxClicked,playing);
});
}

function checkButtonIsClicked(boxClicked){
  if (boxClicked.getAttribute('data-clicked') === 'true') {
    return true; 
    }
}

function updateGameBoardArray(box,playing){
  const id = box.getAttribute("data-id");
  gameBoard.gameBoard[id] = playing;
  console.log(gameBoard.gameBoard);
}