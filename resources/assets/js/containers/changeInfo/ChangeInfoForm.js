import React, { Component } from 'react'

import Form from '../../components/Form'

export default class ChangeInfoForm extends Component {
  handleSubmission (school) {
    console.log(school)
    this.props.handleSubmission()
  }
  render () {
    const { _handleWaypoint, school } = this.props
    return (
      <div>
        <Form
          form={'changeInfoForm'}
          _handleWaypoint={_handleWaypoint}
          handleSubmission={this.handleSubmission.bind(this)}
          school={school}
        />
      </div>
    )
  }
}
