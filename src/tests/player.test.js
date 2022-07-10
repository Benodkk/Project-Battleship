import player from '../factories/player.js'

const janusz = player()

test ('computerChoice gives undefined before playerChoice', () => {
    expect(typeof (janusz.computerChoice())).toBeUndefined
})

test ('testing playerChoice function', () => {
    expect(janusz.playerChoice(5)).toBe(5)
})

test ('computerChoice gives number after playerChoice', () => {
    expect(typeof (janusz.computerChoice())).toMatch(/number/)
})
