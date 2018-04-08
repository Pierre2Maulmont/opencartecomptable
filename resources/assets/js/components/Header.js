import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render () {
    return (
      <div className='header-box'>
        <div className='container'>
          <div className='row'>
            <div className='header__links'>
              <div className='header__left'>
                <NavLink to='/'>Open Carte Comptable</NavLink>
              </div>
              <div className='header__right'>
                <NavLink to='/ajouter-etablissement'>Ajouter un établissement</NavLink>
                <NavLink to='/statistiques'>Statistiques</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
