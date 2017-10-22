
class BoggleBoard {
  constructor(data) {
    this.board = [];
  }

  shake(number) {
    let board = this.board;

    for (let i = 0; i < number; i++) {
      board.push([]);
      for (let j = 0; j < number; j++) {
        board[i].push(String.fromCodePoint(Math.floor(Math.random() * 26) + 65));
      }
    }
    console.log("\nBoggle Board:");
    console.log(board);
    return board;
  }

  solve() {

  }

  cariKata(grid, kata) {
    let setArr = [];

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === kata[0]) {
          setArr.push([[i, j]]);
        }
      }
    }

    while (setArr.length > 0) {
      let letter = setArr.pop();

      if (letter.length === kata.length) {
        return true;
      }
    }
  }
}

let play = new BoggleBoard();

play.shake(4);