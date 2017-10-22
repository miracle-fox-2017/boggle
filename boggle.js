class boggle {
    constructor() {
        this.board = [];
        this.kamus = ['APPLE','SIT','TRIP','TURN','SUPER']
        this.possibleWord = []
       
    }

    shake(input) {
        let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (var i = 0; i < input; i++) {
            let nestArr = [];
            for (var j = 0; j < input; j++) {
                nestArr.push(abjad.charAt(Math.floor(Math.random() * abjad.length)));
            }
            this.board.push(nestArr)
        }
        console.log(this.board)

    }
    solve(){
        for(var i = 0; i < this.board.length;i++){
            for(var j = 0; j < this.board[j].length;j++){}
              this.getWord(this.board[i][j])  //ambil kata dari kamus yang punya huruf ini
              this.checkHurufKedua(i,j)
        }   
    }
    getWord(i, j, value){ //check each string
    for(var i = 0; i < this.kamus.length;i++){
        for(var j = 0; j < this.kamus[i].length;j++){
            if(this.possibleWord.indexOf(value) == this.kamus[i][j]){
                this.possibleWord.push(this.kamus[i][j])
            }
        }
    }
    return this.possibleWord
    }
    checkHurufKedua(i,j){
        //[[i-1][j-1] [i-1][j] [i-1][j+1]
        //   [i][j-1]   [i][j]   [i][j+1]
        // [i+1][j-1] [i+1][j] [i+1][j+1]
    }
}
// let driver_code = require('./data.js');
let game = new boggle()
game.shake(4)