// const to check if there is a winner
const winRound = [[1,2,3], [1,5,9], [1,4,7], [2,5,8], [3,6,9], [3,5,7], [4,5,6], [7, 8, 9]]

//factory function to create players
//include name, icon, plays, Score
const playerFactory = (name, icon, score=0) => {
  const getName = () => name;
  const getIcon = () => icon;
  const getScore = () => score;
  let record = []

  const winRound = () => { score += 1 }
  const checkWin = () => {
    if ( winRound.includes(record[-1])) {
      winRound();
      return true;
    } else { return false }
  }
  const recordMove = play => {
    record[-1].push(play);
    if (record[-1].length >= 3 ){
      record[-1].sort();
      return checkWin();
    } else { return false }
  }
  const resetPlayer = () => {
    name = null;
    icon = null;
    score = null;
    record = null;
  }
  const recordNewRound = () => {
    record.push([]);
  }
  return { recordMove, recordNewRound, resetPlayer, getName, getScore, getIcon }
}

//module to create gameboard
const gameBoard = (() => {
  const board = document.getElementById('game-board');
  let x = 1;
  //create 9 squares in board
  while (x < 10){
    let square = board.createElement('div');
    square.classList.add('game-square');
    square.setAttribute('id', `${x}`);
    //eventlisteners to each squares
    square.addEventListener('click', match);
    board.appendChild(square);
  }
}

//game tracking function
//call match function
//keep track of score
//determine if the game has a winner
//determine if the game is a cat's game (tie)
//call modal at end of match and end of game

//match tracking function
const match = () => {
while (true){
//keeps track of turn
//places icon in square as clicked
//display appropriate image for turn

//records move in player object (which checks for win)
player.recordMove(play)? break:false;
}
//passes winner (or lack of) to game fucntion
game(player)
}

//new game modal fucntion
//display modal
//add eventlisteners
//get player names and icons
//call game function

//end match modal function
//displays appropriate modal for Score
//displays score and player name in modal
//adds eventlisteners to buttons
//calls new match or end game function

//end game modal fucntion
//displays appropriate modal for Score
//displays score and player name in modal
//adds eventlisteners to buttons
//calls new game function or closes
