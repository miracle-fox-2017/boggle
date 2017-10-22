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

	bruteSolve(board = this.board) {
		let kamus = this.data;
		let found = [];
		let search = '';
		let strBoard = this.boardToString(board);

		for (var x = 0; x < kamus.length; x++) {
			let wordSearch = kamus[x];
			let counter = 0;
			let wsArr = wordSearch.split('');

			for (var i = 0; i < strBoard.length; i++) {
				for (var j = 0; j < wordSearch.length; j++) {


					if (wordSearch[j] == strBoard[i]) {
						if (wsArr.indexOf(strBoard[i]) != -1) {
							wsArr.splice(wsArr.indexOf(strBoard[i]), 1);
						}
					}
				}	
			}

		//dt, du, dr, dn
		if (wsArr.length === 0) {
			found.push(wordSearch);
		} else {
			found.push('');
		}
	}	

	console.log('solve()');
	console.log(`${found.length} words found :`);

	for (var xw = 0; xw < found.length; xw++) {
		if (found[xw] !== '') {
			console.log(found[xw]);
		}	
	}
	// return found;
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

	boardToString (board = this.board) {
		let res = [];

		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				res.push(board[i][j]);
			}
		}

		return res;
	}
}


let boggle = new Boggle();
let board = boggle.shake(4);
console.log(board);
// boggle.solve();
boggle.bruteSolve();


