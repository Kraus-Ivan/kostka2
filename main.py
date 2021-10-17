povoleni = False
zmena_stran = False
#kdyz zmena_stran == False, tak má kostka 6 sten
#kdyz zmena_stran == True, tak má kostka 10 sten
pocet_tecek = 0

def dotyk():
    if input.logo_is_pressed():
        global zmena_stran
        if zmena_stran == False:
            zmena_stran = True
            soundExpression.happy.play()
            animace_deset()
        else: 
            zmena_stran = False
            soundExpression.happy.play()
            animace_sest()
basic.forever(dotyk)

def tlacitko_A():
    global povoleni
    povoleni = True
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.A, tlacitko_A)

def trepani():
    global povoleni
    global pocet_tecek
    if povoleni == True and zmena_stran == False :
        pocet_tecek = randint(1, 6)
        hazeni()
    elif povoleni == True and zmena_stran == True:
        pocet_tecek = randint(1, 10)
        hazeni()
    else: 
        soundExpression.sad.play()           
        basic.show_icon(IconNames.NO)
input.on_gesture(Gesture.SHAKE, trepani)

def hazeni():
    global povoleni
    global pocet_tecek
    if pocet_tecek == 1:
        basic.show_leds("""
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    """)
        hudba()
    elif pocet_tecek == 2:
        basic.show_leds("""
                        . . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . .
                        """)
        hudba()
    elif pocet_tecek == 3:
        basic.show_leds("""
                        . . . . #
                        . . . . .
                        . . # . .
                        . . . . .
                        # . . . .
                        """)
        hudba()
    elif pocet_tecek == 4:
        basic.show_leds("""
                        # . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . #
                        """)
        hudba()
    elif pocet_tecek == 5:
        basic.show_leds("""
                        # . . . #
                        . . . . .
                        . . # . .
                        . . . . .
                        # . . . #
                        """)
        hudba()
    elif pocet_tecek == 6:
        basic.show_leds("""
                        # . . . #
                        . . . . .
                        # . . . #
                        . . . . .
                        # . . . #
                        """)
        hudba()
    elif pocet_tecek == 7:
        basic.show_leds("""
                        # . . . #
                        . . . . .
                        # . # . #
                        . . . . .
                        # . . . #
                        """)
        hudba()
    elif pocet_tecek == 8:
        basic.show_leds("""
                        # . # . #
                        . . . . .
                        # . . . #
                        . . . . .
                        # . # . #
                        """)
        hudba()
    elif pocet_tecek == 9:
        basic.show_leds("""
                        # . # . #
                        . . . . .
                        # . # . #
                        . . . . .
                        # . # . #
                        """)
        hudba()
    elif pocet_tecek == 10:
        basic.show_leds("""
                        # . . . #
                        . . # . .
                        # # . # #
                        . . # . .
                        # . . . #
                        """)
        hudba()
    povoleni = False

def hudba():
    global pocet_tecek
    for i in range(pocet_tecek):
        music.play_tone(Note.C, music.beat())       
        music.rest(200)

#zde jsou jen animace
def animace_sest():
    basic.show_leds("""
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . # # # .
                    """)
    basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                . # # # .
                """)
    basic.show_leds("""
                . . . . .
                . . . . .
                . # # # .
                # . . . #
                . # # # .
                """)
    basic.show_leds("""
                . . . . .
                . . # . .
                . # # # .
                # . . . #
                . # # # .
                """)
    basic.show_leds("""
                . . . # .
                . . # . .
                . # # # .
                # . . . #
                . # # # .
                """)
    basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)

def animace_deset():
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . # .
        """)
    basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    # . # . #
    # . . # .
    """)
    basic.show_leds("""
    . . . . .
    . . . . .
    # . # . #
    # . # . #
    # . . # .
    """)
    basic.show_leds("""
    . . . . .
    # . # . #
    # . # . #
    # . # . #
    # . . # .
    """)
    basic.show_leds("""
    # . . # .
    # . # . #
    # . # . #
    # . # . #
    # . . # .
    """)
    basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
