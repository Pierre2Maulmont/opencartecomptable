import React, { Component } from 'react'
import axios from 'axios'

export default class DeleteSchool extends Component {
  handleSubmission (schoolToDelete) {
    let requestUrl = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/etablissements' : '/public/api/etablissements')
    requestUrl += '/' + schoolToDelete
    axios.delete(requestUrl)
      .then(response => {
        console.log(response)
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
