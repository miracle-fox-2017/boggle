class Boggle {
  constructor() {
    this.acak = this.hurufRandom();
    this.array = [];
  }

  hurufRandom() {
    let huruf = 'abcdefghijklmnopqrstuvwxyz';
    let random = Math.ceil(Math.random() * huruf.length -1);
    let hasil = huruf[random];
    return hasil;

  }

  board() {
    let huruf = '';
    for(let i = 0 ; i < 4 ; i++) {
      this.array.push([]);
      for(let j = 0 ; j < 4 ; j++) {
        this.array[i].push(this.hurufRandom())
        }
      }
        return this.array;
    }

}

let dataKata = require('./data.js')
let player = new Boggle()

console.log(player.board())
