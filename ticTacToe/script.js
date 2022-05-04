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

//game tracking function
//call match function
//keep track of score
//determine if the game has a winner
//determine if the game is a cat's game (tie)
//call modal at end of match and end of game

//match tracking function
const match = (e) => {
  if (document.querySelectorAll('.hidden').length === 7){
    let x = false;
    while (x === false){
      let square = e.target;
      let play = square.id;

    }
//passes winner (or lack of) to game fucntion
//game(player)
  }
}

// grab all necessary elements for the DOM
const board = document.getElementById('game-board');
const p1nameHeader = document.getElementById('player-1-name');
const p2nameHeader = document.getElementById('player-2-name');
const p1scoreHeader = document.getElementById('player-1-score');
const p2scoreHeader = document.getElementById('player-2-score');
const getPlayersModal = document.getElementById('get-players');
const form = document.getElementById('player-form');
const playAgainModal = document.getElementById('play-again')
const finalScoreModal = document.getElementById('final-score-modal');
const catGameModal = document.getElementById('cat-game');
const tiePlayAgainModal = document.getElementById('tie-play-again');
const catGameTieModal = document.getElementById('cat-game-tie');
const finalScoreTieModal = document.getElementById('final-score-tie');

//new game modal function
const newGame = () => {
  //display modal
  getPlayersModal.classList.remove('noshow');
  //add eventlistener
  form.addEventListener('submit', (event) => {
    let formData = document.getElementById('player-form').elements;
    //get player names and icons
    let player1name = formData[0].value;
    let player1icon = formData[1].value;
    let player2name = formData[2].value;
    let player2icon = formData[3].value;
    //create player objects
    const player1 = playerFactory(player1name, player1icon, 0);
    const player2 = playerFactory(player2name, player2icon, 0);
    getPlayersModal.classList.add('noshow');
    //add images of html of board
    gameBoard.squareImages(player1, player2)
    //call game fucntion
    return game(player1, player2)
  })   
}


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

//module to create gameboard
const gameBoard = (() => {
  const buildBoard = (board) => {
    let x = 1;
    //create 9 squares in board
    while (x < 10){
      let square = document.createElement('div');
      square.classList.add('game-square');
      square.setAttribute('id', `${x}`);
      //eventlisteners to each squares
      square.addEventListener('click', match);
      board.appendChild(square);
      x += 1;
    };
  }
  const squareImages = (player1, player2) => {
    const squares = Array.from(document.getElementsByClassName('game-square'));
    squares.forEach((square) => {
      let playerOne = document.createElement('img');
      playerOne.setAttribute('src', player1.getIcon());
      playerOne.classListplayerOne.classList.add('noshow');
      square.appendChild(playerOne);
      let playerTwo = document.createElement('img');
      playerTwo.setAttribute('src', player2.getIcon());
      playerTwo.classList.add('noshow');
      square.appendChild(playerTwo);
    })
  };
  return {buildBoard, squareImages}
})();
gameBoard.buildBoard(board);
newGame()
