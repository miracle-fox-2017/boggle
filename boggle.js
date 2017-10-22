class Boggle
{
  constructor()
  {
    // this.kamus = this.dictionary()
  }

  board()
  {
    let arr = []
    for(let i = 0; i < 4; i++)
    {
      arr.push([])
      for(let j = 0; j < 4; j++)
      {
        arr[i].push(this.random_alpha())
      }
    }
    return arr
  }

  // dictionary()
  // {
  //   var data = require('./data.js')
  //   return data
  // }

  random_alpha()
  {
    let alpha_bank = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let letter = alpha_bank[Math.floor(Math.random()* alpha_bank.length)]
    return letter
  }
}

var data = require('./data.js')

var game = new Boggle

console.log(data.word[7])
// console.log(game.kamus[7]);
// console.log(game.random_alpha())
console.log(game.board())
