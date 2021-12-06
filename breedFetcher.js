const request = require('request'); // For HTTP request
const args = process.argv.slice(2); // Takes cmd line arguments
let inputBreedName = args[0];

const fetchBreedDescription = function(inputBreedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${inputBreedName}`, (error, response, body) => {
    // Desterilize the string to an object so we can sort through it:
    const data = JSON.parse(body);
  
    if (error) {
      // Edge case: if request function fails
      console.log (`🚨 ${error}`); // prints details
    } else if (data[0] === undefined) {
      // Edge case: if breed is not found
      console.log (`🚨 Error: Breed not found`);
    } else {
      // Output description:
      console.log (`🐈 DESCRIPTION 🧶 ${'\n'}-${'\n'}🐾 ${data[0].description}`);
    }
  });
};

module.exports = { fetchBreedDescription };