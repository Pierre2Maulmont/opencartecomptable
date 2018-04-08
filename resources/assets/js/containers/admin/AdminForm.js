import React, { Component } from 'react'

import Form from '../../components/Form'

export default class SearchForm extends Component {
  render () {
    return (
      <div>
        <Form
          form={'adminForm'}
          handleSubmission={this.props.handleSubmission()}
        />
      </div>
    )
  }
}
