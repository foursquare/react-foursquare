var querystring = require('querystring'),
    request = require('../services/request');

module.exports = function(config) {
    var credentials = config.credentials;
    config = Object.assign(config, {
        apiFeature: '/venues'
    });

    return {
        categories: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/categories?" +
              querystring.stringify(credentials);
            return request(urlString);
        },
        explore: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/explore?" +
              querystring.stringify(params) + '&' +
              querystring.stringify(credentials);
            return request(urlString);
        },
        trending: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/trending?" +
              querystring.stringify(params) + '&' +
              querystring.stringify(credentials);
            return request(urlString);
        },
        getVenues: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/search?" +
              querystring.stringify(params) + '&' +
              querystring.stringify(credentials);
            return request(urlString);
        },
        getVenue: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/" +
                params.venue_id + '?' +
                querystring.stringify(credentials);
            return request(urlString);
        },
        getVenuePhotos: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/" +
                params.venue_id + '/photos?' +
                querystring.stringify(credentials);
            return request(urlString);
        },
        getVenueTips: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/" +
                params.venue_id + '/tips?' +
                querystring.stringify(credentials);
            return request(urlString);
        },
        suggestCompletion: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/suggestcompletion?" +
              querystring.stringify(params) + '&' +
              querystring.stringify(credentials);
            return request(urlString);
        },
    };
};
