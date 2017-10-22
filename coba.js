var board = [['s', 'k', 'a', 'm'],
             ['a', 'i', 'e', 'u'],
             ['y', 'a', 'a', 'c'],
             ['a', 'v', 'n', 'l']]

var kamus = ['saya', 'kamu']


var papan = [[0, 1, 2, 3],
             [4, 5, 6, 7],
             [8, 9, 10, 11],
             [12, 13, 14, 15]]

var b = 1
var k = 2
var koordinat = []

function cek(titik1, titik2, b, k) {
  if(board[b-1][k] == kamus[titik1][titik2]) {
    return 'sukses1'
  }
  else if(board[b-1][k+1] == kamus[titik1][titik2]) {
    return 'sukses2'
  }
  else if(board[b][k+1] == kamus[titik1][titik2]) {
    return 'sukses3'
  }
  else if(board[b+1][k+1] == kamus[titik1][titik2]) {
    return 'sukses4'
  }
  else if(board[b+1][k] == kamus[titik1][titik2]) {
    return 'sukses5'
  }
  else if(board[b+1][k-1] == kamus[titik1][titik2]) {
    return 'sukses6'
  }
  else if(board[b][k-1] == kamus[titik1][titik2]) {
    return 'sukses7'
  }
  else if(board[b-1][k-1] == kamus[titik1][titik2]) {
    return 'sukses8'
  }

}

console.log(cek(0,1, 0,0));

// console.log(papan[b][k]) //6
//
// console.log(papan[b-1][k])
// console.log(papan[b-1][k+1]);
// console.log(papan[b][k+1]);
// console.log(papan[b+1][k+1]);
// console.log(papan[b+1][k]);
// console.log(papan[b+1][k-1]);
// console.log(papan[b][k-1]);
// console.log(papan[b-1][k-1]);
