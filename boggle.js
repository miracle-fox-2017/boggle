class Boggle {
    constructor(kamus) {
        this.abjad = 'DGHIKLPSYEUTEORN';
        this.papan = [];
        this.kamus = ['APPLE', 'TURN', 'PUT', 'SIT', 'TRIP']
        this.arrHasil = [];
    }

    shake(number) {
        // let huruf = this.abjad.split("");
        // for (let i = 0; i < number; i++) {
        //     let row = []
        //     for (let j = 0; j < number; j++) {
        //         row.push(this.abjad[Math.floor(Math.random() * 25) + 1])
        //     }
        //     this.papan.push(row)
        // }
        // return this.papan;

        let huruf = this.abjad.split("");
        for (let i = 0; i < number; i++) {
            this.papan.push(huruf.splice(0, number));
        }
        return this.papan;
    }

    solve() {
        let cek = false;
        let rowKamus = 1;
        let indexKata = ''
        let indexRowKamus = 0;

        while (this.kamus.length > indexRowKamus) {
            let indexColKamus = 1;
            // while (this.kamus.length > indexColKamus) {
            let hasil = ''
            for (let i = 0; i < this.papan.length; i++) {
                for (let j = 0; j < this.papan.length; j++) {
                    if (this.kamus[indexRowKamus][0] == this.papan[i][j]) {
                        hasil += this.papan[i][j]
                        indexKata = this.papan[i][j]
                        //console.log(hasil)
                        //this.arrHasil.push([hasil])
                        while (!cek && this.kamus[indexRowKamus].length >= indexColKamus) {
                            // if (indexKata == this.papan[i][j]) {
                            let kataKamus = this.kamus[indexRowKamus][indexColKamus]
                            if (i == 0 && j == 0) {
                                if (this.cekKanan(kataKamus, i, j)) {
                                    hasil += this.cekKanan(kataKamus, i, j)
                                    indexKata = this.cekKanan(kataKamus, i, j)
                                } else if (this.cekBawahKanan(kataKamus, i, j)) {
                                    hasil += this.cekBawahKanan(kataKamus, i, j)
                                    indexKata = this.cekBawahKanan(kataKamus, i, j)
                                } else if (this.cekBawah(kataKamus, i, j)) {
                                    hasil += this.cekBawah(kataKamus, i, j)
                                    indexKata = this.cekBawah(kataKamus, i, j)
                                }
                            } else if (i == 0 && j == this.papan.length - 1) {
                                if (this.cekKiri(kataKamus, i, j)) {
                                    hasil += this.cekKiri(kataKamus, i, j)
                                    indexKata = this.cekKiri(kataKamus, i, j)
                                } else if (this.cekBawahKiri(kataKamus, i, j)) {
                                    hasil += this.cekBawahKiri(kataKamus, i, j)
                                    indexKata = this.cekBawahKiri(kataKamus, i, j)
                                } else if (this.cekBawah(kataKamus, i, j)) {
                                    hasil += this.cekBawah(kataKamus, i, j)
                                    indexKata = this.cekBawah(kataKamus, i, j)
                                }
                            } else if (i == this.papan.length - 1 && j == 0) {
                                if (this.cekAtas(kataKamus, i, j)) {
                                    hasil += this.cekAtas(kataKamus, i, j)
                                    indexKata = this.cekAtas(kataKamus, i, j)
                                } else if (this.cekKanan(kataKamus, i, j)) {
                                    hasil += this.cekKanan(kataKamus, i, j)
                                    indexKata = this.cekKanan(kataKamus, i, j)
                                } else if (this.cekAtasKanan(kataKamus, i, j)) {
                                    hasil += this.cekAtasKanan(kataKamus, i, j)
                                    indexKata = this.cekAtasKanan(kataKamus, i, j)
                                }
                            } else if (i == this.papan.length - 1 && j == this.papan.length - 1) {
                                if (this.cekAtas(kataKamus, i, j)) {
                                    hasil += this.cekAtas(kataKamus, i, j)
                                    indexKata = this.cekAtas(kataKamus, i, j)
                                } else if (this.cekKiri(kataKamus, i, j)) {
                                    hasil += this.cekKiri(kataKamus, i, j)
                                    indexKata = this.cekKiri(kataKamus, i, j)
                                } else if (this.cekAtasKiri(kataKamus, i, j)) {
                                    hasil += this.cekAtasKiri(kataKamus, i, j)
                                    indexKata = this.cekAtasKiri(kataKamus, i, j)
                                }
                            } else if (i == 0) {
                                if (this.cekBawah(kataKamus, i, j)) {
                                    hasil += this.cekBawah(kataKamus, i, j)
                                    indexKata = this.cekBawah(kataKamus, i, j)
                                } else if (this.cekKiri(kataKamus, i, j)) {
                                    hasil += this.cekKiri(kataKamus, i, j)
                                    indexKata = this.cekKiri(kataKamus, i, j)
                                } else if (this.cekKanan(kataKamus, i, j)) {
                                    hasil += this.cekKanan(kataKamus, i, j)
                                    indexKata = this.cekKanan(kataKamus, i, j)
                                } else if (this.cekBawahKiri(kataKamus, i, j)) {
                                    hasil += this.cekBawahKiri(kataKamus, i, j)
                                    indexKata = this.cekBawahKiri(kataKamus, i, j)
                                } else if (this.cekBawahKanan(kataKamus, i, j)) {
                                    hasil += this.cekBawahKanan(kataKamus, i, j)
                                    indexKata = this.cekBawahKanan(kataKamus, i, j)
                                }
                            } else if (j == 0) {
                                if (this.cekAtas(kataKamus, i, j)) {
                                    hasil += this.cekAtas(kataKamus, i, j)
                                    indexKata = this.cekAtas(kataKamus, i, j)
                                } else if (this.cekBawah(kataKamus, i, j)) {
                                    hasil += this.cekBawah(kataKamus, i, j)
                                    indexKata = this.cekBawah(kataKamus, i, j)
                                } else if (this.cekKanan(kataKamus, i, j)) {
                                    hasil += this.cekKanan(kataKamus, i, j)
                                    indexKata = this.cekKanan(kataKamus, i, j)
                                } else if (this.cekBawahKanan(kataKamus, i, j)) {
                                    hasil += this.cekBawahKanan(kataKamus, i, j)
                                    indexKata = this.cekBawahKanan(kataKamus, i, j)
                                } else if (this.cekAtasKanan(kataKamus, i, j)) {
                                    hasil += this.cekAtasKanan(kataKamus, i, j)
                                    indexKata = this.cekAtasKanan(kataKamus, i, j)
                                }
                            } else if (i == this.papan.length - 1) {
                                if (this.cekAtas(kataKamus, i, j)) {
                                    hasil += this.cekAtas(kataKamus, i, j)
                                    indexKata = this.cekAtas(kataKamus, i, j)
                                } else if (this.cekKiri(kataKamus, i, j)) {
                                    hasil += this.cekKiri(kataKamus, i, j)
                                    indexKata = this.cekKiri(kataKamus, i, j)
                                } else if (this.cekAtasKiri(kataKamus, i, j)) {
                                    hasil += this.cekAtasKiri(kataKamus, i, j)
                                    indexKata = this.cekAtasKiri(kataKamus, i, j)
                                } else if (this.cekKanan(kataKamus, i, j)) {
                                    hasil += this.cekKanan(kataKamus, i, j)
                                    indexKata = this.cekKanan(kataKamus, i, j)
                                } else if (this.cekAtasKanan(kataKamus, i, j)) {
                                    hasil += this.cekAtasKanan(kataKamus, i, j)
                                    indexKata = this.cekAtasKanan(kataKamus, i, j)
                                }
                            } else if (j == this.papan.length - 1) {
                                if (this.cekAtas(kataKamus, i, j)) {
                                    hasil += this.cekAtas(kataKamus, i, j)
                                    indexKata = this.cekAtas(kataKamus, i, j)
                                } else if (this.cekKiri(kataKamus, i, j)) {
                                    hasil += this.cekKiri(kataKamus, i, j)
                                    indexKata = this.cekKiri(kataKamus, i, j)
                                } else if (this.cekAtasKiri(kataKamus, i, j)) {
                                    hasil += this.cekAtasKiri(kataKamus, i, j)
                                    indexKata = this.cekAtasKiri(kataKamus, i, j)
                                } else if (this.cekBawahKiri(kataKamus, i, j)) {
                                    hasil += this.cekBawahKiri(kataKamus, i, j)
                                    indexKata = this.cekBawahKiri(kataKamus, i, j)
                                } else if (this.cekBawah(kataKamus, i, j)) {
                                    hasil += this.cekBawah(kataKamus, i, j)
                                    indexKata = this.cekBawah(kataKamus, i, j)
                                }
                            } else {

                                if (this.cekAtas(kataKamus, i, j)) {
                                    hasil += this.cekAtas(kataKamus, i, j)
                                    indexKata = this.cekAtas(kataKamus, i, j)
                                } else if (this.cekKiri(kataKamus, i, j)) {
                                    hasil += this.cekKiri(kataKamus, i, j)
                                    indexKata = this.cekKiri(kataKamus, i, j)
                                } else if (this.cekAtasKiri(kataKamus, i, j)) {
                                    hasil += this.cekAtasKiri(kataKamus, i, j)
                                    indexKata = this.cekAtasKiri(kataKamus, i, j)
                                } else if (this.cekBawahKiri(kataKamus, i, j)) {
                                    hasil += this.cekBawahKiri(kataKamus, i, j)
                                    indexKata = this.cekBawahKiri(kataKamus, i, j)
                                } else if (this.cekBawah(kataKamus, i, j)) {
                                    // console.log("Haiii masuk bawah nih======", kataKamus)
                                    hasil += this.cekBawah(kataKamus, i, j)
                                    indexKata = this.cekBawah(kataKamus, i, j)
                                } else if (this.cekKanan(kataKamus, i, j)) {
                                    hasil += this.cekKanan(kataKamus, i, j)
                                    indexKata = this.cekKanan(kataKamus, i, j)
                                } else if (this.cekAtasKanan(kataKamus, i, j)) {
                                    hasil += this.cekAtasKanan(kataKamus, i, j)
                                    indexKata = this.cekAtasKanan(kataKamus, i, j)
                                } else if (this.cekBawahKanan(kataKamus, i, j)) {
                                    hasil += this.cekBawahKanan(kataKamus, i, j)
                                    indexKata = this.cekBawahKanan(kataKamus, i, j)
                                }
                            }

                            // }

                            indexColKamus++
                        }

                    }
                }
            }
            //  indexColKamus++
            //}
            //console.log(hasil)
            indexRowKamus++
            if (this.kamus.includes(hasil)) {
                this.arrHasil.push([hasil])
                console.log(hasil)
            }

        }
        console.log(`Found ${this.arrHasil.length} words`)
        return this.arrHasil;

    }
    dictionary() {
        let indexKamus = Math.floor(Math.random() * (this.kamus.length - 1) + 1)
        for (let i = 0; i < indexKamus; i++) {
            this.kamus.push(this.kamus[i])
        }
        return this.kamus
    }


    cekAtas(huruf, baris, kolom) {
        if (this.papan[baris - 1][kolom] == huruf) {
            return this.papan[baris - 1][kolom]
        }
    }

    cekBawah(huruf, baris, kolom) {
        if (this.papan[baris + 1][kolom] == huruf) {
            return this.papan[baris + 1][kolom]
            //     return true;
            // } else {
            //     return false;
        }
    }

    cekKanan(huruf, baris, kolom) {
        if (this.papan[baris][kolom + 1] == huruf) {
            return huruf
            //     return true;
            // } else {
            //     return false;
        }
    }
    cekKiri(huruf, baris, kolom) {
        if (this.papan[baris][kolom - 1] == huruf) {
            return this.papan[baris][kolom - 1]
            // //     return true;
            // // } else {
            //     return false;
        }
    }
    cekAtasKiri(huruf, baris, kolom) {
        if (this.papan[baris - 1][kolom - 1] == huruf) {
            return this.papan[baris - 1][kolom - 1]
            //     return true;
            // } else {
            //     return false;
        }
    }
    cekAtasKanan(huruf, baris, kolom) {
        if (this.papan[baris - 1][kolom + 1] == huruf) {
            return this.papan[baris - 1][kolom + 1]
            // } else {
            //     return false;
        }
    }
    cekBawahKiri(huruf, baris, kolom) {
        if (this.papan[baris + 1][kolom - 1] == huruf) {
            return this.papan[baris + 1][kolom - 1]
            // } else {
            //     return false;
        }
    }
    cekBawahKanan(huruf, baris, kolom) {
        if (this.papan[baris + 1][kolom + 1] == huruf) {
            return this.papan[baris + 1][kolom + 1]
            // } else {
            //     return false;
        }
    }
    cekSudahDilewati() {

    }
}


const dataKamus = require('./data')

let play = new Boggle(dataKamus);
play.dictionary()
console.log(play.shake(4));
console.log(play.solve());
// console.log(play.cekAtas('L', 2, 1));
// console.log(play.cekBawah('O', 2, 1));
// console.log(play.cekAtasKiri('K', 2, 1));
// console.log(play.cekAtasKanan('P', 2, 1));
// console.log(play.cekBawahKiri('E', 2, 1));
// console.log(play.cekBawahKanan('R', 2, 1));
// console.log(play.cekKiri('Y', 2, 1));
// console.log(play.cekKanan('U', 2, 1));