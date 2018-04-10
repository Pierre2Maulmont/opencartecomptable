import React, { Component } from 'react'

import Form from '../../components/Form'

export default class ChangeAgencyForm extends Component {
  handleSubmission (agency) {
    this.props.handleSubmission(agency)
  }
  render () {
    const { _handleWaypoint } = this.props
    return (
      <div>
        <Form
          form={'changeAgencyForm'}
          _handleWaypoint={_handleWaypoint}
          handleSubmission={this.handleSubmission.bind(this)}
        />
      </div>
    )
  }
}
