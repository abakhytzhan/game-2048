export function moveUp(inputBoard: number[][]) {
  let rotatedRight = rotateRight(inputBoard);
  let board = [];
  let score = 0;

  for (let r = 0; r < rotatedRight.length; r++) {
    let row = [];
    for (let c = 0; c < rotatedRight[r].length; c++) {
      let current = rotatedRight[r][c];
      current === 0 ? row.unshift(current) : row.push(current);
    }
    board.push(row);
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = board[r].length - 1; c >= 0; c--) {
      if (board[r][c] > 0 && board[r][c] === board[r][c - 1]) {
        board[r][c] = board[r][c] * 2;
        board[r][c - 1] = 0;
        score += board[r][c];
      } else if (board[r][c] === 0 && board[r][c - 1] > 0) {
        board[r][c] = board[r][c - 1];
        board[r][c - 1] = 0;
      }
    }
  }

  board = rotateLeft(board);

  return { board, score };
}

export function moveRight(inputBoard: number[][]) {
  let board = [];
  let score = 0;

  for (let r = 0; r < inputBoard.length; r++) {
    let row = [];
    for (let c = 0; c < inputBoard[r].length; c++) {
      let current = inputBoard[r][c];
      current === 0 ? row.unshift(current) : row.push(current);
    }
    board.push(row);
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = board[r].length - 1; c >= 0; c--) {
      if (board[r][c] > 0 && board[r][c] === board[r][c - 1]) {
        board[r][c] = board[r][c] * 2;
        board[r][c - 1] = 0;
        score += board[r][c];
      } else if (board[r][c] === 0 && board[r][c - 1] > 0) {
        board[r][c] = board[r][c - 1];
        board[r][c - 1] = 0;
      }
    }
  }

  return { board, score };
}

export function moveDown(inputBoard: number[][]) {
  let rotatedRight = rotateRight(inputBoard);
  let board = [];
  let score = 0;

  for (let r = 0; r < rotatedRight.length; r++) {
    let row = [];
    for (let c = rotatedRight[r].length - 1; c >= 0; c--) {
      let current = rotatedRight[r][c];
      current === 0 ? row.push(current) : row.unshift(current);
    }
    board.push(row);
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      if (board[r][c] > 0 && board[r][c] === board[r][c + 1]) {
        board[r][c] = board[r][c] * 2;
        board[r][c + 1] = 0;
        score += board[r][c];
      } else if (board[r][c] === 0 && board[r][c + 1] > 0) {
        board[r][c] = board[r][c + 1];
        board[r][c + 1] = 0;
      }
    }
  }

  board = rotateLeft(board);

  return { board, score };
}

export function moveLeft(inputBoard: number[][]) {
  let board = [];
  let score = 0;

  for (let r = 0; r < inputBoard.length; r++) {
    let row = [];
    for (let c = inputBoard[r].length - 1; c >= 0; c--) {
      let current = inputBoard[r][c];
      current === 0 ? row.push(current) : row.unshift(current);
    }
    board.push(row);
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      if (board[r][c] > 0 && board[r][c] === board[r][c + 1]) {
        board[r][c] = board[r][c] * 2;
        board[r][c + 1] = 0;
        score += board[r][c];
      } else if (board[r][c] === 0 && board[r][c + 1] > 0) {
        board[r][c] = board[r][c + 1];
        board[r][c + 1] = 0;
      }
    }
  }

  return { board, score };
}

export function rotateRight(matrix: number[][]) {
  let result = [];

  for (let c = 0; c < matrix.length; c++) {
    let row = [];
    for (let r = matrix.length - 1; r >= 0; r--) {
      row.push(matrix[r][c]);
    }
    result.push(row);
  }

  return result;
}

export function rotateLeft(matrix: number[][]) {
  let result = [];

  for (let c = matrix.length - 1; c >= 0; c--) {
    let row = [];
    for (let r = matrix.length - 1; r >= 0; r--) {
      row.unshift(matrix[r][c]);
    }
    result.push(row);
  }

  return result;
}
