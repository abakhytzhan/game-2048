export const checkWin = (board: number[][]) => {
  return hasValue(board, 2048);
};

const hasValue = (board: number[][], value: number) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === value) {
        return true;
      }
    }
  }
  return false;
};
