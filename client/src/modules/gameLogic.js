export default class Game {
  constructor(board = null, turnCount = null) {
    this.board = board
    this.turnCount = turnCount
  }
}

Game.prototype.won = function() {
  const winningCombo = this.WIN_COMBINATIONS.find((combo) => {
    return this.board[combo[0]] === this.board[combo[1]] &&
    this.board[combo[1]] === this.board[combo[2]] &&
    this.positionTaken(combo[0])
  });
   if(winningCombo !== undefined) {
      return winningCombo
   } else {
     return false
   }
}

Game.prototype.WIN_COMBINATIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
]

Game.prototype.positionTaken = function(index) {
    return this.board[index] !== " ";
}

Game.prototype.winner = function() {
  const winningCombo = this.won();
  if(winningCombo) {
    return this.board[winningCombo[0]];
  }
  return false
}

Game.prototype.player = function() {
  return this.turnCount % 2 ? 'X' : 'O';
}

Game.prototype.updateState = function(index) {
  let token = this.player();
  this.board[index] = token;
}


Game.prototype.doTurn = function(index) {
  this.updateState(index);
  this.turnCount++;
  if(this.winner()) {
    this.saveGame()
    this.resetBoard()
  } else if (this.turnCount === 9) {
    alert("Tie game.");
    this.saveGame();
    this.resetBoard();
  }
}

// Game.prototype.saveGame = function(state) {
//   let url = 'http://localhost:3000/games';
//   fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(state),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
// }

Game.prototype.resetBoard = function() {
  this.turnCountturn = 0;
}
