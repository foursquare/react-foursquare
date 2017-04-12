module.exports = function(urlString) {
  return new Promise(
      function(resolve, reject) {
          fetch(urlString)
            .then((response) => response.json())
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            });
      }
  );
