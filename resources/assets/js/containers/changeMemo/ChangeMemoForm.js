import React, { Component } from 'react'
import Form from '../../components/Form'

export default class ChangeMemoForm extends Component {
  render () {
    const { _handleWaypoint, handleSubmission, school } = this.props
    return (
      <div>
        <Form
          form={'changeMemoForm'}
          _handleWaypoint={_handleWaypoint}
          handleSubmission={handleSubmission}
          school={school}
        />
      </div>
    )
  }
}
