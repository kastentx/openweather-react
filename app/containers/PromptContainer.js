var React = require('react')
var CityPrompt = require('../components/CityPrompt')
var PropTypes = React.PropTypes

var PromptContainer = React.createClass({
  getDefaultProps: function() {
    return {
      direction: 'column'
    }
  },
  propTypes : {
    direction: PropTypes.string
  },
  getInitialState: function() {
    return {
      inputValue: ''
    }
  },
  handleCityUpdate: function(e) {
    this.setState({
      inputValue: e.target.value
    })
  },
  handleCitySubmit: function(e) {
    console.log(this.state.inputValue)
  },
  render() {
    return (
      <CityPrompt 
        direction={this.props.direction}
        value={this.state.inputValue}
        onCityUpdate={this.handleCityUpdate}
        onCitySubmit={this.handleCitySubmit} />
    )
  }
})

module.exports = PromptContainer