import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

export default class ChangeAgencyForm extends Component {
  render () {
    const { _handleWaypoint, handleSubmission } = this.props
    return (
      <div>
        <form>

          <table>
            <tbody>

              <tr>
                <td>
                  <input type='text' id='code_uai' name='code_uai' placeholder='UAI nouvelle agence' />
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
