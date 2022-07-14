import ship from '../factories/ship.js'

let ship4 = ship(1,4,[65,66,67,68])

test ('long value returned' , () => {
    expect(ship4.long).toEqual(4)
})


test ('testing shipHit function', () => {
    ship4.shipHit(67)
    expect(ship4.oneShip[2]).toBe(true)
    expect(ship4.oneShip[3]).toBe(false)
})

test('testing isSunk function for false', () => {
    ship4.shipHit(65)
    expect(ship4.isSunk()).toBe(false)
})

test('testing isSunk function for true', () => {
    ship4.shipHit(65)
    ship4.shipHit(66)
    ship4.shipHit(67)
    ship4.shipHit(68)
    expect(ship4.isSunk()).toBe(true)
})
