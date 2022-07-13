import {januszBoard, myShips , compBoard, ifGameFinish, ifShipSunk} from "./game.js"


let playerBoard = document.querySelector('.playerBoard');
let computerBoard = document.querySelector('.computerBoard')



function createPlayerBoard() {
    for (let i=0; i<=99; i++){
        let pixel = document.createElement('div')
        playerBoard.appendChild(pixel);
        pixel.classList.add('pixel');

        pixel.addEventListener('click', () => {
            let attackedFieldId=januszBoard.board[i]
            januszBoard.receiveAttack(i)

            if (januszBoard.board[i]=='missed'){
                pixel.classList.toggle('missed')
            }
            else {
                pixel.classList.toggle('hit')
                for (let j=0; j<myShips.length; j++)
                    if(attackedFieldId==myShips[j].id){
                        myShips[j].shipHit(i)
                        console.log(myShips[j].id)
                        console.log(myShips[j].shipHit(i))
                    }
            }
            ifShipSunk()
            ifGameFinish()      
        })
    } 
}   

function createComputerBoard() {
    compBoard.board[99]=1
    for (let i=0; i<=99; i++){
        let pixel = document.createElement('div')
        computerBoard.appendChild(pixel);
        pixel.classList.add('pixel');
        pixel.addEventListener('click', () => {
            compBoard.receiveAttack(i)
            if (compBoard.board[i]=='missed'){
                pixel.classList.toggle('missed')
            }
            else {
                pixel.classList.toggle('hit')
            }
            
        })
    } 
}   


export  {createPlayerBoard, createComputerBoard}


