class Boggle {
  constructor(){
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.boxBoggle = []
  }

  shake (box){
    var random;

    for(let i = 0; i < box; i++){
      this.boxBoggle.push([])
      for(let j = 0; j < box; j++){
        random = this.alphabet[Math.floor(Math.random() *this.alphabet.length)]
        this.boxBoggle[i].push(random)
      }

    }
    return this.boxBoggle
  }
}

var boggle = new Boggle()
console.log(boggle.shake(4))
