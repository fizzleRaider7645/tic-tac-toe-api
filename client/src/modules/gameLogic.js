export default class Game {
  constructor(id, board = [" ", " ", " ", " ", " ", " ", " ", " ", " "], turnCount = 0, players) {
    this.id = id
    this.board = board
    this.turnCount = turnCount
    this.players = players
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
  return this.turnCount % 2 ? 'O' : 'X';
}

Game.prototype.updateState = function(index) {
  const token = this.player();
  if(this.positionTaken(index)) {
    return
  } else {
    let updatedBoard = [...this.board]
    updatedBoard[index] = token
    this.board = updatedBoard
    this.turnCount++;
  }
}


Game.prototype.doTurn = function(index) {
  if(this.inProgess()) {
    this.updateState(index);
  }
  if(this.winner()) {
    alert(`${this.winner()} Won!`)
  } else if(this.draw()) {
    alert("Tie game.");
  }
}

Game.prototype.reset = function() {
  const resetBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  this.turnCount = 0;
  this.board = resetBoard
}

Game.prototype.full = function() {
  const theBoard = this.board
  return theBoard.every(sqr => sqr !== " ")
}

Game.prototype.draw = function() {
  const weHaveaWinner = this.winner()
  const isFull = this.full()
  if(!weHaveaWinner && isFull) {
    return true
  } else {
    return false
  }

}

Game.prototype.inProgess = function() {
  const weHaveADraw = this.draw()
  const weHaveWinner = this.winner()
  if(!weHaveWinner && !weHaveADraw) {
    return true
  } else {
    return false
  }
}
