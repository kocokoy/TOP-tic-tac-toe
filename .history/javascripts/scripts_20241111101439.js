const gameBoardElement = document.querySelector('.gameboard');

const gameBoard = {
  gameBoard : Array(9).fill(null)
}
const players = {
  player1: 'X',
  player2: 'O',
}
let playing = '';
let turn = false;


startGame();

function startGame(){
  createGameBoard();
  gameBoardBoxClicked();
}

function createGameBoard(){
  for(let i = 0; i < gameBoard.gameBoard.length; i++){
    const div = document.createElement('div');
    div.setAttribute('data-id',i);
    gameBoardElement.appendChild(div);
  }
}

function gameBoardBoxClicked(){

  gameBoardElement.addEventListener('click', (e) => {
    let boxClicked = e.target;
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

      console.log(turn);
  
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
  const winner = checkWinner(gameBoard.gameBoard);
  const draw = checkForDraw(gameBoard.gameBoard);

  if(winner){
    alert(`${winner} Wins`);
    resetGame();
  }
  
  if(draw){
    alert(`draw`);
    resetGame();
  }
  
}


function checkWinner(gameBoard){
  const winningMoves = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
  ] 

  for(let winMove of winningMoves){
    const[a, b ,c] = winMove;
    if(gameBoard[a] && gameBoard[c] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
      return gameBoard[a];
    }
  }
    return null;
    
  
}

function displayResult(result){
  if(result.every(i => i != null) ){
    console.log()
  }
}

function checkForDraw(result){
 return result.every(cell => cell !== null);
}

function resetGame(){
  gameBoardElement.innerHTML = '';
  console.log(playing)
  playing = '';
  turn = false;
  gameBoard.gameBoard = Array(9).fill(null);
  startGame();
}