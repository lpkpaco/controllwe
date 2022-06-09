HC_controller.onJoystickEvent(JoystickEvent.Centre, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendNumber(0)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    radio.sendNumber(5)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    radio.sendNumber(6)
})
HC_controller.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    basic.showIcon(IconNames.No)
    radio.sendNumber(2)
})
HC_controller.onJoystickEvent(JoystickEvent.North, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendNumber(3)
})
HC_controller.onJoystickEvent(JoystickEvent.South, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    radio.sendNumber(4)
})
HC_controller.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    basic.showIcon(IconNames.Yes)
    radio.sendNumber(1)
})
radio.setGroup(69)
