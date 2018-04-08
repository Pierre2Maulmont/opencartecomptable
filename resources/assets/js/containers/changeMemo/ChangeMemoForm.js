import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

export default class ChangeMemoForm extends Component {
  render () {
    const { _handleWaypoint, handleSubmission, school } = this.props
    return (
      <div>
        <form>

          <table>
            <tbody>

              <tr>
                <td>
                  <textarea name='memo' id='memo' placeholder={school.memo} />
                </td>
              </tr>

              <Waypoint
                onEnter={() => { _handleWaypoint(true) }}
                onLeave={() => { _handleWaypoint(false) }}
              />

              <tr>
                <td>
                  <div
                    className='my-button my-button_blue-bg my-nav-button'
                    name='modifier'
                    onClick={() => { handleSubmission() }}
                  >
                    Modifier
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </form>
      </div>
    )
  }
}
