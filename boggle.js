class Boggle {
  constructor(file) {
    this.kamus = file
    this.papan = []
    this.hasil = []
  }
  randomAphabet(){
    let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return huruf.charAt(Math.floor(Math.random() * huruf.length));
  }
  shake(jumlah){
    for (var i = 0; i < jumlah; i++) {
      let rows =[]
      for (var j = 0; j < jumlah; j++) {
        rows.push(this.randomAphabet())
      }
      this.papan.push(rows)
    }
    return this.papan;
  }
  solver(){
    for (var i = 0; i < this.kamus.length; i++) {
      for (var j = 0; j < this.kamus[i].length; j++) {
        console.log(this.kamus[i][j]);
      }
    }
    return this.kamus
  }
  chekAround(posX, posY){
      console.log('kunci',this.shake[posX][posX])
      let cek=[]
        for (let startX = -1; startX <= 1; startX++){
            for (let startY = -1; startY <= 1; startY++){
                let idxX = posX + startX;
                let idxY = posY + startY;
                cek.push(data[idxX][idxY])
            }
        }
    return cek
  }
}
var arr = require('./coba.js');
let boggle = new Boggle(arr)
console.log(boggle.shake(8));
console.log(boggle.solver());
