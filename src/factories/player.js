import gameboard from './gameboard.js'

let myTurn = true
const player = () => {
    
    function playerChoice(){
        myTurn = false
    }

    let computerMoves = []

    function computerChoice(){
        let attack
        
        if (myTurn == false){
            attack = Math.floor(100*Math.random())
            if (computerMoves.some(x => x == attack)==true){
                computerChoice()
            }
            else {computerMoves.push(attack)
                myTurn = true}
        }
        return attack
    }

    return {playerChoice, computerChoice, computerMoves}
}

export  {myTurn,player}