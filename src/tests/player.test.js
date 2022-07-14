import {myTurn, player} from '../factories/player.js'

const janusz = player()

test ('computerChoice gives undefined before playerChoice', () => {
    expect(typeof (janusz.computerChoice())).toBeUndefined
})

test ('testing playerChoice function', () => {
    janusz.playerChoice()
    expect(myTurn).toBe(false)
})

test ('computerChoice gives number after playerChoice', () => {
    expect(typeof (janusz.computerChoice())).toMatch(/number/)
})
