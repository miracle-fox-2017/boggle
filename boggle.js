class Boggle{
  constructor(words){
    this.kamus=require('./data')
    this.letter='abcdefghijklmnopqrstuvwxyz';
    this.words=words;
    this.board=[];
    this.hasil=0
  }
//menghasilkan board sebesar paramxparam
// untuk mengeluarkan huruf random dari object letter
  shake(length){
    // this.letterRandom()
    // let counter=0;
    for(let i=0;i<length;i++){
      this.board.push([])
      for(let j=0;j<length;j++){
        this.hasil = Math.floor(Math.random()*26);
        this.board[i].push(this.letter[this.hasil])
        // counter++
      }
    }
    return this.board
  }
}

var game = new Boggle ();
console.log(game)
console.log(game.shake(4))
