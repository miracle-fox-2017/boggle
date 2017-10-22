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

    cekHurufpertama() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.arrBoard[i][j] === this.kamusData[0]) {
                    let lokasiHuruf = i + '' + j;
                    this.simpanHuruf.push(lokasiHuruf);
                    for (let k = 1; k < this.kamusData.length; k++) {
                        this.cekHuruf(this.simpanHuruf[k - 1], k);
                    }

                }
            }
        }
        if (this.simpanHuruf.length === this.kamusData.length) {
            return true;
        } else {
            return false;
        }

    }

    cekHuruf(lokasi, pjngHuruf) {
        let baris = lokasi[0] - 1;
        let kolom = lokasi[1] - 1;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.arrBoard[baris + i][kolom + j] === this.kamusData[pjngHuruf]) {
                    let getLokasi = (baris + i) + '' + (kolom + j);
                    this.simpanHuruf.push(getLokasi);
                    console.log(this.simpanHuruf);
                }
            }
        }
        // console.log(baris+' getLokasi '+kolom);
    }

}

/*
bilanga data blm bisa solver sama sekali
*/

const words = require('./data.js');

console.log(words[1]);

let boggle = new Boggle('TURN');

// console.log(boggle.arrBoard);

console.log(boggle.shake(4));

console.log(boggle.cekHurufpertama());