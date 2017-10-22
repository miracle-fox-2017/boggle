"use strict"

class Boogle {
	constructor(kamus, papan = []) {
		this.kamus = kamus
		this.papan = papan

	}

	shake(ukuran) {
		for(let i = 0; i < ukuran; i++) {
			let row = []
			for(let j = 0; j < ukuran; j++) {
				let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
				let random = Math.floor(Math.random() * abjad.length) 
				row.push(abjad[random])
			}
			this.papan.push(row)
		}
		return this.papan
	}

	solver() {
		for(let i = 0; i < this.papan.length; i++) {
			if(this.kamus.indexOf(this.papan[0][j]) == ) {

			}
		}
	}
}

let kamus = 'SUPER'
let papanTest = [
	['D', 'G', 'H', 'I'],
	['K', 'L', 'P', 'S'],
	['Y', 'E', 'U', 'T'],
	['E', 'O', 'R', 'N']
]

let boogle = new Boogle(kamus, papanTest)
console.log(boogle.papan)
