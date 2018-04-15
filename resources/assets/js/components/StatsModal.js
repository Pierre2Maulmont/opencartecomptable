import React, { Component } from 'react'
import Modal from 'react-modal'
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
  }

  openModal () {
    this.setState({modalIsOpen: true})
  }

  closeModal () {
    this.setState({modalIsOpen: false})
  }

  componentDidMount () {
    axios.get('http://localhost:8888/public/api/statistics')
      .then(statistics => {
        this.setState({ statistics: statistics.data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    let { modalText } = this.props
    let { statistics } = this.state
    // console.log(this.state.statistics);
    return (
      <div>
        <div className='my-button my-small-button my-button_white-bg' onClick={this.openModal}>{modalText}</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Statistics Modal'
          overlayClassName='stats-modal-overlay'
          className='stats-modal-content'
        >
          <div className='stats-modal-close-section'>
            <div className='stats-modal-close' onClick={this.closeModal}>&times;</div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Académie</th>
                <th>Nombre moyen d’établissements par agence comptable</th>
              </tr>
            </thead>
            <tbody>
              {
                statistics && statistics.map(academy => {
                  return (
                    <tr key={academy.id}>
                      <td>{academy.academie}</td>
                      <td className='average'>{academy.moyenne}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </Modal>
      </div>
    )
  }
}
