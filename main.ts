let index = 0
input.onButtonPressed(Button.A, function () {
    index = randint(1, 5)
    game.setScore(0)
})
input.onGesture(Gesture.LogoUp, function () {
    if (index == 1) {
        basic.showIcon(IconNames.House)
    } else if (index == 2) {
        basic.showIcon(IconNames.Giraffe)
    } else if (index == 3) {
        basic.showIcon(IconNames.Umbrella)
    } else if (index == 4) {
        basic.showIcon(IconNames.Happy)
    } else if (index == 5) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            `)
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    game.addScore(-1)
    index = randint(1, 5)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
    index = randint(1, 5)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(game.score())
})
