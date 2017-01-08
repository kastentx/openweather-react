var React = require('react')

var styles = {
  wrapper: {
    width: '100%',
    height: '94%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  }
}

function Main(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <h1 style={{margin: 0}}>openweather.react</h1>
      </div>
      {props.children}
    </div>
  )
}

module.exports = Main