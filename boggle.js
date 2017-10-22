class Boggle {
    constructor(kamus) {
        this.abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.papan = [];
        this.kamus = kamus
        this.hasil = ''
        this.wordsHasil = []
        //this.kamus = kamus
        this.arrHasil = [];
        this.indexKata = []
    }

    shake(number) {
        // let huruf = this.abjad.split("");
        for (let i = 0; i < number; i++) {
            let row = []
            for (let j = 0; j < number; j++) {
                row.push(this.abjad[Math.floor(Math.random() * 25) + 1])
            }
            this.papan.push(row)
        }
        return this.papan;

        // let huruf = this.abjad.split("");
        // for (let i = 0; i < number; i++) {
        //     this.papan.push(huruf.splice(0, number));
        // }
        // return this.papan;
    }

    solve() {
        let indexRowKamus = 0;
        while (indexRowKamus < this.kamus.length) {
            this.hasil = ''
            let indexColKamus = 1;
            for (let i = 0; i < this.papan.length; i++) {
                for (let j = 0; j < this.papan.length; j++) {
                    if (this.kamus[indexRowKamus][0] == this.papan[i][j]) {
                        this.hasil += this.papan[i][j]
                        //  this.arrHasil.push([this.hasil])
                        this.indexKata = [[i, j]]
                        this.trackKata(this.kamus[indexRowKamus])
                        break

                    }
                }
            }
            indexRowKamus++
        }

        for (let k = 0; k < this.arrHasil.length; k++) {
            if (this.kamus.includes(this.arrHasil[k])) {
                this.wordsHasil.push(this.arrHasil[k])
            }
        }
        console.log(`${this.wordsHasil.length} words found`)
        return this.wordsHasil.join(", ")

    }

    trackKata(rowKamus) {
        let indexColKamus = 1;
        while (indexColKamus < rowKamus.length) {
            let kataKamus = rowKamus[indexColKamus]
            for (let i = 0; i < this.indexKata.length; i++) {
                let baris = this.indexKata[this.indexKata.length - 1][0]
                let kolom = this.indexKata[this.indexKata.length - 1][1]
                if (baris == 0 && kolom == 0) {
                    if (this.cekKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris][kolom + 1]
                    } else if (this.cekBawahKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom + 1]
                    } else if (this.cekBawah(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom]
                    }
                } else if (baris == 0 && kolom == this.papan.length - 1) {
                    if (this.cekKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris][kolom - 1]
                    } else if (this.cekBawahKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom - 1]
                    } else if (this.cekBawah(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom]
                    }
                } else if (baris == this.papan.length - 1 && kolom == 0) {
                    if (this.cekAtas(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom]
                    } else if (this.cekKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris][kolom + 1]
                    } else if (this.cekAtasKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom + 1]
                    }
                } else if (baris == this.papan.length - 1 && kolom == this.papan.length - 1) {
                    if (this.cekAtas(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom]
                    } else if (this.cekKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris][kolom - 1]
                    } else if (this.cekAtasKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom - 1]
                    }
                } else if (baris == 0) {
                    if (this.cekBawah(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom]
                    } else if (this.cekKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris][kolom - 1]
                    } else if (this.cekKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris][kolom + 1]
                    } else if (this.cekBawahKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom - 1]
                    } else if (this.cekBawahKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom + 1]
                    }
                } else if (kolom == 0) {
                    if (this.cekAtas(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom]
                    } else if (this.cekBawah(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom]
                    } else if (this.cekKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris][kolom + 1]
                    } else if (this.cekBawahKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom + 1]
                    } else if (this.cekAtasKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom + 1]
                    }
                } else if (baris == this.papan.length - 1) {
                    if (this.cekAtas(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom]
                    } else if (this.cekKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris][kolom - 1]
                    } else if (this.cekAtasKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom - 1]
                    } else if (this.cekKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris][kolom + 1]
                    } else if (this.cekAtasKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom + 1]
                    }
                }
                else if (kolom == this.papan.length - 1) {
                    if (this.cekAtas(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom]
                    } else if (this.cekKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris][kolom - 1]
                    } else if (this.cekAtasKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom - 1]
                    } else if (this.cekBawahKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom - 1]
                    } else if (this.cekBawah(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom]
                    }

                } else {
                    if (this.cekAtas(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom]
                    } else if (this.cekKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris][kolom - 1]
                    } else if (this.cekAtasKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom - 1]
                    } else if (this.cekBawahKiri(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom - 1]
                    } else if (this.cekBawah(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom]
                    } else if (this.cekKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris][kolom + 1]
                    } else if (this.cekAtasKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris - 1][kolom + 1]
                    } else if (this.cekBawahKanan(kataKamus, baris, kolom)) {
                        this.hasil += this.papan[baris + 1][kolom + 1]
                    }
                }

            }

            indexColKamus++
        }
        if (this.arrHasil.indexOf(this.hasil) == -1) {

            this.arrHasil.push(this.hasil)
        }
        return this.arrHasil

    }


    cekAtas(huruf, baris, kolom) {
        if (this.papan[baris - 1][kolom] == huruf && this.cekSudahDilewati(baris - 1, kolom)) {
            this.indexKata.push([baris - 1, kolom])
            return true
        }
    }

    cekBawah(huruf, baris, kolom) {
        if (this.papan[baris + 1][kolom] == huruf && this.cekSudahDilewati(baris + 1, kolom)) {
            this.indexKata.push([baris + 1, kolom])
            return true
        }
    }

    cekKanan(huruf, baris, kolom) {
        if (this.papan[baris][kolom + 1] == huruf && this.cekSudahDilewati(baris, kolom + 1)) {
            this.indexKata.push([baris, kolom + 1])
            return true
        }
    }
    cekKiri(huruf, baris, kolom) {
        if (this.papan[baris][kolom - 1] == huruf && this.cekSudahDilewati(baris, kolom - 1)) {
            this.indexKata.push([baris, kolom - 1])
            return true
        }
    }
    cekAtasKiri(huruf, baris, kolom) {
        if (this.papan[baris - 1][kolom - 1] == huruf && this.cekSudahDilewati(baris - 1, kolom - 1)) {
            this.indexKata.push([baris - 1, kolom - 1])
            return true
        }
    }
    cekAtasKanan(huruf, baris, kolom) {
        if (this.papan[baris - 1][kolom + 1] == huruf && this.cekSudahDilewati(baris - 1, kolom + 1)) {
            this.indexKata.push([baris - 1, kolom + 1])
            return true

        }
    }
    cekBawahKiri(huruf, baris, kolom) {
        if (this.papan[baris + 1][kolom - 1] == huruf && this.cekSudahDilewati(baris + 1, kolom - 1)) {
            this.indexKata.push([baris + 1, kolom - 1])
            return true
        }
    }
    cekBawahKanan(huruf, baris, kolom) {
        if (this.papan[baris + 1][kolom + 1] == huruf && this.cekSudahDilewati(baris + 1, kolom + 1)) {
            this.indexKata.push([baris + 1, kolom + 1])
            return true
        }
    }
    cekSudahDilewati(baris, kolom) {

        for (let i = 0; i < this.indexKata.length; i++) {
            let row = this.indexKata[i][0]
            let col = this.indexKata[i][1]
            if (baris === row && kolom === col) {
                return false
            }
        }
        return true;
    }
}


const dataKamus = require('./data')

let play = new Boggle(dataKamus);
//play.dictionary()
console.log(play.shake(4));

console.log(play.solve());
// play.solve()
// console.log(play.cekAtas('L', 2, 1));
// console.log(play.cekBawah('O', 2, 1));
// console.log(play.cekAtasKiri('K', 2, 1));
// console.log(play.cekAtasKanan('P', 2, 1));
// console.log(play.cekBawahKiri('E', 2, 1));
// console.log(play.cekBawahKanan('R', 2, 1));
// console.log(play.cekKiri('Y', 2, 1));
// console.log(play.cekKanan('U', 2, 1));
