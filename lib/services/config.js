var defaultConfig = {
  apiUrl: 'https://api.foursquare.com/v2',
  version: '20171001',
  locale: 'en'
}

var service = {}
var buildCreds = function(config){
  var creds = {
    'v': config.version,
    'client_id': config.clientID,
    'client_secret': config.clientSecret
  };
  return creds;
}
service.getConfig = function(settings){
  var config = Object.assign({}, defaultConfig, settings);
  config.credentials = buildCreds(config);
  return config;
}

module.exports = service;
