const fs = require('fs');

module.exports.write = function(file, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, JSON.stringify(content), err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports.read = function(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, fileContent) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(fileContent));
      }
    });
  });
};
