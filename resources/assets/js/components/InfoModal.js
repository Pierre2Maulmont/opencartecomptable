import React, { Component } from 'react'

import Modal from 'react-modal'
import { NavLink } from 'react-router-dom'

const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    this.setState({modalIsOpen: true})
  }

  closeModal () {
    this.setState({modalIsOpen: false})
  }

  render () {
    let { modalText, school } = this.props
    return (
      <div>
        <span onClick={this.openModal}>{modalText}</span>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='School Modal'
          overlayClassName='school-modal-overlay'
          className='school-modal-content'
        >
          <div className='school-modal-top'>
            <div className='school-modal-header'>
              <div className='school-modal-title'>Nom du lycée</div>
              <div className='school-modal-close' onClick={this.closeModal}>&times;</div>
            </div>
            <div className='school-modal-top-content'>
              <p>Ces informations étaient à jour le : <span className={school.updateDate === '2014-01-01' ? 'update-date-grey' : ''}>{school.updateDate}</span></p>
              <p><i className='fa fa-thumbs-up update-icon' /><span className='update-message'>Je confirme que ces informations sont aujourd’hui à jour</span></p>
            </div>
          </div>
          <div className='school-modal-bottom'>
            <div className='school-modal-info school-modal-info-left'>
              <h4>Type d’établissement :</h4>
              <p>Lycée</p>

              <h4>Adresse :</h4>
              <p>4 Place de la Nation</p>

              <h4>Téléphone :</h4>
              <p>00 00 00 00 00</p>

              <h4>Total recettes annuelles&nbsp;:</h4>
              <p>Plus de deux millions €</p>

              <div className='school-modal-button'>
                <NavLink className='my-button my-small-button' to={'/etablissements/0750680G/modifier-informations'}>Modifier</NavLink>
              </div>
            </div>

            <div className='school-modal-info school-modal-info-right'>
              <h4>Informations complémentaires :</h4>
              <p>En rénovation</p>

              <div className='school-modal-button'>
                <NavLink className='my-button my-small-button' to={'/etablissements/0750680G/modifier-informations-complementaires'}>Modifier</NavLink>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
