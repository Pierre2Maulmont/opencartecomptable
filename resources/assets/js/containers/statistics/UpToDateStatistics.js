import React, { Component } from 'react'
import axios from 'axios'

import StatsModal from './StatsModal'

export default class UpToDateStatistics extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      statistics: null
    })
  }

  handleHover (e) {
    axios.get('http://localhost:8888/public/api/statisticsUpToDate/' + 'Rouen')
      .then(statistics => {
        this.setState({ statistics: statistics.data })
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(() => {
        console.log(this.state)
      })
  }

  render () {
    return (
      <div className='map-container'>
        <div id='map' className='map'>
          <div className='up-to-date-content-provisoire'>
            <ul>
              <li onMouseOver={() => { this.handleHover() }}>Aix-Marseille</li>
              <li onMouseOver={() => { this.handleHover() }}>Amiens</li>
              <li onMouseOver={() => { this.handleHover() }}>Besançon</li>
              <li onMouseOver={() => { this.handleHover() }}>Bordeaux</li>
              <li onMouseOver={() => { this.handleHover() }}>Caen</li>
              <li onMouseOver={() => { this.handleHover() }}>Clermont-Ferrand</li>
              <li onMouseOver={() => { this.handleHover() }}>Corse</li>
              <li onMouseOver={() => { this.handleHover() }}>Créteil</li>
              <li onMouseOver={() => { this.handleHover() }}>Dijon</li>
              <li onMouseOver={() => { this.handleHover() }}>Grenoble</li>
              <li onMouseOver={() => { this.handleHover() }}>Guadeloupe</li>
              <li onMouseOver={() => { this.handleHover() }}>Guyane</li>
              <li onMouseOver={() => { this.handleHover() }}>La Réunion</li>
              <li onMouseOver={() => { this.handleHover() }}>Lille</li>
              <li onMouseOver={() => { this.handleHover() }}>Limoges</li>
              <li onMouseOver={() => { this.handleHover() }}>Lyon</li>
              <li onMouseOver={() => { this.handleHover() }}>Martinique</li>
              <li onMouseOver={() => { this.handleHover() }}>Mayotte</li>
              <li onMouseOver={() => { this.handleHover() }}>Montpellier</li>
              <li onMouseOver={() => { this.handleHover() }}>Nancy-Metz</li>
              <li onMouseOver={() => { this.handleHover() }}>Nantes</li>
              <li onMouseOver={() => { this.handleHover() }}>Nice</li>
              <li onMouseOver={() => { this.handleHover() }}>Orléans-Tour</li>
              <li onMouseOver={() => { this.handleHover() }}>Paris</li>
              <li onMouseOver={() => { this.handleHover() }}>Poitiers</li>
              <li onMouseOver={() => { this.handleHover() }}>Reims</li>
              <li onMouseOver={() => { this.handleHover() }}>Rennes</li>
              <li onMouseOver={() => { this.handleHover() }}>Rouen</li>
              <li onMouseOver={() => { this.handleHover() }}>Strasbourg</li>
              <li onMouseOver={() => { this.handleHover() }}>Saint-Pierre-et-Miquelon</li>
              <li onMouseOver={() => { this.handleHover() }}>Toulouse</li>
              <li onMouseOver={() => { this.handleHover() }}>Versailles</li>
            </ul>
          </div>
        </div>
        {
          this.state.statistics ? <div className='map-legend'>
            <div className='map-legend-up-to-date-rate'>
              Académie: Abcde<br /><br />
              Taux de mise à jour des infos des établissements: 25%
            </div>

            <div className='map-legend-show-details'>
              <StatsModal modalText={'Voir détails'} />
            </div>
          </div>
          : <div className='map-legend'>
            <div className='map-legend-hover-academies'>
              Survolez les académies pour visualiser les stats BLABLABLA
            </div>
          </div>
        }

      </div>
    )
  }
}
