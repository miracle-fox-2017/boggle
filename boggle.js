class Boggle {
	constructor() {
		this.data = require('./data.js');;
		this.board = [];
	}

	shake(num) {
		let arrBoard = [];

		for (var i = 0; i < num; i++) {
			arrBoard.push([]);

			for (var j = 0; j < num; j++){
				arrBoard[i].push(String.fromCharCode(this.getRandomIntInclusive(65,90)))
			}
		}

		this.board = arrBoard;

		return arrBoard;
	}

	isOnDictionary(word = '', dictionary = this.data) {
		return dictionary.indexOf(word) <= 0 ? true : false ;
	}

	solve(board = this.board){
		let boggleDictionary = this.createBoggleDictionary();
		let boardJoin = [];
		let wordFound = [];
		
		// Ubah board array jadi array berurutan 
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				boardJoin.push(board[i][j]);
			}
		}

		// Cari huruf yang ada di papan boggle apakah sama dengan huruf dikamus. 
		// Jika ya, tambahkan counter pada object dictionary
		for (var x  = 0; x < boardJoin.length; x++) {
			for (var y = 0; y < boggleDictionary.length; y++) {
				if (boggleDictionary[y].name.indexOf(boardJoin[x]) == 0) {
					boggleDictionary[y].count += 1;
				}
			}
		}

		// Cari object dictionary yang panjang huruf dan count nya sama,
		// Maka itulah kata kata yang berhasil ditemukan
		for (var x = 0; x < boggleDictionary.length; x++) { 
			if (boggleDictionary[x].length === boggleDictionary[x].count) {
				wordFound.push(boggleDictionary[x].name);
			}
		}
		console.log('solve()');
		console.log(`${wordFound.length} words found :`);

		for (var xw = 0; xw < wordFound.length; xw++) {
			console.log(wordFound[xw]);
		}
	}

	createBoggleDictionary() {
		let arr = this.data;
		let arrKamus = [];

		for (var i = 0; i < arr.length; i++) {
			let obj = {};
			obj.name = arr[i];
			obj.length = arr[i].length;
			obj.count = 0;
			arrKamus.push(obj);	
		}

		return arrKamus;
	}

	getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
	  	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
	}
}


let boggle = new Boggle();
let board = boggle.shake(4);
boggle.solve();

// console.log(boggle.isOnDictionary('VLA'));

