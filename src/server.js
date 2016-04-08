// set variables for environment
var express = require('express');
var app = express();

var nrwController = require('./naturalResourceWalesScraper');
var environmentAgencyController = require('./environmentAgencyApi');

app.get('/ea/level',
	function(req, res) {
		environmentAgencyController.getLatestLevel(req.params.stationId);
	}
);

app.get('/nrw/level',
	function(req, res) {
		nrwController.get(req.params.stationId);
	}
);

app.listen(4000);
console.log('server is running');
