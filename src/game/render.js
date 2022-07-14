import player from "../factories/player.js";
import {myTurn, janusz, januszBoard, myShips , compBoard, compShips, ifGameFinish, ifShipJanuszSunk, ifShipCompSunk} from "./game.js"
import ship from "../factories/ship.js"

let playerBoard = document.querySelector('.playerBoard');
let computerBoard = document.querySelector('.computerBoard')

let add1pole = document.querySelector('.add1pole')
let add2pole = document.querySelector('.add2pole')
let add3pole = document.querySelector('.add3pole')
let add4pole = document.querySelector('.add4pole')

function createComputerBoard() {
    for (let i=0; i<=99; i++){
        let pixel = document.createElement('div')
        computerBoard.appendChild(pixel);
        pixel.classList.add('pixel');
        if (myTurn==true){
            pixel.addEventListener('click', () => {
                if (myTurn==true && fourFieldsToPlace==0 && threeFieldsToPlace==0 && twoFieldsToPlace==0 && oneFieldsToPlace==0 ){
                    let attackedFieldId=compBoard.board[i]
                    compBoard.receiveAttack(i)
                    if (compBoard.board[i]=='missed'){
                        pixel.classList.add('missed')
                    }
                    else if (compBoard.board[i]=='HIT!'){
                        pixel.classList.add('hit')
                        for (let j=0; j<compShips.length; j++){
                            if(attackedFieldId==compShips[j].id){
                                compShips[j].shipHit(i)
                            }
                        }
                    }
                    ifShipCompSunk()
                    ifGameFinish()    
                    janusz.playerChoice()
                    janusz.computerChoice()
                    createPlayerBoard()
                }
            }) 
        } 

    }  
}

let thereIsShip =[]
let chosenFields =[]
let shipAdd

let fourFieldsToPlace=1
let threeFieldsToPlace=2
let twoFieldsToPlace=3
let oneFieldToPlace=4

