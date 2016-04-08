'use strict';
var apiUrl = "http://environment.data.gov.uk/flood-monitoring/id/stations/";
var request = require('request');
var environmentAgencyController : {

  getLatestLevel: function(stationId) {

    var requestUrl = apiUrl + stationId + ".json";

    request.get({url:requestUrl},
    	function (error, response, body) {

        res.sendStatus(200);

    	}
    );
  }

}

module.exports(environmentAgencyController);
