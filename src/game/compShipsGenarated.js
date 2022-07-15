import {compBoard, compShips} from './game'
import ship from "../factories/ship.js"

function generateCompShips(){

    let thereIsShip=[]

    let randomFieldVertical
    let randomFieldHorizontal
    let randomFirstField

    let verticalOrHorizontal

    // generate 4-fields ship

    let fourFieldsShip=[]

    randomFieldVertical=10*Math.floor(7*Math.random())
    randomFieldHorizontal=Math.floor(7*Math.random())
    randomFirstField=randomFieldVertical+randomFieldHorizontal
    fourFieldsShip.push(randomFirstField)
    thereIsShip.push(randomFirstField)

    verticalOrHorizontal=Math.floor(2*Math.random())

    if(verticalOrHorizontal==0){
        fourFieldsShip.push(randomFirstField+10)
        thereIsShip.push(randomFirstField+10)
        fourFieldsShip.push(randomFirstField+20)
        thereIsShip.push(randomFirstField+20)
        fourFieldsShip.push(randomFirstField+30)
        thereIsShip.push(randomFirstField+30)
    }
    else if (verticalOrHorizontal==1){
        fourFieldsShip.push(randomFirstField+1)
        thereIsShip.push(randomFirstField+1)
        fourFieldsShip.push(randomFirstField+2)
        thereIsShip.push(randomFirstField+2)
        fourFieldsShip.push(randomFirstField+3)
        thereIsShip.push(randomFirstField+3)
    }
    let shipoFour = ship(1,4,fourFieldsShip)
    compShips.push(shipoFour)
    compBoard.placeShips(shipoFour.fields) 

    // generate 3-fields ship
    let threeFieldsShip=[]
    function generateThreeFields(){
        threeFieldsShip=[]
        for (let i=0; i<2; i++){
            
            randomFieldVertical=10*Math.floor(8*Math.random())
            randomFieldHorizontal=Math.floor(8*Math.random())
            randomFirstField=randomFieldVertical+randomFieldHorizontal

            verticalOrHorizontal=Math.floor(2*Math.random())

            
            if(verticalOrHorizontal==0){
                if (thereIsShip.some(x => x == randomFirstField)==true){
                    generateThreeFields()
                    break
                }
                else {
                    threeFieldsShip.push(randomFirstField)
                    thereIsShip.push(randomFirstField)
                }

                if (thereIsShip.some(x => x == randomFirstField+10)==true){
                    generateThreeFields()
                    break
                }
                else {
                    threeFieldsShip.push(randomFirstField+10)
                    thereIsShip.push(randomFirstField+10)
                }

                if (thereIsShip.some(x => x == randomFirstField+20)==true){
                    generateThreeFields()
                    break
                }
                else {
                    threeFieldsShip.push(randomFirstField+20)
                    thereIsShip.push(randomFirstField+20)
                }
            }

            else if(verticalOrHorizontal==1){
                if (thereIsShip.some(x => x == randomFirstField)==true){
                    generateThreeFields()
                    break
                }
                else {
                    threeFieldsShip.push(randomFirstField)
                    thereIsShip.push(randomFirstField)
                }

                if (thereIsShip.some(x => x == randomFirstField+1)==true){
                    generateThreeFields()
                    break
                }
                else {
                    threeFieldsShip.push(randomFirstField+1)
                    thereIsShip.push(randomFirstField+1)
                }

                if (thereIsShip.some(x => x == randomFirstField+2)==true){
                    generateThreeFields()
                    break
                }
                else {
                    threeFieldsShip.push(randomFirstField+2)
                    thereIsShip.push(randomFirstField+2)
                }
            }
            
        }
    }
    generateThreeFields()
    let shipoThree1 = ship(2,3,[threeFieldsShip[0],threeFieldsShip[1],threeFieldsShip[2]])
    compShips.push(shipoThree1)
    compBoard.placeShips(shipoThree1.fields) 

    let shipoThree2 = ship(3,3,[threeFieldsShip[3],threeFieldsShip[4],threeFieldsShip[5]])
    compShips.push(shipoThree2)
    compBoard.placeShips(shipoThree2.fields) 

    // generate 2-fields ship
    let twoFieldsShip=[]
    function generateTwoFields(){
        twoFieldsShip=[]
        for (let i=0; i<3; i++){
        
            randomFieldVertical=10*Math.floor(9*Math.random())
            randomFieldHorizontal=Math.floor(9*Math.random())
            randomFirstField=randomFieldVertical+randomFieldHorizontal

            verticalOrHorizontal=Math.floor(2*Math.random())

            if(verticalOrHorizontal==0){
                if (thereIsShip.some(x => x == randomFirstField)==true){
                    generateTwoFields()
                    break
                }
                else {
                    twoFieldsShip.push(randomFirstField)
                    thereIsShip.push(randomFirstField)
                }

                if (thereIsShip.some(x => x == randomFirstField+10)==true){
                    generateTwoFields()
                    break
                }
                else {
                    twoFieldsShip.push(randomFirstField+10)
                    thereIsShip.push(randomFirstField+10)
                }
            }

            else if(verticalOrHorizontal==1){
                if (thereIsShip.some(x => x == randomFirstField)==true){
                    generateTwoFields()
                    break
                }
                else {
                    twoFieldsShip.push(randomFirstField)
                    thereIsShip.push(randomFirstField)
                }

                if (thereIsShip.some(x => x == randomFirstField+1)==true){
                    generateTwoFields()
                    break
                }
                else {
                    twoFieldsShip.push(randomFirstField+1)
                    thereIsShip.push(randomFirstField+1)
                }
            }
        }  
    }
    generateTwoFields()

    let shipoTwo1 = ship(4,2,[twoFieldsShip[0],twoFieldsShip[1]])
    compShips.push(shipoTwo1)
    compBoard.placeShips(shipoTwo1.fields) 

    let shipoTwo2 = ship(5,2,[twoFieldsShip[2],twoFieldsShip[3]])
    compShips.push(shipoTwo2)
    compBoard.placeShips(shipoTwo2.fields) 

    let shipoTwo3 = ship(6,2,[twoFieldsShip[4],twoFieldsShip[5]])
    compShips.push(shipoTwo3)
    compBoard.placeShips(shipoTwo3.fields) 

    // generate 1-field ship
    let oneFieldShip=[]
    function generateOneField(){
        oneFieldShip=[]
        for (let i=0; i<4; i++){
            
            randomFirstField=Math.floor(100*Math.random())

            if (thereIsShip.some(x => x == randomFirstField)==true){
                generateOneField()
                break
            }
            else {
                oneFieldShip.push(randomFirstField)
                thereIsShip.push(randomFirstField)
            }
        }
    }
    generateOneField()
    let shipoOne1 = ship(7,1,[oneFieldShip[0]])
    compShips.push(shipoOne1)
    compBoard.placeShips(shipoOne1.fields) 

    let shipoOne2 = ship(8,1,[oneFieldShip[1]])
    compShips.push(shipoOne2)
    compBoard.placeShips(shipoOne2.fields) 
    
    let shipoOne3 = ship(9,1,[oneFieldShip[2]])
    compShips.push(shipoOne3)
    compBoard.placeShips(shipoOne3.fields) 

    let shipoOne4 = ship(10,1,[oneFieldShip[3]])
    compShips.push(shipoOne4)
    compBoard.placeShips(shipoOne4.fields) 

}


export default generateCompShips


