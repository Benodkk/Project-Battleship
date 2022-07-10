

let playerBoard = document.querySelector('.playerBoard');
let computerBoard = document.querySelector('.computerBoard')

function createPlayerBoard() {
    for (let i=1; i<=100; i++){
        let pixel = document.createElement('div')
        playerBoard.appendChild(pixel);
        pixel.classList.add('pixel');
    }  
} 

function createComputerBoard() {
    for (let i=1; i<=100; i++){
        let pixel = document.createElement('div')
        computerBoard.appendChild(pixel);
        pixel.classList.add('pixel');
    }   
} 

export  {createPlayerBoard, createComputerBoard}
