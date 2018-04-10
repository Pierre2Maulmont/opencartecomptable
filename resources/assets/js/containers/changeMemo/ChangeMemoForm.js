import React, { Component } from 'react'

import Form from '../../components/Form'

export default class ChangeMemoForm extends Component {
  handleSubmission (memo) {
    this.props.handleSubmission(memo)
  }
  render () {
    const { _handleWaypoint, school } = this.props
    return (
      <div>
        <Form
          form={'changeMemoForm'}
          _handleWaypoint={_handleWaypoint}
          handleSubmission={this.handleSubmission.bind(this)}
          school={school}
        />
      </div>
    )
  }
}
