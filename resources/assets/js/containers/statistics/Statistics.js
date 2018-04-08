/* global google */

import React, { Component } from 'react'

import PageComponent from '../../components/PageComponent'

export default class Statistiques extends Component {
  componentDidMount () {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6.1,
      center: new google.maps.LatLng(46.998282, 0.5),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    })

    var infowindow = new google.maps.InfoWindow({})

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(46.998282, 2.733741),
      map: map
    })

    google.maps.event.addListener(marker, 'click', (function (marker) {
      return function () {
        infowindow.setContent('lalala')
        infowindow.open(map, marker)
      }
    })(marker))
  }

  render () {
    return (
      <PageComponent>
        <div className='map-container'>
          <div id='map' className='map' />
          <div className='map-legend'>
            <div className='map-legend-icons-icon'>
              <i className='fa fa-map-marker' />
            </div>

            <div className='map-legend-icons-text'>
              Cliquez sur les icones pour obtenir le nombre moyen d’établissements par agence de chaque académie
            </div>

            <div className='map-legend-show-ranking'>
              <div className='my-button my-small-button my-button_white-bg'>Voir classement</div>
            </div>
          </div>
        </div>
      </PageComponent>
    )
  }
}
