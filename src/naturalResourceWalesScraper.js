var cheerio = require('cheerio');

var NRWController {

  getLatestValue: function(data, callback) {
    data('#MainContent_LatestValueWithUnits').filter(function(){
      var levelData = data(this);
      var level = levelData['0'].children[0].data;
      callback(level);
    });
  }

  getTimeRecorded: function(data, callback) {
    data('#MainContent_LatestTime').filter(function(){
      var timeData = $(this);
      var datetime = timeData['0'].children[0].data;
      callback(datetime);
    });
  }


  get: function(riverId, res) {

      var stationUrl = "http://rloi.naturalresources.wales/ViewDetails?station=" + riverId;

      request(stationUrl, function(error, response, html){

        if (error) {
          response.sendStatus(400);
          return;
        }

        var riverData = {
          level: '',
          datetimeRecorded: '',
          urlForLevel: stationUrl
        }

        var $ = cheerio.load(html);

        this.getLatestValue($, function(level) {
          json.level = level;
        });

        this.getTimeRecorded($, function(time) {
          json.datetimeRecorded = time;
        });

        res.send(json);
    });
  }
}

module.exports(NRWController);
