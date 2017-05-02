module.exports = function(urlString) {
  return new Promise(
      function(resolve, reject) {
          fetch(urlString)
            .then(function (response) { return response.json() })
            .then(function (response) {
              return resolve(response);
            })
            .catch(function (error) {
              return reject(error);
            });
      }
  );
};
