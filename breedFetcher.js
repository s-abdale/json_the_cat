const request = require('request'); // For HTTP request
const args = process.argv.slice(2); // Takes cmd line arguments
let breedName = args[0];

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // Desterilize the string to an object so we can sort through it:
    const data = JSON.parse(body);

    let desc = `🐈 DESCRIPTION 🧶 ${'\n'}-${'\n'}🐾 ${data[0].description}`;

    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };