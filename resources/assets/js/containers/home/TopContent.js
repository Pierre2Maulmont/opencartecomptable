import React, { Component } from 'react'

export default class TopContent extends Component {
  componentDidMount () {
    this.timer = setInterval(function () {
      let degrees = ((window.pageYOffset) / 10) + 30
      document.getElementById('sextant').style.transform = 'rotate(' + degrees + 'deg)'
    }, 10)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    let { scrolledPast } = this.props
    return (
      <div className='top-content-box'>
        <div className='container'>
          <div className='row'>
            <div className='top-content-title'>Bienvenue sur Open Carte Comptable</div>
            <div className={'col-sm-6 top-content-text-box' + (scrolledPast ? ' top-content-text-box-expand' : '')}>
              <div className='top-content-text'>
                <span className='highlight'>
                  Vous êtes agent comptable ou gestionnaire d’EPLE :
                  <br />
                  &bull; consultez la fiche de votre établissement
                  <br />
                  &bull; mettez à jour les informations
                  <br />
                  &bull; et construisez la carte de France des agences comptables
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='sextant-box'>
          <img id='sextant' className='sextant' alt='sextant' src='https://image.ibb.co/e450iy/sextant.png' />
        </div>
      </div>
    )
  }
}
