// const to check if there is a winner
const winRoundCheckRecords = [[1, 2, 3], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [3, 5, 7], [4, 5, 6], [7, 8, 9]]

//factory function to create players
//include name, icon, plays, Score
//return functions: recordMove, resetPlayer, recordNewRound, getName, getScore, getIcon
const playerFactory = (name, icon, score = 0) => {
  const getName = () => name;
  const getIcon = () => icon;
  const getScore = () => score;
  let record = []

  const winRound = () => { score += 1 }
  const checkWin = (check) => {
    let win = false;
    while (!win) {
      for (let value of winRoundCheck) {
        let num = 0;
        if (value.forEach(element => {
          check.includes(element) ? num += 1 : false;
        }));
        num === 3 ? win = true : false;
      }
    } if (win) { winRound() }
    return win;
  }
  const recordMove = play => {
    record[-1].push(play);
    if (record[-1].length >= 3) {
      record[-1].sort();
      return checkWin(record[-1]);
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
const match = (e, turn) => {
  //determine which player goes first for match


  if (first != begun)
    if (document.querySelectorAll('.hidden').length === 7) {
      let x = false;
      while (x === false) {
        let square = e.target;
        let play = square.id;
      }
      //passes winner (or lack of) to game function
      //game(player)
    }
}

// grab all necessary elements for the DOM
//gameboard
const board = document.getElementById('game-board');
//scoreboard elements
const p1nameHeader = document.getElementById('player-1-name');
const p2nameHeader = document.getElementById('player-2-name');
const p1scoreHeader = document.getElementById('player-1-score');
const p2scoreHeader = document.getElementById('player-2-score');
//get player info/new game elements
const getPlayersModal = document.getElementById('get-players');
const form = document.getElementById('player-form');
const player1Form = document.getElementById('player1-info');
const player2Form = document.getElementById('player2-info');
const iconArea = document.getElementById('icon-choices');
const Player1Button = document.getElementById('submit-button')
const Player2Button = document.getElementById('start-game-button')
//playAgainModel
const playAgainModal = document.getElementById('play-again')
//finalScoreModal
const finalScoreModal = document.getElementById('final-score-modal');
//catGameModal
const catGameModal = document.getElementById('cat-game');
//tiemodals
const tiePlayAgainModal = document.getElementById('tie-play-again');
const catGameTieModal = document.getElementById('cat-game-tie');
const finalScoreTieModal = document.getElementById('final-score-tie');

const iconList = [
  { id: "chicken-head", source: "./assets/chicken-head.svg" },
  { id: "chicken", source: "./assets/chicken.svg" },
  { id: "ChickenHead", source: "./assets/ChickenHead.svg" },
  { id: "ColorfulRooster", source: "./assets/ColorfulRooster.svg" },
  { id: "Cute_chick", source: "./assets/Cute_chick.svg" },
  { id: "drawing", source: "./assets/drawing.svg" },
  { id: "eggscape", source: "./assets/eggscape.svg" },
  { id: "eggstracute", source: "./assets/eggstracute.svg" },
  { id: "FancyEggChick", source: "./assets/FancyEggChick.svg" },
  { id: "FancyFloralEgg", source: "./assets/FancyFloralEgg.svg" },
  { id: "FancyMandalaEgg", source: "./assets/FancyMandalaEgg.svg" },
  { id: "HatchedChick", source: "./assets/HatchedChick.svg" },
  { id: "HatchingChickSide", source: "./assets/HatchingChickSide.svg" },
  { id: "Hen", source: "./assets/Hen.svg" },
  { id: "rooster", source: "./assets/rooster.svg" },
  { id: "ThreeEggs", source: "./assets/ThreeEggs.svg" },
]
//icon selection variable
let selected = null;
const iconWarning = document.getElementById('icon-warning')
const iconChoices = document.getElementById('icon-choices')



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
    while (x < 10) {
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

  //new game modal function
  const newGame = () => {
    //display modal
    getPlayersModal.classList.remove('noshow');
    //icon choice modal builder
    iconList.forEach((n) => {
      let icon = document.createElement('img');
      icon.classList.add('icon-img');
      icon.setAttribute('id', `${n[id]}`);
      icon.setAttribute('src', n[source])
      icon.addEventListener('click', (e) => {
        selected = e.target.getAttribute('src')
      })
      iconChoices.appendChild(icon);
    });

    //add eventlistener to Player-1-button
    Player1Button.addEventListener('click', function player1form() {
      let formData = document.getElementById('player-form').elements;
      //get player1 name and icon
      let player1name = formData[0].value;
      //if icon not selected throw warning
      if (selected === null) {
        iconWarning.classList.remove('noshow');
        document.getElementById('icon-warning.btn').addEventListener('click', () => { iconWarning.classList.add('noshow') })
        return;
      } //if icon selected construct player1 and display player 2 form
      else {
        let player1icon = selected;
        const player1 = playerFactory(player1name, player1icon)
        document.getElementById(player1icon).classList.add('grayscale')
        player1Form.classList.add('noshow');
        Player1Button.classList.add('noshow');
        player2Form.classList.remove('noshow');
        Player2Button.classList.remove('noshow');
        return player1;
      }
    })
    //add event listener to player2 button
    Player2Button.addEventListener('click', function player2form() {
      let formData = document.getElementById('player-form').elements;
      //get player2 name and icon
      let player2name = formData[1].value;
      //if icon selected matches player1 icon, throw warning
      if (selected === player1.getIcon) {
        iconWarning.classList.remove('noshow');
      } //if icon selected is different from player1, construct player2 and hide modal
      else {
        let player2icon = selected;
        const player2 = playerFactory(player2name, player2icon);
        getPlayersModal.classList.add('noshow');
        squareImages(player1, player2)
      }
    })
  }
  return { buildBoard, newGame, }
})();
gameBoard.buildBoard(board);
gameBoard.newGame()


