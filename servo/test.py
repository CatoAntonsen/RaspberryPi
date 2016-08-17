import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)

GPIO.setup(12, GPIO.OUT)

freq = 50

pwm = GPIO.PWM(12, freq)

left = 0.75
right = 2.5
middle = (right - left) / 2 + left

pList = [left, right]

ms = 1000 / freq

for i in range(3):
	for p in pList:
		duty = p * 100 / ms
		print "Position: " + str(p)
		print "Duty cycle: " + str(duty) + "%"
		print ""
		pwm.start(duty)
		time.sleep(.5)


pwm.stop()
GPIO.cleanup()
