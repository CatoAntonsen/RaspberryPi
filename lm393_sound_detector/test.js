const 	Gpio = require('onoff').Gpio,
		lm393 = new Gpio(24, 'in', 'both', { activeLow: true }), // Physical 18
		minTimeBetweenClaps = 10,
		maxTimeBetweenClaps = 1000,
		waitAfterLastClap = 2000;

var 	lastSound = null,
		lastValue = 0,
		claps = 0; 

console.log("Starting ...");

lm393.watch(function(err, value) {
	var now = Date.now();
	
	if (err) {
		throw err;
	}

	if (value == 1 && lastValue != 1) {
		lastValue = 1;
	
		var timeSinceLastSound = now - lastSound;
		
		if (timeSinceLastSound > minTimeBetweenClaps) {
			if (timeSinceLastSound < maxTimeBetweenClaps) {
				claps++;
			} else {
				claps = 1;
			}
			console.log("Claps: " + claps);
		
			lastSound = now;
		}
	
	} else if (value == 0 && lastValue != 0) {
		//console.log("Silent...")
		lastValue = 0;
		
		setTimeout(function() {
			if (claps > 0 && Date.now() - lastSound > waitAfterLastClap) {
				console.log("SENDING CLAPS: " + claps);
				claps = 0;
			}
		}, 2000);;

	} 
} );

process.on('SIGINT', function () {
	console.log("Freeing...");
  lm393.unexport();
});


console.log("At end...");
