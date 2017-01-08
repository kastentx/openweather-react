var React = require('react')
var PropTypes = React.PropTypes

function getStyles(props) {
    return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function CityPrompt(props) {
  return (
    <div style={getStyles(props)}>
      <input 
        type='text' 
        value={props.value} 
        placeholder='City, State'
        onChange={props.onCityUpdate} 
        className='form-control'/>
      <button 
        type='button' 
        onClick={props.onCitySubmit} 
        className='btn btn-success' 
        style={{margin: 10}}>
        Weather Check
      </button>
    </div>
  )
}

CityPrompt.propTypes = {
  direction: PropTypes.string,
  value: PropTypes.string.isRequired,
  onCityUpdate: PropTypes.func.isRequired, 
  onCitySubmit: PropTypes.func.isRequired
}

module.exports = CityPrompt