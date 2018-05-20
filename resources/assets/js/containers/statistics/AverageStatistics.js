/* global google */

import React, { Component } from 'react'
import axios from 'axios'

import StatsModal from './StatsModal'

export default class AverageStatistics extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      statistics: null
    })
  }

  componentDidMount () {
    let requestUrl = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/statisticsAverage' : '/public/api/statisticsAverage')
    axios.get(requestUrl)
      .then(statistics => {
        this.setState({ statistics: statistics.data })
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(() => {
        let statistics = this.state.statistics

        const locations = []

        statistics.map(item => {
          let academy = [item.academie + ' : ' + item.moyenne, item.lat, item.lng, item.id]
          locations.push(academy)
        })

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6.1,
          center: new google.maps.LatLng(46.998282, 2.733741),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        })

        var infowindow = new google.maps.InfoWindow({})

        var marker, i

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          })

          google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
              infowindow.setContent(locations[i][0])
              infowindow.open(map, marker)
            }
          })(marker, i))
        }
      })
  }

  render () {
    let { statistics } = this.state
    return (
      <div className='map-container'>
        <div id='map' className='map' />
        <div className='map-legend'>
          <div className='map-legend-icons-icon'>
            <i className='fa fa-map-marker' />
          </div>

          <div className='map-legend-icons-text'>
            Cliquez sur les icônes pour obtenir le nombre moyen d’établissements par agence de chaque académie
          </div>

          <div className='map-legend-show-ranking'>
            <StatsModal modalText={'Voir classement'} statistics={statistics} />
          </div>
        </div>
      </div>
    )
  }
}
