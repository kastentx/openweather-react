var axios = require('axios')

var openWeatherHelpers = {
  getCurrentWeather: function(location) {
    var baseURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='
    var API_KEY = '&type=accurate&APPID=c6081d84ea41fe8487c8b2dd370b4a93'
    
    return axios.get(baseURL + encodeURIComponent(location) + API_KEY + '&cnt=5')
      .then(function(weather) {
        return weather.data
    }).catch(function(err) {
      console.warn('Error in getCurrentWeather', err)
    })
  }
}

module.exports = openWeatherHelpers