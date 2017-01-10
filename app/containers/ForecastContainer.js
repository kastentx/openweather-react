var React = require('react')
var Forecast = require('../components/Forecast')
var openWeatherHelpers = require('../utils/helpers')

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      forecast: {}
    }
  },
  componentDidMount: function() {
    openWeatherHelpers.getCurrentWeather(this.props.routeParams.city)
      .then(function(weather) {
        this.setState({
          isLoading: false,
          forecast: weather
        })
      }.bind(this))
  },
  componentWillReceiveProps: function(newProps) {
      openWeatherHelpers.getCurrentWeather(newProps.routeParams.city)
      .then(function(weather) {
        this.setState({
          isLoading: false,
          forecast: weather
        })
      }.bind(this))

  },
  render: function() {
    return (
      <Forecast 
        city={this.props.routeParams.city}
        forecast={this.state.forecast}
        isLoading={this.state.isLoading} />
    )
  }
})

module.exports = ForecastContainer