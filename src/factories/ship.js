const ship = (long,fields) => {

    const oneShip = new Array(long).fill(false)

    function shipHit(field){
        let boom = fields.indexOf(field)
        oneShip[boom] = true
    }

    function isSunk(){
        return oneShip.every(x => x === true)
    }
    
   return {long, fields, oneShip, shipHit, isSunk} 
}

export default ship