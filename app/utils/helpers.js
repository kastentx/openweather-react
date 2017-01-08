var axios = require('axios')

var helpers = {
  getCurrentWeather: function(location) {
    var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
    var API_KEY = '&type=accurate&APPID=c6081d84ea41fe8487c8b2dd370b4a93'
    
    return axios.get(baseURL + encodeURIComponent(location) + API_KEY)
      .then(function(weather) {
        console.log(weather.data)
    }).catch(function(err) {
      console.warn('Error in getCurrentWeather', err)
    })
  }
}

module.exports = helpers