import React, { Component } from 'react'

import Form from '../../components/Form'

export default class SearchForm extends Component {
  handleSubmission (school) {
    this.props.handleSubmission(school)
  }
  render () {
    let { _handleWaypoint } = this.props
    return (
      <div>
        <Form
          form={'addSchoolForm'}
          _handleWaypoint={_handleWaypoint}
          handleSubmission={this.handleSubmission.bind(this)}
        />
      </div>
    )
  }
}
