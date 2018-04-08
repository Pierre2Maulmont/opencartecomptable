import React, { Component } from 'react'

import Form from '../../components/Form'

export default class ChangeAgencyForm extends Component {
  render () {
    const { _handleWaypoint, handleSubmission } = this.props
    return (
      <div>
        <Form
          form={'changeAgencyForm'}
          _handleWaypoint={_handleWaypoint}
          handleSubmission={handleSubmission}
        />
      </div>
    )
  }
}
