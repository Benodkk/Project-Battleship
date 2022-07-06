import ship from '../factories/ship.js'

test ('ship 2 has to have 2 length', () => {
    expect(ship(2,0).length).toBe(2);
})

test ('ship with 2 length and 2 hit has to be sunk', () => {
    expect(ship(2,2).theShipSunk).toMatch(/The ship has been sunk/)
})