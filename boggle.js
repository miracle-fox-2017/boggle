var kamus = require('./data.js');
class Boggle {
  constructor(dictionary) {
    this.dictionary = dictionary
    this.board = []
    this.koordinat = []
    this.hasil = []
  }

  shake() {
    for(var i = 0; i < 4; i++) {
      var tampung = []
      for(var j = 0; j < 4; j++) {
        tampung.push(String.fromCharCode((Math.floor(Math.random() * (122 - 97))) + 97))
      }
      this.board.push(tampung)
    }

    return this.board
  }

  solve() {
    for(var i = 0; i < this.dictionary.length; i++) {
      for(var j = 0; j < this.board.length; j++) {
        for(var k = 0; k < this.board.length; k++) {
          if(this.dictionary[i][0] == this.board[j][k]) {
            return this.dictionary[i][0]
          }
        }
      }
    }
  }


}

var main = new Boggle(kamus)
console.log(main.shake());
