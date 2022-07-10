import gameboard from './gameboard.js'

const player = () => {
    let myTurn = true

    function playerChoice(attackedField){
        let attack

        if (myTurn == true){
            attack = attackedField
            myTurn = false
        }
        return attack
    }

    let computerMoves = []

    function computerChoice(){
        let attack

        if (myTurn == false){
            attack = Math.floor(100*Math.random())
            if (computerMoves.some(x => x == attack)==true){
                computerChoice()
            }
            else { computerMoves.push(attack)
                myTurn = true}
        }
        return attack
    }

    return {playerChoice, computerChoice, computerMoves}
}

export default player