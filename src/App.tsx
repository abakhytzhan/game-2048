import "./App.css";
import { Component } from "react";
import Board from "./components/board/board";
import Score from "./components/score/score";
import { moveDown, moveUp, moveLeft, moveRight } from "./utils/move";
import { playSound } from "./components/sound/sound";
import { playSound2 } from "./components/sound/sound";
import { playSound3 } from "./components/sound/sound";
import { checkWin } from "./utils/checkWin";
import Message from "./components/message/message";

interface AppProps {}

export interface AppState {
  board: number[][];
  score: number;
  gameOver: boolean;
  message: string;
}

class App extends Component<AppProps, AppState> {
  length: number;
  constructor(props: any) {
    super(props);
    this.length = 4;
    this.state = {
      board: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      score: 0,
      gameOver: false,
      message: "",
    };
  }

  createBoard(length: number) {
    let board = [];
    for (let i = 0; i < length; i++) {
      const row = [];
      for (let j = 0; j < length; j++) {
        row.push(0);
      }
      board.push(row);
    }

    return board;
  }

  initBoard(length: number) {
    let board = this.createBoard(length);

    const counter = document.querySelector(".score");
    if (counter) counter.innerHTML = "0";

    board = this.generateRandomBoard(this.generateRandomBoard(board));
    this.setState({ board, score: 0, gameOver: false, message: "" });
  }

  getEmptyCells(board: number[][]) {
    const emptyCells = [];

    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        if (board[r][c] === 0) {
          emptyCells.push([r, c]);
        }
      }
    }

    return emptyCells;
  }

  generateRandomBoard(board: any[][]) {
    const emptyCells = this.getEmptyCells(board);
    const randomCell =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];
    let twoNumbers = [2, 4];
    const randomNumber = twoNumbers[Math.floor(Math.random() * 2)];
    board[randomCell[0]][randomCell[1]] = randomNumber;
    return board;
  }

  checkBoards(original: any, updated: any[][]) {
    return JSON.stringify(updated) !== JSON.stringify(original) ? true : false;
  }

  move(direction: string) {
    if (!this.state.gameOver) {
      if (direction === "up") {
        const movedUp = moveUp(this.state.board);
        if (this.checkBoards(this.state.board, movedUp.board)) {
          const upWithRandom = this.generateRandomBoard(movedUp.board);

          if (checkWin(upWithRandom)) {
            this.setState({
              board: upWithRandom,
              gameOver: true,
              message: "You win!",
            });
            playSound3();
          } else {
            if (this.checkForGameOver(upWithRandom)) {
              this.setState({
                board: upWithRandom,
                gameOver: true,
                message: "Game over!",
              });
              playSound2();
            } else {
              let currentScore = this.state.score;
              this.setState({
                board: upWithRandom,
                score: (currentScore += movedUp.score),
              });
            }
          }
        }
      } else if (direction === "right") {
        const movedRight = moveRight(this.state.board);
        if (this.checkBoards(this.state.board, movedRight.board)) {
          const rightWithRandom = this.generateRandomBoard(movedRight.board);

          if (checkWin(rightWithRandom)) {
            this.setState({
              board: rightWithRandom,
              gameOver: true,
              message: "You win!",
            });
            playSound3();
          } else {
            if (this.checkForGameOver(rightWithRandom)) {
              this.setState({
                board: rightWithRandom,
                gameOver: true,
                message: "Game over!",
              });
              playSound2();
            } else {
              let currentScore = this.state.score;
              this.setState({
                board: rightWithRandom,
                score: (currentScore += movedRight.score),
              });
            }
          }
        }
      } else if (direction === "down") {
        const movedDown = moveDown(this.state.board);
        if (this.checkBoards(this.state.board, movedDown.board)) {
          const downWithRandom = this.generateRandomBoard(movedDown.board);

          if (checkWin(downWithRandom)) {
            this.setState({
              board: downWithRandom,
              gameOver: true,
              message: "You win!",
            });
            playSound3();
          } else {
            if (this.checkForGameOver(downWithRandom)) {
              this.setState({
                board: downWithRandom,
                gameOver: true,
                message: "Game over!",
              });
              playSound2();
            } else {
              let currentScore = this.state.score;
              this.setState({
                board: downWithRandom,
                score: (currentScore += movedDown.score),
              });
            }
          }
        }
      } else if (direction === "left") {
        const movedLeft = moveLeft(this.state.board);
        if (this.checkBoards(this.state.board, movedLeft.board)) {
          const leftWithRandom = this.generateRandomBoard(movedLeft.board);

          if (checkWin(leftWithRandom)) {
            this.setState({
              board: leftWithRandom,
              gameOver: true,
              message: "You win!",
            });
            playSound3();
          } else {
            if (this.checkForGameOver(leftWithRandom)) {
              this.setState({
                board: leftWithRandom,
                gameOver: true,
                message: "Game over!",
              });
              playSound2();
            } else {
              let currentScore = this.state.score;
              this.setState({
                board: leftWithRandom,
                score: (currentScore += movedLeft.score),
              });
            }
          }
        }
      }
      playSound();
    } else {
      if (this.state.message !== "You win!") {
        this.setState({ message: "Game over. Please start a new game." });
      }
    }
  }

  checkForGameOver(board: number[][]) {
    let moves = [
      this.checkBoards(board, moveUp(board).board),
      this.checkBoards(board, moveRight(board).board),
      this.checkBoards(board, moveDown(board).board),
      this.checkBoards(board, moveLeft(board).board),
    ];

    return moves.includes(true) ? false : true;
  }

  componentDidMount() {
    this.initBoard(4);
    const body = document.querySelector("body");
    body?.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(e: KeyboardEvent) {
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;

    if (e.keyCode === up) {
      this.move("up");
    } else if (e.keyCode === right) {
      this.move("right");
    } else if (e.keyCode === down) {
      this.move("down");
    } else if (e.keyCode === left) {
      this.move("left");
    }
  }

  clickHandle(num: number) {
    const btns = document.querySelectorAll("button");
    btns[0].style.background = "#2f4f4f";
    btns[1].style.background = "#2f4f4f";
    btns[2].style.background = "#2f4f4f";
    btns[0].style.color = "#2acaea";
    btns[1].style.color = "#2acaea";
    btns[2].style.color = "#2acaea";
    if (num === 4) {
      btns[0].style.background = "#2acaea";
      btns[0].style.color = "#2f4f4f";
    } else if (num === 5) {
      btns[1].style.background = "#2acaea";
      btns[1].style.color = "#2f4f4f";
    } else if (num === 6) {
      btns[2].style.background = "#2acaea";
      btns[2].style.color = "#2f4f4f";
    }

    this.initBoard(num);
  }

  render() {
    return (
      <div>
        <div
          className="button"
          onClick={() => {
            this.initBoard(this.state.board.length);
          }}
        >
          New Game
        </div>
        <div className="buttons">
          <button
            className="btn button1"
            value="4"
            onClick={() => this.clickHandle(4)}
          >
            4x4
          </button>
          <button
            className="btn button2"
            value="5"
            onClick={() => this.clickHandle(5)}
          >
            5x5
          </button>
          <button
            className="btn button2"
            value="6"
            onClick={() => this.clickHandle(6)}
          >
            6x6
          </button>
        </div>

        <Score score={this.state.score} />

        <Board board={this.state.board} />

        <Message message={this.state.message} />
      </div>
    );
  }
}

export default App;
