import RPi.GPIO as GPIO
import time

PIR_PIN = 26         # Pin 26 on the board

GPIO.setwarnings(True)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(PIR_PIN, GPIO.IN)         #Read output from PIR motion sensor
while True:
       i=GPIO.input(PIR_PIN)
       if i==0:                 #When output from motion sensor is LOW
             print "No intruders",i
             time.sleep(0.1)
       elif i==1:               #When output from motion sensor is HIGH
             print "Intruder detected",i
             time.sleep(0.1)