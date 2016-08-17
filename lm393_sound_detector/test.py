import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(18, GPIO.IN)

try:

	while True:
		GPIO.wait_for_edge(18, GPIO.FALLING)
		print "SOUND!!!!!!!!!!"
finally:
	GPIO.cleanup()
