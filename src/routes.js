import React from 'react'
import HomePage from './components/HomePage'
import { Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/common/Navbar'

export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Route exact path='/' component={HomePage} />
      </React.Fragment>
    )
  }
}