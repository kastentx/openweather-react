var React = require('react')
var PromptContainer = require('../containers/PromptContainer')

var styles = {
  bgContainer: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/static/bg.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  text: {
    color: 'white',
    fontWeight: 100,
    fontSize: 45
  }
}

function Home(props) {
  return (
    <div style={styles.bgContainer}>
      <h1 style={styles.text}>Enter a City and State</h1>
      <PromptContainer />
    </div>
  )
}

module.exports = Home