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
    this.toggleStats = this.toggleStats.bind(this)
  }
  toggleStats () {
    let showAverageStats = this.state.showAverageStats
    this.setState({
      showAverageStats: !showAverageStats
    })
  }

  render () {
    let { showAverageStats } = this.state
    return (
      <PageComponent>
        {
          // <div className='my-button my-small-button stats-toggle' onClick={this.toggleStats}>
          //   { showAverageStats ? 'Actualité des données' : 'Moyenne' }
          // </div>
        }
        {
          showAverageStats ? <AverageStatistics /> : <UpToDateStatistics />
        }
      </PageComponent>
    )
  }
}
