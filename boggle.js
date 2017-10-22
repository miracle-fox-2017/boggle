


var fs = require('fs')
var words = fs.readFileSync('data.js').toString()
console.log(words)
class Boggle{
  constructor(){
    this.board = []
  }
  shake(number){
    let abjad = 'abcdefghijklmnopqrstuvwxyz'

    for(let i = 0; i < number;i++){
      let boardline = []
      for(let j = 0; j < number; j++){

        boardline.push(abjad[Math.floor(Math.random()*abjad.length)])
      }
      this.board.push(boardline)
    }

  }
  solve(){

  }
}

let boggle = new Boggle()
boggle.shake(4)
console.log(boggle.board)
