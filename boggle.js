class Boggle {
  constructor(file) {
    this.kamus = file;
    this.papan = [];
    this.hasil = [];
    this.hint =  true;
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
    let listAround = [];
    let start = 0;
    this.kamus.forEach(dataKamus =>{
      for (var x = 0; x < this.papan.length; x++) {
        let dataPapan = this.papan[x]
        for (var y = 0; y < dataPapan.length; y++) {
          if(dataPapan[y].indexOf(dataKamus[start]) !== -1){
            listAround.push(this.chekAround(x,y))
          }
        }
      }
    })
    return coba
  }
  chekAround(posX, posY){
    // console.log('key'+this.papan[posX][posX]);
    let cek = []
      for (let startX = -1; startX <= 1; startX++){
        for (let startY = -1; startY <= 1; startY++){
          let idxX = posX + startX;
          let idxY = posY + startY;
          if(typeof this.papan[idxX] !== 'undefined'){
            if(typeof this.papan[idxX][idxY] !== 'undefined'){
              cek.push(this.papan[idxX][idxY])
            }
          }
        }
      }
    return cek
  }
}
var arr = require('./coba.js');
let boggle = new Boggle(arr)
console.log(boggle.shake(4));
// console.log(boggle.papan);
console.log(boggle.solver());
// console.log(boggle.chekAround(0,0));
