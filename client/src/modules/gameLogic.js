export default class Game {
  constructor(board) {
    this.board = board
  }
}

Game.prototype.won = function(board) {
  this.WIN_COMBINATIONS.find((combo) => {
  board[combo[0]] == board[combo[1]] &&
  board[combo[1]] == board[combo[2]] &&
  this.positionTaken(board, combo[0])
  });
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

// Game.prototype.positionTaken = function(index) {
//   this.board[index] !== " "
// }