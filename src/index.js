import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import Loadable from 'react-loadable'

// ReactDOM.render(<App />, document.getElementById('root'))
window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<App />, document.getElementById('root'))
  })
}

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    ReactDOM.render(<NextApp />, document.getElementById('root'))
  })
}
