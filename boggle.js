const fs = require('fs')
const newArr = fs.readFileSync('./data.js')
// console.log(newArr.length);

class BoggleBoard{
  constructor(dictionary){
    this.dictionary = dictionary
    this.dummy      = []
    this.onBoard    = []
  }

  makeRandom(shake) {
    let squareArea     = shake * shake
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (var i=0; i<squareArea; i++){
      this.dummy.push(possible.charAt(Math.floor(Math.random() * possible.length)))
    }
    return this.dummy
  }

  shake(area){
    this.makeRandom(area)
    console.log(`\nshake(${area})\n`)

    for(let i=0; i<area; i++){
      this.onBoard.push(this.dummy.splice(0,area))
    }
    return this.onBoard
  }


}

let boggle = new BoggleBoard(newArr)


// boggle.makeRandom()
// boggle.shake()
console.log(boggle.shake(4))
