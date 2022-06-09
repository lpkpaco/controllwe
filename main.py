def my_function():
    radio.send_number(0)
HC_controller.on_joystick_event(JoystickEvent.CENTRE, my_function)

def my_function2():
    radio.send_number(5)
HC_controller.on_joystick_event(JoystickEvent.WEST, my_function2)

def my_function3():
    radio.send_number(1)
HC_controller.on_event(GamerBitPin.P13, GamerBitEvent.DOWN, my_function3)

def my_function4():
    radio.send_number(3)
HC_controller.on_joystick_event(JoystickEvent.NORTH, my_function4)

def my_function5():
    radio.send_number(4)
HC_controller.on_joystick_event(JoystickEvent.SOUTH, my_function5)

def my_function6():
    radio.send_number(1)
HC_controller.on_event(GamerBitPin.P15, GamerBitEvent.DOWN, my_function6)

def my_function7():
    radio.send_number(6)
HC_controller.on_joystick_event(JoystickEvent.EAST, my_function7)

radio.set_group(69)