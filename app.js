var request = require('request');
var yargs = require('yargs');

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

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301%20%lombard%20street`,
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});