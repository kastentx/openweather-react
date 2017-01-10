var React = require('react')

function Forecast(props) {
  if(props.isLoading) {
    return <div>LOADING...</div>
  }
  return (
    <div>Forecast: <pre>{JSON.stringify(props)}</pre></div>
  )
}

module.exports = Forecast