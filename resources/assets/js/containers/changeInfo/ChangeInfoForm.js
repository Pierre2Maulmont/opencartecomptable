import React, { Component } from 'react'

import Form from '../../components/Form'

export default class ChangeInfoForm extends Component {
  render () {
    const { _handleWaypoint, handleSubmission, school } = this.props
    return (
      <div>
        <Form
          form={'changeInfoForm'}
          _handleWaypoint={_handleWaypoint}
          handleSubmission={handleSubmission}
          school={school}
        />
      </div>
    )
  }
}
