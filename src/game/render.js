import player from "../factories/player.js";
import {myTurn, janusz, januszBoard, myShips , compBoard, compShips, ifGameFinish, ifShipJanuszSunk, ifShipCompSunk} from "./game.js"


let playerBoard = document.querySelector('.playerBoard');
let computerBoard = document.querySelector('.computerBoard')
let move


function createComputerBoard() {
    for (let i=0; i<=99; i++){
        let pixel = document.createElement('div')
        computerBoard.appendChild(pixel);
        pixel.classList.add('pixel');
        if (myTurn==true){
            pixel.addEventListener('click', () => {
                if (myTurn==true){
                    let attackedFieldId=compBoard.board[i]
                    compBoard.receiveAttack(i)
                    if (compBoard.board[i]=='missed'){
                        pixel.classList.toggle('missed')
                    }
                    else if (compBoard.board[i]=='HIT!'){
                        pixel.classList.toggle('hit')
                        for (let j=0; j<compShips.length; j++){
                            if(attackedFieldId==compShips[j].id){
                                compShips[j].shipHit(i)
                            }
                        }
                    }
                    ifShipCompSunk()
                    ifGameFinish()    
                    janusz.playerChoice()
                    move = janusz.computerChoice()
                    createPlayerBoard()
                }
            }) 
        } 
    }  
}





function createPlayerBoard() {
    januszBoard.receiveAttack(move)
    playerBoard.textContent=''
    for (let i=0; i<=99; i++){
        let pixel = document.createElement('div')
        playerBoard.appendChild(pixel);
        pixel.classList.add('pixel');

        let attackedFieldId=januszBoard.board[i]
        if (januszBoard.board[i]=='missed'){
            pixel.classList.toggle('missed')
        }
        else if (januszBoard.board[i]=='HIT!'){
            pixel.classList.toggle('hit')
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







export  {createPlayerBoard, createComputerBoard}


