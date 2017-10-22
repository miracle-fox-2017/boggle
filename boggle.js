class Boggle{
    constructor(){
        this.kamus = require('./data');
        // this.kamus = ["LASO"]
        this.board = []
        this.foundWord = [];
        this.saveWord = '';
        this.tempBoard = [];
        this.null = 0;
        this.size = null;
    }
    alphabetRandom(){
        let alphabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabeth[Math.floor(Math.random()*26)];
    }
    shake(size){
        this.size = size;
         for (let i = 0 ; i<size ; i++){
             let newArr=[]
             for (let j = 0 ; j<size ; j++){
             newArr.push(this.alphabetRandom());
             }
             this.board.push(newArr);
          }
         // let board = [["A","H","D","F"],
         //          ["B","M","A","E"],
         //          ["Z","X","Y","Z"],
         //          ["A","B","C","D"]]
     //        let board =   [ [ 'E', 'O', 'T', 'G' ],
     //                        [ 'S', 'B', 'B', 'G' ],
     //                        [ 'C', 'G', 'N', 'C' ],
     //                        [ 'G', 'A', 'L', 'S' ] ]

     // this.board = board;    

     console.log(this.board);
     this.boardTemp()
    }

    boardTemp(){
        this.tempBoard = [];
        for (let i = 0 ; i<this.board.length ; i++){
             let newArr=[]
             for (let j = 0 ; j<this.board[i].length ; j++){
             newArr.push(this.board[i][j]);
             }
            this.tempBoard.push(newArr);
        }
    }
// untuk check kata pertama kamus di board    
    checkKamus(indexKamus, num){
         for (let i = 0 ; i<this.board.length ; i++){
            for (let j = 0 ; j<this.board[i].length ; j++){
                this.boardTemp()
                if(this.board[i][j] === this.kamus[indexKamus][num]){
                    // console.log(num)
                    this.tempBoard[i][j] = 0;
                    if(this.checkBoard(num+1,indexKamus,i,j,1)){
                        return true;
                    }
                }
            }  
         }
         return false;
    }

    checkBoard(num,indexKamus,barisBoard,indexBoard,stopper){
        // console.log(num,indexKamus,barisBoard,indexBoard,stopper)
        // console.log(this.tempBoard)
    if(stopper === this.kamus[indexKamus].length){
        this.boardTemp();
        return true;
      }  
      if(barisBoard === 0 && indexBoard === 0){
        if( this.tempBoard[barisBoard][indexBoard+1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard][indexBoard+1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard,indexBoard+1,stopper+1)
        } 
        if( this.tempBoard[barisBoard+1][indexBoard+1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard+1][indexBoard+1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard+1,stopper+1)
        }
        if( this.tempBoard[barisBoard+1][indexBoard] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard+1][indexBoard] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard,stopper+1)
        }
            return false
      }
      if(barisBoard-1 < 0 && indexBoard-1 >= 0 && indexBoard !== this.size-1){
        if( this.tempBoard[barisBoard][indexBoard+1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard][indexBoard+1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++ 
            return this.checkBoard(num+1,indexKamus,barisBoard,indexBoard+1,stopper+1)
        }
        if( this.tempBoard[barisBoard+1][indexBoard+1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard+1][indexBoard+1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard+1,stopper+1)
        }
        if( this.tempBoard[barisBoard+1][indexBoard] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard+1][indexBoard] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard,stopper+1)
        }
        if( this.tempBoard[barisBoard+1][indexBoard-1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard+1][indexBoard-1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard-1,stopper+1)
        }
        if( this.tempBoard[barisBoard][indexBoard-1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard][indexBoard-1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard,indexBoard-1,stopper+1)
        }     
        return false;           
      }
      if(barisBoard === 0 && indexBoard === this.size-1){
        if( this.tempBoard[barisBoard+1][indexBoard] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard+1][indexBoard] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard,stopper+1)
        }
        if( this.tempBoard[barisBoard+1][indexBoard-1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard+1][indexBoard-1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard-1,stopper+1)
        }
        if( this.tempBoard[barisBoard][indexBoard-1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard][indexBoard-1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard,indexBoard-1,stopper+1)
        }
        return false
      }
      if(barisBoard-1 >=0 && indexBoard-1 < 0 && barisBoard !== this.size-1){
        if( this.tempBoard[barisBoard-1][indexBoard] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard-1][indexBoard] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard,stopper+1)
        }
        if( this.tempBoard[barisBoard-1][indexBoard+1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard-1][indexBoard+1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard+1,stopper+1)
        }
        if( this.tempBoard[barisBoard][indexBoard+1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard][indexBoard+1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard,indexBoard+1,stopper+1)
        }
        if( this.tempBoard[barisBoard+1][indexBoard+1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard+1][indexBoard+1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard+1,stopper+1)
        }        
        if( this.tempBoard[barisBoard+1][indexBoard] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard+1][indexBoard] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard,stopper+1)
        }        
        return false
      }   
      if(barisBoard-1 >=0 && indexBoard+1 > this.size-1 && barisBoard !== this.size-1){
        if( this.tempBoard[barisBoard-1][indexBoard] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard-1][indexBoard] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard,stopper+1)
        }
        if( this.tempBoard[barisBoard+1][indexBoard] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard+1][indexBoard] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard,stopper+1)
        }
        if( this.tempBoard[barisBoard+1][indexBoard-1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard+1][indexBoard-1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard-1,stopper+1)
        }
        if( this.tempBoard[barisBoard][indexBoard-1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard][indexBoard-1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard,indexBoard-1,stopper+1)
        }        
        if( this.tempBoard[barisBoard-1][indexBoard-1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard-1][indexBoard-1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard+1,stopper+1)
        }        
        return false
      }  
      if(barisBoard === this.size-1 && indexBoard === 0){
        if( this.tempBoard[barisBoard-1][indexBoard] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard-1][indexBoard] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard,stopper+1)
        }
        if( this.tempBoard[barisBoard-1][indexBoard+1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard-1][indexBoard+1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard+1,stopper+1)
        }
        if( this.tempBoard[barisBoard][indexBoard+1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard][indexBoard+1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard,indexBoard+1,stopper+1)
        }
        return false
      }
      if(barisBoard+1 > this.size-1 && indexBoard-1 >=0 && indexBoard !== this.size-1){
        if( this.tempBoard[barisBoard][indexBoard+1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard][indexBoard+1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard,indexBoard+1,stopper+1)
        }
        if( this.tempBoard[barisBoard][indexBoard-1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard][indexBoard-1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard,indexBoard-1,stopper+1)
        }
        if( this.tempBoard[barisBoard-1][indexBoard-1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard-1][indexBoard-1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard-1,stopper+1)
        }
        if( this.tempBoard[barisBoard-1][indexBoard] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard-1][indexBoard] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard,stopper+1)
        }  
        if( this.tempBoard[barisBoard-1][indexBoard+1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard-1][indexBoard+1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard+1,stopper+1)
        }                
        return false
      }                 
      if(barisBoard === this.size-1 && indexBoard === this.size-1){
        if( this.tempBoard[barisBoard-1][indexBoard] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard-1][indexBoard] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard,stopper+1)
        }
        if( this.tempBoard[barisBoard][indexBoard-1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard][indexBoard-1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard,indexBoard-1,stopper+1)
        }
        if( this.tempBoard[barisBoard-1][indexBoard-1] === this.kamus[indexKamus][num]){
            this.tempBoard[barisBoard-1][indexBoard-1] = this.null++
            this.tempBoard[barisBoard][indexBoard] = this.null++
            return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard-1,stopper+1)
        }
        return false
      }
      else{                        
            if( this.tempBoard[barisBoard][indexBoard+1] === this.kamus[indexKamus][num]){
                this.tempBoard[barisBoard][indexBoard+1] = this.null++
                this.tempBoard[barisBoard][indexBoard] = this.null++
                return this.checkBoard(num+1,indexKamus,barisBoard,indexBoard+1,stopper+1)
            }
            if( this.tempBoard[barisBoard+1][indexBoard+1] === this.kamus[indexKamus][num]){
                this.tempBoard[barisBoard+1][indexBoard+1] = this.null++
                this.tempBoard[barisBoard][indexBoard] = this.null++
                return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard+1,stopper+1) 
            }
            if( this.tempBoard[barisBoard+1][indexBoard] === this.kamus[indexKamus][num]){
                this.tempBoard[barisBoard+1][indexBoard] = this.null++;
                this.tempBoard[barisBoard][indexBoard] = this.null++;
                return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard,stopper+1)   
            }
            if( this.tempBoard[barisBoard+1][indexBoard-1] === this.kamus[indexKamus][num]){
                this.tempBoard[barisBoard+1][indexBoard-1] = this.null++
                this.tempBoard[barisBoard][indexBoard] = this.null++
                return this.checkBoard(num+1,indexKamus,barisBoard+1,indexBoard-1,stopper+1)
            }
            if( this.tempBoard[barisBoard][indexBoard-1] === this.kamus[indexKamus][num]){
                this.tempBoard[barisBoard][indexBoard-1] = this.null++
                this.tempBoard[barisBoard][indexBoard] = this.null++
                return this.checkBoard(num+1,indexKamus,barisBoard,indexBoard-1,stopper+1)
            }
            if( this.tempBoard[barisBoard-1][indexBoard-1] === this.kamus[indexKamus][num]){
                this.tempBoard[barisBoard-1][indexBoard-1] = this.null++
                this.tempBoard[barisBoard][indexBoard] = this.null++
                return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard-1,stopper+1)
            }    
            if( this.tempBoard[barisBoard-1][indexBoard] === this.kamus[indexKamus][num]){
                this.tempBoard[barisBoard-1][indexBoard] = this.null++
                this.tempBoard[barisBoard][indexBoard] = this.null++
                return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard,stopper+1)
            }
            if( this.tempBoard[barisBoard-1][indexBoard+1] === this.kamus[indexKamus][num]){
                this.tempBoard[barisBoard-1][indexBoard+1] = this.null++
                this.tempBoard[barisBoard][indexBoard] = this.null++
                return this.checkBoard(num+1,indexKamus,barisBoard-1,indexBoard+1,stopper+1)             
            }
            return false
        }    
        // this.boardTemp();
        return false;
    }
    solve(){
       for (let i = 0 ; i < this.kamus.length ; i++){
            if(this.checkKamus(i,0)){
                this.foundWord.push(this.kamus[i])
            }
       }
       console.log("Found word = "+this.foundWord.length)
       console.log(this.foundWord.join(" "))
    }
}
var game = new Boggle()
//flexibel shake you can insert parameter randomly not only 4
game.shake(4);
game.solve();