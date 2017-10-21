class Boggle {
  constructor(word, boardScale){
    this.word = word
    this.scale = boardScale
    this.boardSave = []
    this.boardGame = []
    this.solved = []
    this.wordLength = 0
    this.iChar = 0
    this.temp = []
    this.result = []
    this.saveIndex1=[]
  }

  shake(){
    let abj = 'AAAABBBBCCCCDDDDEEEEFFFFGGGGHHHHIIIIJJJJKKKKLLLLMMMMNNNNOOOOPPPPQQQQRRRRSSSSTTTTUUUUVVVVWWWWXXXXYYYYZZZZ'
    for (var i = 0; i < this.scale; i++) {
      let row = []
      for (var j = 0; j < this.scale; j++) {
        let random = Math.floor(Math.random(0)*abj.length)
        row.push(abj[random])
      }
      this.boardGame.push(row)
      this.boardSave.push(row)
    }
    return this.boardGame
  }

  boardTes(){
    this.boardSave = [['D', 'B', 'O', 'U'],
                      ['O', 'W', 'J', 'G'],
                      ['I', 'E', 'N', 'G'],
                      ['M', 'I', 'A', 'N']]
    this.boardGame = [['D', 'B', 'O', 'U'],
                      ['O', 'W', 'J', 'G'],
                      ['I', 'E', 'N', 'G'],
                      ['M', 'I', 'A', 'N']]
  }

  solve(){
    for (var k = 0; k < this.word.length; k++) {
      if(this.boardSave != this.boardGame){
        this.resetBoard()
      }
      this.saveIndex1=[]
      this.checkWord(this.word[k].split(''))
      this.temp=[]
    }
    return this.result
  }

  checkWord(str, count=0, row=0, col=0){
    debugger
    // console.log(str);
    for (var i = row; i < this.boardGame.length; i++) {
      for (var j = col; j < this.boardGame[i].length; j++) {
        if(this.boardGame[i][j] == str[count]){
          if(this.temp.length == 0){
            this.saveIndex1.push(i)
            this.saveIndex1.push(j)
            this.saveIndex1.push(this.boardGame[i][j])
          }
          this.temp.push(this.boardGame[i][j])
          // console.log(saveIndex1);
          this.boardGame[i][j]=0
          if(count == str.length-1){
            // console.log(this.temp.join(''));
            // console.log(str.join(''));
            if(this.temp.join('') == str.join('')){

              this.result.push(this.temp.join(''));
            }
            break
          }
          this.checkAll(i,j,str[count+1],count,str)
          this.temp = []
          return this.checkWord(str, 0) + this.replace()
        }
      }
    }
  }

  replace(){
    let row = this.saveIndex1[0],
        col = this.saveIndex1[1],
        str = this.saveIndex1[2];
    this.boardGame[row][col] = str;
  }

  checkAll(row, col, strCheck, count,str){
    if(this.checkLeft(row, col-1, strCheck)){
      count++
      return this.checkWord(str, count, row, col-1)
    }
    if(this.checkTop(row-1, col, strCheck)){
      count++
      return this.checkWord(str, count, row-1, col)
    }
    if(this.checkRight(row, col+1, strCheck)){
      count++
      return this.checkWord(str, count, row, col+1)
    }
    if(this.checkBottom(row+1, col, strCheck)){
      count++
      return this.checkWord(str, count, row+1, col)
    }
    if(this.checkLeftTop(row-1, col-1, strCheck)){
      count++
      return this.checkWord(str, count, row-1, col-1)
    }
    if(this.checkRightTop(row-1, col+1, strCheck)){
      count++
      return this.checkWord(str, count, row-1, col+1)
    }
    if(this.checkRightBottom(row+1, col+1, strCheck)){
      count++
      return this.checkWord(str, count, row+1, col+1)
    }
    if(this.checkLeftBottom(row+1, col-1, strCheck)){
      count++
      return this.checkWord(str, count, row+1, col-1)
    }
    return false
  }

  resetBoard(){
    for (var i = 0; i < this.boardGame.length; i++) {
      for (var j = 0; j < this.boardSave.length; j++) {
        if(this.boardGame[i][j] != this.boardSave[i][j]){
          this.boardGame[i][j] = this.boardSave[i][j]
        }
      }
    }
  }

  checkLeft(row, col, strCheck){
    if(this.boardGame[row][col]){
      if(this.boardGame[row][col] == strCheck){
        return true
      }
      return false
    }
  }

  checkTop(row, col, strCheck){
    if(this.boardGame[row]){
      if(this.boardGame[row][col] == strCheck){
        return true
      }
      return false
    }
  }

  checkRight(row, col, strCheck){
    if(this.boardGame[row][col]){
      if(this.boardGame[row][col] == strCheck){
        return true
      }
      return false
    }
  }

  checkBottom(row, col, strCheck){
    if(this.boardGame[row]){
      if(this.boardGame[row][col] == strCheck){
        return true
      }
      return false
    }
  }

  checkLeftTop(row, col, strCheck){
    if(this.boardGame[row]){
      if(this.boardGame[row][col] == strCheck){
        return true
      }
      return false
    }
  }

  checkRightTop(row, col, strCheck){
    if(this.boardGame[row]){
      if(this.boardGame[row][col] == strCheck){
        return true
      }
      return false
    }
  }

  checkRightBottom(row, col, strCheck){
    if(this.boardGame[row]){
      if(this.boardGame[row][col] == strCheck){
        return true
      }
      return false
    }
  }

  checkLeftBottom(row, col, strCheck){
    if(this.boardGame[row]){
      if(this.boardGame[row][col] == strCheck){
        return true
      }
      return false
    }
  }
}

let testCase = require('./data.js');

let wordTes = ['DOWN', 'BOJU', 'GET', 'JOB', 'MENANG']; // word buat tes

// let game = new Boggle(wordTes, 10); // word manual
let game = new Boggle(testCase, 10); // word dari file

console.log('Board Boggle');
// console.log(game.boardTes()); // ---> Board manual
console.log(game.shake()); // ---> Board random
console.log('Word');
console.log(game.solve());
