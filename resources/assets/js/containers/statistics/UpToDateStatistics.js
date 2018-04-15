import React, { Component } from 'react'

import StatsModal from './StatsModal'

export default class UpToDateStatistics extends Component {
  render () {
    return (
      <div className='map-container'>
        <div id='map' className='map' />
        <div className='map-legend'>
          <div className='map-legend-up-to-date-rate'>
            Académie: Abcde<br /><br />
            Taux de mise à jour des infos des établissements: 25%
          </div>

          <div className='map-legend-show-details'>
            <StatsModal modalText={'Voir détails'} />
          </div>
        </div>
      </div>
    )
  }
}
