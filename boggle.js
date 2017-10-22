// Import wordlist
const words=require("./data.js");
// Start from here
class Boggle{
    constructor(size){
        this.board=[];
        this.size=size;
        this.alphabet="abcdefghijklmnopqrstuvwxyz";
    }
    // Create Board Based on Size
    createBoard(){
        const randomStr=()=>{
            return Math.floor(Math.random() * 25);
        }
        for(let i=0;i < this.size;i++){
            let temp=[];
            for(let j=0;j < this.size;j++){
                temp.push(this.alphabet[randomStr()]);
            }
            this.board.push(temp);
        }
        return this;
    }
    // Loop
    test(){
        for(let i=0;i < this.size;i++){
            for(let j=0;j < this.size;j++){
            }
        }
    }
}

const boggle=new Boggle(5);
boggle.createBoard()
console.log(boggle.test());
