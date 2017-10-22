class Boggle{
    constructor(kamus){
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.arrBoard = [];
    }

    random(){
        return Math.floor(((Math.random()*25)));
    }

    shake(board){
        for (let i = 0; i < board;i++){
            this.arrBoard.push([]);
            for (let j = 0; j < board;j++){
                let set = this.random();
                this.arrBoard[i].push(this.alphabet[set - 1]);
            }
        }
        return this.arrBoard;
    }
}

let boggle = new Boggle();

// console.log(boggle.arrBoard);

console.log(boggle.shake(4));
