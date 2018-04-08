import React, { Component } from 'react'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { HashRouter } from 'react-router-dom'
import { Scroller } from './components/scroller'
import { CookiesProvider } from 'react-cookie'

// import './App.css'

class Root extends Component {
  render () {
    return (
      <CookiesProvider>
        <HashRouter>
          <div>
            <div className='borders'>
              <div className='border hor top' />
              <div className='border hor bot' />
              <div className='border vert left' />
              <div className='border vert right' />
            </div>
            <Scroller />
            <Header />
            <Body />
            <Footer />
          </div>
        </HashRouter>
      </CookiesProvider>
    )
  }
}

export default Root
