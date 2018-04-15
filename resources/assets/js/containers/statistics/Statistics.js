import React, { Component } from 'react'

import PageComponent from '../../components/PageComponent'
import AverageStatistics from './AverageStatistics'
import UpToDateStatistics from './UpToDateStatistics'

export default class Statistiques extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      showAverageStats: true
    })
  }
  render () {
    return (
      <PageComponent>
        {
          this.state.showAverageStats ? <AverageStatistics /> : <UpToDateStatistics />
        }
      </PageComponent>
    )
  }
}
