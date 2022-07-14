import {myTurn, player} from "../factories/player.js"
import gameboard from "../factories/gameboard.js"
import ship from "../factories/ship.js"




let janusz = player()
let januszBoard = gameboard()
let myShips=[]

let compBoard = gameboard()
let compShips=[]

function ifShipJanuszSunk(){
    console.log(januszBoard.board)   
    for (let i=0; i<januszBoard.myShips.length; i++){
        if(myShips[i].id==januszBoard.myShips[i]){

        }
        if(myShips[i].isSunk()==true){
            console.log(`The ship has been sunk`)
        }
    }
}

function ifShipCompSunk(){ 
    for (let i=0; i<compShips.length; i++){
        if(compShips[i].isSunk()==true){
            console.log(`The ship has been sunk`)
        }
    }
}

function ifGameFinish(){
    if(januszBoard.AllShipsSunk()==true){
        console.log('koniec komp wygral')
    }
    else if(compBoard.AllShipsSunk()==true){
        console.log('koniec janusz wygral')
    }
}

export {myTurn, janusz, januszBoard, compBoard, myShips, compShips, ifShipJanuszSunk, ifShipCompSunk, ifGameFinish}