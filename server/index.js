const express = require('express');
const app = express()

app.get('/temperature', function(req, res) {
	res.send('24 ºC');
});
app.get('/thunidity', function(req, res) {
	res.send('48%');
});

app.listen(3000, function(){
	console.log('Server listening on port 3000');
});


