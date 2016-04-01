// set variables for environment
var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

var apiUrl = "http://environment.data.gov.uk/flood-monitoring/id/stations/1491TH.json";

request.get({url:apiUrl}, 
		function (error, response, body) {
			console.log(body);
});

app.listen(4000);
console.log('server is running');
