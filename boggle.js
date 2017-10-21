class Bogle {
  constructor(papan,words) {
    this.lebarPapan = papan
    this.arr = []
    this.kamusCheck = []
    this.kamus = words
    this.index = []
  }
shake(){
  let random = Math.floor(Math.random()*(90 - 65) + 65)
  return String.fromCodePoint(random)
}

board() {
  for(let i =0 ; i<this.lebarPapan;i++){
    this.arr.push([]);
        for (let j =0; j<this.lebarPapan;j++){
          this.arr[i].push(this.shake())
        }
  }
}

solveBoggle(){

}
// check_tetanggaSamping(){
//   for (let i =0; i<this.arr.length;i++){
//     for(let j =0;)
//   }
// }

check_array(){
  for(let i = 0; i<this.arr.length;i++){
    for(let j = 0; j<this.arr[i].length;j++){
      // this.index.push({this.arr[i][j]})
      // // let huruf = this.arr[i][j]
      // // this.index.push({ x: i, y :j})
      return this.arr[i][j]
    }
  }
}
check_kamus(){
  for (let i =0; i<this.kamus.length;i++){
    for (let j =0; j<this.kamus[i].length; j++){
      if (this.kamus[i][0] === this.check_array()){
        this.kamusCheck.push(this.kamus[i])
      }
    }
  }
}
}
const words = require ('./data')
var game = new Bogle(4,words)
game.board()
game.check_array()
console.log(game.arr)
// console.log(game.index);
