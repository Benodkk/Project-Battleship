import player from "../factories/player.js"
import gameboard from "../factories/gameboard.js"
import ship from "../factories/ship.js"


let janusz = player()
let januszBoard = gameboard()
let myShips=[]
let janusz1 = ship(1,4,[1,2,3,4])
myShips.push(janusz1)
let janusz2 = ship(2,3,[21,22,23])
myShips.push(janusz2)


let comp = player()
let compBoard = gameboard()


januszBoard.placeShips(janusz1.fields)
januszBoard.placeShips(janusz2.fields)

function ifShipSunk(){
    for (let i=0; i<januszBoard.myShips.length; i++){
        if(myShips[i].id==januszBoard.myShips[i]){

        }

        if(myShips[i].isSunk()==true){
            console.log('koniec statku')
        }
    }
}

function ifGameFinish(){
    console.log(januszBoard.board)
    console.log(myShips[0].oneShip)
    console.log(myShips[1].oneShip)
    if(januszBoard.AllShipsSunk()==true){
        console.log('koniec')
    }
}

export {januszBoard, compBoard, myShips, ifShipSunk, ifGameFinish}