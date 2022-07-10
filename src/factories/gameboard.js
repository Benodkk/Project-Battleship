import ship from './ship.js'    

const gameboard = () => {

    const board = new Array(100).fill(false)
    let myShips = []

    function placeShips(occupiedFields){  
        let shipId = myShips.length + 1;
        myShips.push(shipId)
        occupiedFields.forEach(field => board[field] = shipId)
    }

    function receiveAttack(attackedField){
        let errorMessage
        if (board[attackedField] == false){
            board[attackedField] = 'missed'
        }
        else if (board[attackedField] !== 'HIT!' && board[attackedField] !== 'missed' && board[attackedField] !== false) {
            board[attackedField] = 'HIT!'
        }
        else {errorMessage='error'}

        return errorMessage
    }

    function AllShipsSunk(){
        return board.every(x => x == 'missed' || x == 'HIT!' || x == false)
    }

    return {board, myShips, placeShips, receiveAttack, AllShipsSunk}
}

export default gameboard