const {Navigator} = require("node-navigator");
const navigator = new Navigator();

function getLocation(callback) {
    navigator.geolocation.getCurrentPosition(function (position) {
        callback(position);
    });
}

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getWeather(coords, callback) {
    const apiKey = "YOUR KEY HERE";
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        if (req.status === 200) {
            callback(JSON.parse(req.responseText));
        } else {
            callback(new Error(req.statusText));
        }
    };
    req.send();
}

getLocation(function (coords) {
    getWeather(coords, function (weather) {
        console.log(weather);
    });
});