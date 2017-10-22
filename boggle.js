class boggle{
  constructor(kamus) {
    //this.kamus = [['AKA'],['BOBO'],['JOB'],['GET'],['ZEBRA']];
    this.kamus = 'AKABOBOJOBGETZEBRA'
  }
  shake(){
    let arr = [];
  //  let huruf = 'ABCDEFGHIJKLMNOP'
    let huruf = this.kamus;
    let newhuruf = huruf.split('')
    for (let i = 0; i < 4; i++) {
      arr.push([]);
      for(let j = 0; j<4; j++){
        let random = newhuruf[Math.floor(Math.random() * newhuruf.length)]
        arr[i].push(random)
      }
    }
    return arr
  }

 solver(cari){
   let kamus = this.shake()
   let ubhcari = cari.split('')
    console.log(kamus);
    for(var i=0; i< 4; i++){
      console.log('ubhcari i ---->',ubhcari);
      if(kamus[i] === ubhcari){
        return 'benar'
      }
      else {
        return 'salah'
      }
    }
  }
}

let gameboggle = new boggle();
// console.log(gameboggle.shake())
console.log(gameboggle.solver('BOBO'))
