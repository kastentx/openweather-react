var React = require('react')
var PropTypes = React.PropTypes
var CityPrompt = require('../components/CityPrompt')

var PromptContainer = React.createClass({
  getDefaultProps: function() {
    return {
      direction: 'column'
    }
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
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
    this.context.router.push('/forecast/' + this.state.inputValue)
  },
  render: function() {
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