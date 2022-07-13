import ship from "./factories/ship.js"
import gameboard from "./factories/gameboard.js"
import player from "./factories/player.js"
import {createPlayerBoard, createComputerBoard} from "./game/render.js"
import {displayField, ifGameFinish} from "./game/game.js"



createPlayerBoard()
createComputerBoard()

