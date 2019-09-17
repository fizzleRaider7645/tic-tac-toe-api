export default class Game {
  constructor(board = new Array(9)) {
    this.board = board
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
    return this.board[index] !== undefined
}

Game.prototype.winner = function() {
  const winningCombo = this.won()
  if(winningCombo) {
    return this.board[winningCombo[0]]
  }
  return false
}