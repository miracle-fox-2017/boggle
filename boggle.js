const words = require('./data.js');

class Boggle {
  constructor(){
    this.play = [];
    this.result = [];
  }

  testBoard(){
    let board = [
      ['A', 'B', 'A', 'H'],
      ['S', 'B', 'G', 'S'],
      ['A', 'D', 'K', 'N'],
      ['L', 'I', 'A', 'Y']
    ]
    this.play = board;
  }

  shake(num){
    let board = [];
    for(let i = 0; i<num; i++){
      board.push([]);
      for(let j = 0; j<num; j++){
        board[i].push(this.randomC());
      }
    }
    this.play = board;
  }

  randomC(){
    //random antara 65 - 90 dalam char ascii A-Z (kapital)
    let min = 65;
    let max = 90;
    let rNum = Math.floor(Math.random()*(max-min+1)+min);
    return String.fromCharCode(rNum);
  }

  words(){
    let result = []
    for(let i =0; i<words.length; i++){
      result.push(words[i]);
    }
    return result;
  }

  solve(){
    let board = this.play;
    let words = this.words();
    let db = [];
    //ambil satu persatu words
    for(let i = 0; i< words.length; i++){
      //ambil satu persatu karakter
      db = [];
      for(let j = 0; j< words[i].length; j++){

        let charCheck = words[i][j];

        //kalau tidak ketemu charnya break; lanjut ke kata berikutnya
        if(this.cekChar(charCheck)){
          // console.log('breaked', words[i]);
          break;
        }

        let charPos = this.cekPos(charCheck);
        // console.log(charCheck);
        // console.log(charPos);


        //cek posisi kalau udah ada di db ga usah di push lagi
        if(db[charCheck] == null){
          db[charCheck] = charPos;
        }


        //cek yang pertama pada last char
        if(j == words[i].length-1){
          this.cekPerChar(words[i],db);

        }
      }
    }

    // console.log(db);
    console.log(board);
    this.printResult();
    return "";
  }

  printResult(){
    console.log(this.result.length, ' word found:');
    for(let i = 0; i<this.result.length; i++){
      console.log(this.result[i]);
    }
  }

  cekChar(char){
    let board = this.play;
    for(let i= 0; i<board.length; i++){
      for(let j= 0; j<board[i].length; j++){
        if(char == board[i][j]){
          return false;
        }
      }
    }
    return true;
  }

  cekPos(word){
    let board = this.play;
    let pos = [];
    for(let i= 0; i<board.length; i++){
      for(let j= 0; j<board[i].length; j++){
        if(word == board[i][j]){
          pos.push([i,j]);
        }
      }
    }

    return pos;
  }

  cekPerChar(word, db){
    //loop per posisi A
    let count = 0;
    for(let i =0; i<word.length-1; i++){
      // console.log(db[word[i]][0]);
      let now = db[word[i]][0];
      let next = db[word[i+1]][0];
      // console.log(now[0], next[0]);
      //cek X now[0]-1 <= next[0] && next[0] <= now[0]+1
      //cek Y now[1]-1 <= next[1] && next[1] <= now[1]+1
      if(now == undefined || next == undefined){
        break;
      }
      if(now[0]-1 <= next[0] && next[0] <= now[0]+1 && now[1]-1 <= next[1] && next[1] <= now[1]+1){
        // console.log(now, next);
        // console.log('masuk');
        count += 1;

        //penghapusan yang pertama
        db[word[i]].shift();
      }
    }
    // console.log(db[word[0]]);
    if(count == word.length-1){
      this.result.push(word)
    }

    return '';
    //hapus dari db
    // console.log(db['A'].indexOf(db['A'][0]));
  }
}

let Game = new Boggle();
// console.log(Game.shake(4));
// Game.testBoard();
Game.shake(4);
Game.solve();
