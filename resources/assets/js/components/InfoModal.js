import React, { Component } from 'react'
import Modal from 'react-modal'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

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
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  openModal () {
    this.setState({modalIsOpen: true})
  }

  closeModal () {
    this.setState({modalIsOpen: false})
  }

  handleUpdate () {
    let codeUai = this.props.school.code_uai
    let { fetchSchools } = this.props
    axios.put('https://opencartecomptable.herokuapp.com/apizregdr/etablissements/' + codeUai, {
      update: ''
    })
    .then(response => {
      fetchSchools()
    })
    .catch(error => {
      console.log(error)
    })
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
              <div className='school-modal-title'>{school.nom}</div>
              <div className='school-modal-close' onClick={this.closeModal}>&times;</div>
            </div>
            <div className='school-modal-top-content'>
              <p>
                Ces informations étaient à jour le :&nbsp;
                <span className={school.up_to_date === '2014-01-01' ? 'update-date-grey' : ''}>
                  {school.up_to_date}
                </span>
              </p>
              <p className='udpate-section' onClick={this.handleUpdate}>
                <i className='fa fa-thumbs-up update-icon' />
                <span className='update-message'>
                  Je confirme que ces informations sont aujourd’hui à jour
                </span>
              </p>
            </div>
          </div>
          <div className='school-modal-bottom'>
            <div className='school-modal-info school-modal-info-left'>
              <h4>Type d’établissement :</h4>
              <p>{school.type_etablissement}</p>

              <h4>Adresse :</h4>
              <p>{school.adresse}</p>

              <h4>Téléphone :</h4>
              <p>{school.telephone}</p>

              <h4>Total recettes annuelles&nbsp;:</h4>
              <p>{school.ca ? school.ca : '-'}</p>

              <div className='school-modal-button'>
                <NavLink
                  className='my-button my-small-button'
                  to={'/etablissements/' + school.code_uai + '/modifier-informations'}
                >
                  Modifier
                </NavLink>
              </div>
            </div>

            <div className='school-modal-info school-modal-info-right'>
              <h4>Informations complémentaires :</h4>
              <p>{school.memo ? school.memo : '-'}</p>

              <div className='school-modal-button'>
                <NavLink
                  className='my-button my-small-button'
                  to={'/etablissements/' + school.code_uai + '/modifier-informations-complementaires'}
                >
                  Modifier
                </NavLink>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
