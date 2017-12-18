var request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/ae73721e50eb8124686e6a510c697d04/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connect to forecast.io servers');
        } else if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });    
};

module.exports.getWeather = getWeather;


