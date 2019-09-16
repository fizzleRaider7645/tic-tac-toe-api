function positionTaken(board, index)
  !(board[index] == " ")
end

const WIN_COMBINATIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
]

function won(board)
  WIN_COMBINATIONS.find((combo) => {
    board[combo[0]] == board[combo[1]] &&
    board[combo[1]] == board[combo[2]] &&
    positionTaken(board, combo[0])
  });