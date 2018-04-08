import React, { Component } from 'react'

import Form from '../../components/Form'

export default class SearchForm extends Component {
  render () {
    let { _handleWaypoint, handleSubmission } = this.props
    return (
      <div>
        <Form
          form={'addSchoolForm'}
          _handleWaypoint={_handleWaypoint}
          handleSubmission={handleSubmission}
        />
      </div>
    )
  }
}
