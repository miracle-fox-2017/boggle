class Boggle {
  constructor(word){
    this.word = word
    this.boardSave = []
    this.boardGame = []
    this.temp = []
    this.result = []
    this.saveIndex1 = []
  }

  shake(boardScale){ // board random
    let abj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < boardScale; i++) {
      let row = []
      for (var j = 0; j < boardScale; j++) {
        let random = Math.floor(Math.random(0)*abj.length)
        row.push(abj[random])
      }
      this.boardGame.push(row)
      this.boardSave.push(row)
    }
    return this.boardGame
  }

  boardTes(){ // board buat tes
    this.boardSave = [['D', 'B', 'O', 'U'],
                      ['O', 'W', 'J', 'G'],
                      ['I', 'E', 'N', 'G'],
                      ['M', 'I', 'A', 'N']]
    this.boardGame = [['D', 'B', 'O', 'U'],
                      ['O', 'W', 'J', 'G'],
                      ['I', 'E', 'N', 'G'],
                      ['M', 'I', 'A', 'N']]
    return this.boardGame
  }

  solve(){
    for (var k = 0; k < this.word.length; k++) {
      if(this.boardSave != this.boardGame){
        this.resetBoard() // reset board sebelum cek kata selanjutnya
      }
      this.saveIndex1=[]
      this.checkWord(this.word[k].split('')) // memanggil method cek kata
      this.temp=[]
    }
    return `${this.result.length} words found:\n${this.result.join('\n')}`
  }

  checkWord(str, count=0, row=0, col=0){
    debugger
    for (var i = row; i < this.boardGame.length; i++) {
      for (var j = col; j < this.boardGame[i].length; j++) {
        if(this.boardGame[i][j] == str[count]){ // menyimpan index dan huruf pertama dari kata yg di cek
          if(this.temp.length == 0){
            this.saveIndex1.push(i)
            this.saveIndex1.push(j)
            this.saveIndex1.push(this.boardGame[i][j])
          }
          this.temp.push(this.boardGame[i][j]) // huruf yg cocok simpan di temp
          this.boardGame[i][j]=0
          if(count == str.length-1){
            if(this.temp.join('') == str.join('')){ // jika isi temp sama dengan kata simpan di result

              this.result.push(this.temp.join(''));
            }
            break
          }
          this.checkAll(i,j,str[count+1],count,str) // memanggil method cek di 360 derajat
          this.temp = []
          return this.checkWord(str, 0) + this.replace()
        }
      }
    }
  }

  replace(){ // replace huruf yg sudah ditandai menjadi belum ditandai
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

let wordTes = ['DOWN', 'BOJU', 'MENGGU', 'JOB', 'MENANG', 'WENANG']; // word buat tes

// let game = new Boggle(wordTes); // word manual
let game = new Boggle(testCase); // word dari file

console.log('Board Boggle');
console.log(game.boardTes()); // ---> Board manual
// console.log(game.shake(4)); // ---> Board random (ukuran bisa ditentukan)
console.log('Word');
console.log(game.solve());