function createPlayerBoard() {
    januszBoard.receiveAttack(janusz.computerMoves[janusz.computerMoves.length-1])
    playerBoard.textContent=''

    for (let i=0; i<=99; i++){
        let pixel = document.createElement('div')
        playerBoard.appendChild(pixel);
        pixel.classList.add('pixel');
        for (let j=0; j<thereIsShip.length; j++){
            if(thereIsShip[j]==i){
                pixel.classList.add('ship')
            }
        }     
        pixel.addEventListener('click', () => {
            console.log(shipAdd)
            console.log(chosenFields)
            // placing 1-field ships
            if(shipAdd==1){
                if(chosenFields.length==0){
                    chosenFields.push(i)
                    thereIsShip.push(i)
                    pixel.classList.add('ship')
                }
                if(chosenFields.length==1){
                    let shipo = ship(myShips.length+1,shipAdd,chosenFields)
                    myShips.push(shipo)
                    januszBoard.placeShips(shipo.fields)
                    chosenFields=[]
                    shipAdd=0
                    oneFieldToPlace-=1
                }
            }
            // placing 2-fields ships
            if(shipAdd==2){
                if(chosenFields.length==0){
                    chosenFields.push(i)
                    thereIsShip.push(i)
                    pixel.classList.add('ship')
                }
                if((i==chosenFields[0]-1 || i==chosenFields[0]+1 || i==chosenFields[0]+10 || i==chosenFields[0]-10)){
                    chosenFields.push(i)
                    thereIsShip.push(i)
                    pixel.classList.add('ship')
                }
                if(chosenFields.length==2){
                    let shipo = ship(myShips.length+1,shipAdd,chosenFields)
                    myShips.push(shipo)
                    januszBoard.placeShips(shipo.fields)
                    chosenFields=[]
                    shipAdd=0
                    twoFieldsToPlace-=1
                }
            }
            // placing 3-fields ships
            if(shipAdd==3){
                if(chosenFields.length==0){
                    chosenFields.push(i)
                    thereIsShip.push(i)
                    pixel.classList.add('ship')
                }
                if(chosenFields.length==1){
                    if(i==chosenFields[0]-1 || i==chosenFields[0]+1 || i==chosenFields[0]+10 || i==chosenFields[0]-10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')
                    }
                }
                if(chosenFields.length==2){
                    console.log('dupa')
                    // placing ships vertical
                    if(chosenFields[0]-chosenFields[1] == 10 && i==chosenFields[1]-10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')
                    }
                    else if(chosenFields[0]-chosenFields[1] == 10 && i==chosenFields[0]+10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')                
                    }
                    else if(chosenFields[1]-chosenFields[0] == 10 && i==chosenFields[0]-10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')                
                    }
                    else if(chosenFields[1]-chosenFields[0] == 10 && i==chosenFields[1]+10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')                
                    }
                    // placing ships horizontal
                    else if(chosenFields[0]-chosenFields[1] == 1 && i==chosenFields[1]-1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')
                    }
                    else if(chosenFields[0]-chosenFields[1] == 1 && i==chosenFields[0]+1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')                
                    }
                    else if(chosenFields[1]-chosenFields[0] == 1 && i==chosenFields[0]-1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')                
                    }
                    else if(chosenFields[1]-chosenFields[0] == 1 && i==chosenFields[1]+1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')                
                    }
                }
                if(chosenFields.length==3){
                    let shipo = ship(myShips.length+1,shipAdd,chosenFields)
                    myShips.push(shipo)
                    januszBoard.placeShips(shipo.fields)
                    chosenFields=[]
                    shipAdd=0
                    threeFieldsToPlace-=1
                }
            }
            if(shipAdd==4){
                if(chosenFields.length==0){
                    chosenFields.push(i)
                    thereIsShip.push(i)
                    pixel.classList.add('ship')
                }
                if(chosenFields.length==1){
                    if(i==chosenFields[0]-1 || i==chosenFields[0]+1 || i==chosenFields[0]+10 || i==chosenFields[0]-10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')
                    }
                }
                if(chosenFields.length==2){
                    console.log('dupa')
                    // placing ships vertical
                    if(chosenFields[0]-chosenFields[1] == 10 && i==chosenFields[1]-10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')
                    }
                    else if(chosenFields[0]-chosenFields[1] == 10 && i==chosenFields[0]+10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')                
                    }
                    else if(chosenFields[1]-chosenFields[0] == 10 && i==chosenFields[0]-10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')                
                    }
                    else if(chosenFields[1]-chosenFields[0] == 10 && i==chosenFields[1]+10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')                
                    }
                    // placing ships horizontal
                    else if(chosenFields[0]-chosenFields[1] == 1 && i==chosenFields[1]-1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')
                    }
                    else if(chosenFields[0]-chosenFields[1] == 1 && i==chosenFields[0]+1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')                
                    }
                    else if(chosenFields[1]-chosenFields[0] == 1 && i==chosenFields[0]-1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')                
                    }
                    else if(chosenFields[1]-chosenFields[0] == 1 && i==chosenFields[1]+1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship')                
                    }
                }
                // placing ships vertical
                if(chosenFields.length==3){
                    if(chosenFields[0]-chosenFields[2]==20 && i==chosenFields[2]-10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[0]-chosenFields[2]==20 && i==chosenFields[0]+10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[0]-chosenFields[2]==10 && i==chosenFields[2]-10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[0]-chosenFields[2]==10 && i==chosenFields[1]+10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[2]-chosenFields[0]==20 && i==chosenFields[2]+10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[2]-chosenFields[0]==20 && i==chosenFields[0]-10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[2]-chosenFields[0]==10 && i==chosenFields[0]-20){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[2]-chosenFields[0]==10 && i==chosenFields[2]+10){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[0]-chosenFields[2]==2 && i==chosenFields[2]-1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[0]-chosenFields[2]==2 && i==chosenFields[0]+1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[0]-chosenFields[2]==1 && i==chosenFields[2]-1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[0]-chosenFields[2]==1 && i==chosenFields[1]+1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[2]-chosenFields[0]==2 && i==chosenFields[2]+1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[2]-chosenFields[0]==2 && i==chosenFields[0]-1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[2]-chosenFields[0]==1 && i==chosenFields[0]-2){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                    else if(chosenFields[2]-chosenFields[0]==1 && i==chosenFields[2]+1){
                        chosenFields.push(i)
                        thereIsShip.push(i)
                        pixel.classList.add('ship') 
                    }
                }
                if(chosenFields.length==4){
                    let shipo = ship(myShips.length+1,shipAdd,chosenFields)
                    myShips.push(shipo)
                    januszBoard.placeShips(shipo.fields)
                    chosenFields=[]
                    shipAdd=0
                    fourFieldsToPlace-=1
                }
            }
        })
        let attackedFieldId=januszBoard.board[i]
        if (januszBoard.board[i]=='missed'){
            pixel.classList.add('missed')
        }
        else if (januszBoard.board[i]=='HIT!'){
            pixel.classList.remove('ship')
            pixel.classList.add('hit')
            for (let j=0; j<myShips.length; j++){
                if(attackedFieldId==myShips[j].id){
                    myShips[j].shipHit(i)
                }
            }
        }
    }
    ifShipJanuszSunk()
    ifGameFinish()    
}

add1pole.addEventListener('click', () => {
    if(oneFieldToPlace>0){
        shipAdd=1 
    }
})
add2pole.addEventListener('click', () => {
    if(twoFieldsToPlace>0){
        shipAdd=2 
     }
})
add3pole.addEventListener('click', () => {
    if(threeFieldsToPlace>0){
        shipAdd=3
     }
})
add4pole.addEventListener('click', () => {
    if(fourFieldsToPlace>0){
        shipAdd=4
    }
})
    


export  {createPlayerBoard, createComputerBoard}


