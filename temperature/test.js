var ds18b20 = require("ds18b20");

// ds18b20.sensors(function(err, ids) {
	// console.log(ids);
// });

ds18b20.temperature('28-0214660d94ff', function(err, value) {
  console.log('Current temperature is', value);
});