import React, { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <div className='footer-box'>
        <div className='container'>
          <div className='row footer-content'>
            <a href='https://openacademie.beta.gouv.fr/' target='_blank' rel='noopener noreferrer'>
              <img className='footer-logo' src='http://opencartecomptable.fr/public/img/logo.png' alt='Open Académie' />
            </a>
            <a href='mailto:openacademie@beta.gouv.fr'>openacademie@beta.gouv.fr</a>
          </div>
        </div>
      </div>
    )
  }
}
