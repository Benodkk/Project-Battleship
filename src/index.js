import {createPlayerBoard, createComputerBoard} from "./game/render.js"

let resetBtn=document.querySelector(".resetBtn")

createPlayerBoard()
createComputerBoard()


resetBtn.addEventListener('click',()=>{
    document.location.reload(true)
})

