import React, { Component } from 'react'

export default class SearchForm extends Component {
  render () {
    return (
      <div>
        <form>
          <input type='text' name='email' placeholder='Email' />
          <input type='password' name='password' placeholder='password' />
          <div
            className='my-button my-button_blue-bg'
            name='ajouter'
            onClick={() => { this.props.handleSubmission() }}
          >
            Ajouter
          </div>
        </form>
      </div>
    )
  }
}
