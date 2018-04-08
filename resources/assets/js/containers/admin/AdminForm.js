import React, { Component } from 'react'

import Form from '../../components/Form'

export default class SearchForm extends Component {
  handleSubmission (adminInput) {
    // console.log(adminInput)
    this.props.handleSubmission()
  }

  render () {
    return (
      <div>
        <Form
          form={'adminForm'}
          handleSubmission={this.handleSubmission.bind(this)}
        />
      </div>
    )
  }
}
