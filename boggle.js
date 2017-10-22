const data = require('./data')

class Boggle {
    constructor(dictionary) {
        this.abjad = 'TFUIKRPSYEUTEORN';
        this.papan = [];
        this.kamus = ['FRUIT', 'TURN', 'PUT', 'SIT', 'TRIP']
        this.arrHasil = [];
    }

    shake(number) {
        let huruf = this.abjad.split("");
        for (let i = 0; i < number; i++) {
            this.papan.push(huruf.splice(0, number));
        }
        return this.papan;
    }

	cekAtas(huruf, baris, kolom) {
	        if (this.papan[baris - 1][kolom] == huruf) {
	            return this.papan[baris - 1][kolom]
	        }
	    }
	cekKanan(huruf, baris, kolom) {
        if (this.papan[baris][kolom + 1] == huruf) {
            return huruf
            
        }
    }
    cekKiri(huruf, baris, kolom) {
        if (this.papan[baris][kolom - 1] == huruf) {
            return this.papan[baris][kolom - 1]
            
        }
    }
    cekAtasKiri(huruf, baris, kolom) {
        if (this.papan[baris - 1][kolom - 1] == huruf) {
            return this.papan[baris - 1][kolom - 1]
           
        }
    }
    cekAtasKanan(huruf, baris, kolom) {
        if (this.papan[baris - 1][kolom + 1] == huruf) {
            return this.papan[baris - 1][kolom + 1]
           
        }
    }
    cekBawahKiri(huruf, baris, kolom) {
        if (this.papan[baris + 1][kolom - 1] == huruf) {
            return this.papan[baris + 1][kolom - 1]
            
        }
    }
    cekBawahKanan(huruf, baris, kolom) {
        if (this.papan[baris + 1][kolom + 1] == huruf) {
            return this.papan[baris + 1][kolom + 1]
        
        }
    }

	 cekBawah(huruf, baris, kolom) {
        if (this.papan[baris + 1][kolom] == huruf) {
            return this.papan[baris + 1][kolom]
        }
    }

    kosakata() {
        let indexKamus = Math.floor(Math.random() * (this.kamus.length - 1) + 1)
        for (let i = 0; i < indexKamus; i++) {
            this.kamus.push(this.kamus[i])
        }
        return this.kamus
    }


}


let play = new Boggle(data);
play.kosakata()
console.log(play.shake(4));