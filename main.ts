let pressao = 0
let leitura = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(pressao))
})
basic.forever(function () {
    leitura = BMP280.pressure()
    if (leitura > 2000) {
        pressao = leitura / 100
    } else {
        pressao = leitura
    }
    serial.writeValue("Pressao_hPa", pressao)
    basic.pause(500)
})
