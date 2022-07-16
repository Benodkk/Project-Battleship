import {myTurn, player} from "../factories/player.js"
import gameboard from "../factories/gameboard.js"



let janusz = player()
let januszBoard = gameboard()
let myShips=[]

let compBoard = gameboard()
let compShips=[]




function ifGameFinish(){
    if(januszBoard.AllShipsSunk()==true){
        console.log('koniec komp wygral')
    }
    else if(compBoard.AllShipsSunk()==true){
        console.log('koniec janusz wygral')
    }
}





export {myTurn, janusz, januszBoard, compBoard, myShips, compShips, ifGameFinish}