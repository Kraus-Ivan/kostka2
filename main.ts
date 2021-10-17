let povoleni = false
let zmena_stran = false
// kdyz zmena_stran == False, tak má kostka 6 sten
// kdyz zmena_stran == True, tak má kostka 10 sten
let pocet_tecek = 0
basic.forever(function dotyk() {
    if (input.logoIsPressed()) {
        
        if (zmena_stran == false) {
            zmena_stran = true
            soundExpression.happy.play()
            animace_deset()
        } else {
            zmena_stran = false
            soundExpression.happy.play()
            animace_sest()
        }
        
    }
    
})
input.onButtonPressed(Button.A, function tlacitko_A() {
    
    povoleni = true
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function trepani() {
    
    
    if (povoleni == true && zmena_stran == false) {
        pocet_tecek = randint(1, 6)
        displej()
    } else if (povoleni == true && zmena_stran == true) {
        pocet_tecek = randint(1, 10)
        displej()
    } else {
        soundExpression.sad.play()
        basic.showIcon(IconNames.No)
    }
    
})
function displej() {
    
    
    if (pocet_tecek == 1) {
        basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
        hudba()
    } else if (pocet_tecek == 2) {
        basic.showLeds(`
                        . . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . .
                        `)
        hudba()
    } else if (pocet_tecek == 3) {
        basic.showLeds(`
                        . . . . #
                        . . . . .
                        . . # . .
                        . . . . .
                        # . . . .
                        `)
        hudba()
    } else if (pocet_tecek == 4) {
        basic.showLeds(`
                        # . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . #
                        `)
        hudba()
    } else if (pocet_tecek == 5) {
        basic.showLeds(`
                        # . . . #
                        . . . . .
                        . . # . .
                        . . . . .
                        # . . . #
                        `)
        hudba()
    } else if (pocet_tecek == 6) {
        basic.showLeds(`
                        # . . . #
                        . . . . .
                        # . . . #
                        . . . . .
                        # . . . #
                        `)
        hudba()
    } else if (pocet_tecek == 7) {
        basic.showLeds(`
                        # . . . #
                        . . . . .
                        # . # . #
                        . . . . .
                        # . . . #
                        `)
        hudba()
    } else if (pocet_tecek == 8) {
        basic.showLeds(`
                        # . # . #
                        . . . . .
                        # . . . #
                        . . . . .
                        # . # . #
                        `)
        hudba()
    } else if (pocet_tecek == 9) {
        basic.showLeds(`
                        # . # . #
                        . . . . .
                        # . # . #
                        . . . . .
                        # . # . #
                        `)
        hudba()
    } else if (pocet_tecek == 10) {
        basic.showLeds(`
                        # . . . #
                        . . # . .
                        # # . # #
                        . . # . .
                        # . . . #
                        `)
        hudba()
    }
    
    povoleni = false
}

function hudba() {
    
    for (let i = 0; i < pocet_tecek; i++) {
        music.playTone(Note.C, music.beat())
        music.rest(200)
    }
}

// zde jsou jen animace
function animace_sest() {
    basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . # # # .
                    `)
    basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                . # # # .
                `)
    basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                # . . . #
                . # # # .
                `)
    basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                # . . . #
                . # # # .
                `)
    basic.showLeds(`
                . . . # .
                . . # . .
                . # # # .
                # . . . #
                . # # # .
                `)
    basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
}

function animace_deset() {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . # .
        `)
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . # . #
    # . . # .
    `)
    basic.showLeds(`
    . . . . .
    . . . . .
    # . # . #
    # . # . #
    # . . # .
    `)
    basic.showLeds(`
    . . . . .
    # . # . #
    # . # . #
    # . # . #
    # . . # .
    `)
    basic.showLeds(`
    # . . # .
    # . # . #
    # . # . #
    # . # . #
    # . . # .
    `)
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
}

