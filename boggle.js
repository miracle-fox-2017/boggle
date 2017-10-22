class Boggle {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.puzzle = [];
    this.data = this.kamus();
  }

  shake(){
    for (var i = 0; i < this.row; i++) {
      let hasil = this.random(this.col).split('');
      this.puzzle.push(hasil);
    }
    // let board = [['G','I','Z','A'], ['U','E','K','O'], ['Q','S','E','N'], ['A','B','O','M']];

    return this.puzzle;
  }

  random(col){
    let text = ''
    for (var i = 0; i < col; i++) {
      text += this.huruf.charAt(Math.floor(Math.random() * this.huruf.length))
    }
    return text;
  }

  kamus(){
    let words = require('./data.js');
    return words;
  }

  solve(){
    let text = ''
    let arr = []

    for (var x = 0; x < this.data.length; x++) {
      arr.push(this.data[x].length)
    }
    return arr;
  }



}

let boogInput = new Boggle(4, 4);
// console.log(boogInput.solve());
console.log(boogInput.shake());
