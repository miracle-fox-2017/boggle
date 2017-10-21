var data = require('./data.js');

class Boggle {
	constructor() {}

	shake() {
		let arrBoard = [];

		for (var i = 0; i < 5; i++) {
			arrBoard.push([]);

			for (var j = 0; j < 5; j++){
				arrBoard[i].push(String.fromCharCode(this.getRandomIntInclusive(65,90)))
			}
		}

		return arrBoard;
	}

	getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
	  	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
	}
}





// console.log('Z'.charCodeAt());
// console.log(String.fromCharCode(65))
let boggle = new Boggle();
console.log(boggle.shake());