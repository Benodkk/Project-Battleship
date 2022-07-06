let ship = (length, hit) => {

    function hit(){
        ship.hit += 1
        // dodac ze pozycja na ktorej stoi statek zostala trafiona 
    }   

    let theShipSunk

    function isSunk(){
        
        if (ship.lenght==ship.hit){
            theShipSunk='The ship has been sunk'
        }
        else {
            theShipSunk='The ship is still alive'
        }
    }
    isSunk()

   return { length, hit, theShipSunk} 
}

let ship1 = ship (1,0)
let ship2 = ship (2,0)
let ship3 = ship (3,0)
let ship4 = ship (4,0)



export default ship