class Boggle {
  constructor(file) {
    this.kamus = file;
    this.papan = [];
    this.hasil = [];
    this.hint =  true;
    this.start = 0;
    this.findWords = [];

    // this.papan = [[ 'R', 'X', 'C', 'V' ],
    //               [ 'F', 'O', 'G', 'G' ],
    //               [ 'M', 'M', 'J', 'U' ],
    //               [ 'I', 'O', 'V', 'A' ] ]

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
    let listAround=[];
    // console.log(this.papan);
    this.kamus.forEach(dataKamus =>{
      for (var x = 0; x < this.papan.length; x++) {
        let dataPapan = this.papan[x]
        for (var y = 0; y < dataPapan.length; y++) {
          let listArray = dataPapan[y]
          let insearch = dataKamus[this.start]
          // console.log('Nilai AWAL', insearch);
          debugger
          if(this.checkValue(listArray, insearch)){
            // if(this.hint){
            //   this.hint = false
            if(typeof insearch !== 'undefined'){
              listAround.push(this.chekAround(x,y))
              this.findWords.push(insearch)
              this.start++
              insearch = dataKamus[this.start]
              // if(true){
                listAround.forEach(list=>{
                  listArray = list
                })

              // console.log('---',hh);

              // } else {
              //
              // }
              // console.log('data baru', listArray)
              // console.log('next search ',insearch);
            // }
            }
          }
        }
      }
    })

    return this.findWords
  }
  checkValue(listArray, search){
    // console.log('datas',listArray, search);
    if(listArray.indexOf(search) !== -1){
      return true
    } else {
       return false
    }
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
// var arr = require('./data.js');
let boggle = new Boggle(arr)
console.log(boggle.shake(4));
// console.log(boggle.papan);
console.log(boggle.solver());

// console.log(boggle.checkValue());
// console.log('finded '+boggle.findWords);
// console.log(boggle.chekAround(0,0));
