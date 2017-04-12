var configService = require('./lib/services/config');
// API Features
var venues = require('./lib/api/venues');

module.exports = function(settings){
  var config = configService.getConfig(settings);
  var foursquare = {
    venues: venues(config)
  };
  return foursquare;
};
