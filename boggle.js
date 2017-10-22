class Boggle
{
  constructor(height, width, wordBank)
  {
    this.board = this.initialize(height, width);
    this.wordBank = wordBank;
  }

  initialize(height, width)
  {
    let arr = [];
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
  'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (let i = 0; i < height ; i++)
    {
      arr.push([]);
      for (var j = 0; j < width ; j++)
      {
        arr[i].push(letters[this.getRandomValue()])
      }
    }
    return arr;
  }

  getRandomValue()
  {
    return Math.floor(Math.random() * (26 - 0) - 0);
  }

  getWords()
  {

  }

  checkSurrounding(y,x)
  {
    let pos = [];
    if ((x - 1) > 0 && (y - 1) > 0)
    {
      
    }
  }

}


let game = new Boggle(5,5);


console.log(game.board);
