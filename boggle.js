const fs = require('fs')
const newArr = fs.readFileSync('./data.js')
// console.log('import >>>', newArr.length);

class BoggleBoard{
  constructor(dictionary){
    this.dictionary = dictionary
    this.dummyData  = ['data','array','nested','ball','basket']
    this.dummy      = []
    this.onBoard    = []

  }

  solve(row, col){
    // console.log('-------', this.onBoard);

    let result = []
    // console.log('key >>',this.onBoard[row][col]);

    for(let r=0; r<3; r++){
      for(let c=0; c<3; c++){
          if (typeof this.onBoard[r+(row-1)] !== 'undefined') {
            if(typeof this.onBoard[c+(col-1)] !== 'undefined'){
              result.push(this.onBoard[r+(row-1)][c+(col-1)])
            }
          }
      }
    }
    // console.log(result);
    return result
  }

  checkData(){
    // console.log('load data >>', this.dummyData[0][0])
    console.log('board >>>>>>>>', this.onBoard);
    let frontArr = []
    for(let i=0; i<this.dummyData.length; i++){
      frontArr.push(this.dummyData[i][0])
    }

    console.log('huruf depan >>>>>',frontArr)
    for(let j=0; j<this.onBoard.length; j++){
      for(let k=0; k<frontArr.length; k++){
        console.log('found >>>>', this.onBoard[j].indexOf(frontArr[k]));
        // if(this.onBoard[j].indexOf(frontArr[k]) !== -1){
        //   return true
        // }
      }
    }
    // return false
  }

  makeRandom(shake) {
    let squareArea     = shake * shake
    const possible = 'abcdefghijklmnopqrstuvwxyz'

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
boggle.shake(4)


// console.log(boggle.shake(4))
// console.log(boggle.solve(0,0))
console.log(boggle.checkData())
