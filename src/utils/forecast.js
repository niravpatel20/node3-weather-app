const request = require('request');

const forecast = (latitude, longitude, callback)=>{
    const url = `https://api.darksky.net/forecast/b80a57cdc203e3ef8c2223949b21fe4e/${latitude},${longitude}?units=si`;

    request({url: url, json: true}, (error, response)=>{
        if (error){
            callback('Unable to connect Waether service!', undefined);
        }
        else if(response.body.error){
            callback('Unable to find weather!', undefined);
        }
        else{
            callback(undefined, `${response.body.hourly.summary} It is currently ${response.body.currently.temperature} degrees out and there is ${response.body.currently.precipProbability}% chances of rain.`);
        }
    });
};

module.exports = forecast;