import React, { Component } from 'react'
import axios from 'axios'

export default class DeleteSchool extends Component {
  handleSubmission (schoolToDelete) {
    if (!window.confirm('Êtes-vous sûr(e) de vouloir supprimer cet établissement?')) {
      return null
    }
    const { fetchSchools } = this.props
    let requestUrl = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/etablissements' : '/public/api/etablissements')
    requestUrl += '/' + schoolToDelete
    axios.delete(requestUrl)
      .then(response => {
        console.log(response)
        fetchSchools()
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    const { codeUai } = this.props
    return (
      <div
        className='my-button my-small-button delete-button'
        onClick={() => { this.handleSubmission(codeUai) }}
      >
        ×
      </div>
    )
  }
}
