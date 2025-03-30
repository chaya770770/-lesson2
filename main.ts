let number = 1
basic.showNumber(number)
basic.forever(function () {
    number = number * 2
    basic.showNumber(number)
    basic.pause(2000)
})
