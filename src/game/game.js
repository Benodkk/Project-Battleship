import {myTurn, player} from "../factories/player.js"
import gameboard from "../factories/gameboard.js"
import ship from "../factories/ship.js"


let janusz = player()
let januszBoard = gameboard()
let myShips=[]
let janusz1 = ship(1,4,[1,2,3,4])
myShips.push(janusz1)
let janusz2 = ship(2,3,[21,22,23])
myShips.push(janusz2)

januszBoard.placeShips(janusz1.fields)
januszBoard.placeShips(janusz2.fields)



let compBoard = gameboard()
let compShips=[]
let comp1 = ship(1,4,[11,12,13,14])
compShips.push(comp1)

compBoard.placeShips(comp1.fields)




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
    for (let i=0; i<compBoard.myShips.length; i++){
        if(compShips[i].id==compBoard.myShips[i]){

        }
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