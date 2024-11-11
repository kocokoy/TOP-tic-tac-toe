const gameBoardElement = document.querySelector('.gameboard');

const gameBoard = {
  gameBoard : Array(9).fill(null)
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
  for(let i = 0; i < gameBoard.length; i++){
    const div = document.createElement('div');
    div.setAttribute('data-id',i);
    gameBoardElement.appendChild(div);
  }
}

function gameBoardBoxClicked(){
  let playing = '';
  let turn = false;
  let boxClicked = null;
  gameBoardElement.addEventListener('click', (e) => {
    boxClicked = e.target;

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
  const winner = checkWinner(gameBoard.gameBoard);
  const draw = checkForDraw(gameBoard.gameBoard);

  if(winner){
    alert(`${winner} Wins`);
    return;
  }
  
  if(draw){
    alert(`draw`);
    return;
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
 return result.every(i => i != null);
}
