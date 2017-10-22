class Boggle{
    constructor(dataKamus){
        this.abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.kamusData = dataKamus;
        this.arrBoard = [];
        this.simpanHuruf = [];
    }

    acakHuruf(){
        return Math.floor(((Math.random()*25)+1));
    }

    shake(jmlPapan){
        for (let i = 0; i < jmlPapan;i++){
            this.arrBoard.push([]);
            for (let j = 0; j < jmlPapan;j++){
                let set = this.acakHuruf();
                this.arrBoard[i].push(this.abjad[set - 1]);
            }
        }
        return this.arrBoard;
    }

    

}

let boggle = new Boggle('TURN');

// console.log(boggle.arrBoard);

console.log(boggle.shake(4));