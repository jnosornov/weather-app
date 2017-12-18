/*var yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch for weather',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results);
        //console.log(JSON.stringify(results, undefined, 2));
    }
});
*/

//ae73721e50eb8124686e6a510c697d04 API key


var request = require('request');

request({
    url:'https://api.darksky.net/forecast/ae73721e50eb8124686e6a510c697d04/39.9396284,-75.18663959999999',
    json: true
}, (error, response, body) => {
    if(error) {
        console.log('Unable to connect to forecast.io servers');
    } else if(!error && response.statusCode === 200) {
        console.log(`Temperature: ${body.currently.temperature}`);
    } else {
        console.log('Unable to fetch weather.');
    }
});
