import gameboard from '../factories/gameboard.js'

const testedBoard =  gameboard()
const expected = new Array(100).fill(false);
expected[25] = 1
expected[26] = 1
testedBoard.placeShips([25,26])

test ('testing placeShips function', () => {
    expect(testedBoard.board).toEqual(expected)
})

test ('testing receiveAttack function, when it hits', () => {
    testedBoard.receiveAttack(25)
    expected[25] = "HIT!"
    expect(testedBoard.board).toEqual(expected)
})

test ('testing receiveAttack function, when it misses', () => {
    testedBoard.receiveAttack(23)
    expected[23] = "missed"
    expect(testedBoard.board).toEqual(expected)
})

test ('testing allShipSunk function, ships are still alive', () => {
    expect(testedBoard.AllShipsSunk()).toBe(false)
})

test ('testing allShipSunk function, all ships are sunk', () => {
    testedBoard.receiveAttack(25)
    testedBoard.receiveAttack(26)
    expect(testedBoard.AllShipsSunk()).toBe(true)
})

test ('testing errorMessage', () => {
    testedBoard.receiveAttack(25)
    expect(testedBoard.receiveAttack(25)).toMatch(/error/)
})