import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

export default class ChangeMemoForm extends Component {
  render () {
    const { _handleWaypoint, handleSubmission, school } = this.props
    return (
      <div>
        <form>
          <textarea name='memo' id='memo' placeholder={school.memo} />

          <Waypoint
            onEnter={() => { _handleWaypoint(true) }}
            onLeave={() => { _handleWaypoint(false) }}
          />

          <div
            className='my-button my-button_blue-bg my-nav-button'
            name='modifier'
            onClick={() => { handleSubmission() }}
          >
            Modifier
          </div>
        </form>
      </div>
    )
  }
}
