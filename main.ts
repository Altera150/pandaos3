input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 3; index++) {
        music.playMelody("E B C5 A B G A F ", 120)
        music.playMelody("A F E F D G E F ", 120)
        music.playMelody("C5 G B A F A C5 B ", 120)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showNumber(randint(0, 1))
})
input.calibrateCompass()
basic.showString("Hello!@DMY")
