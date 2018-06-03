import React, { Component } from 'react'

import Agencies from './Agencies'
import Informations from './Informations'
import AddedSchools from './AddedSchools'
import DeletedSchools from './DeletedSchools'

const ADMINVIEWS = {
  agencies: Agencies,
  informations: Informations,
  addedSchools: AddedSchools,
  deletedSchools: DeletedSchools
}

export default class AdminActions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      view: null
    }
  }

  changeView (view) {
    this.setState({
      view
    })
  }

  renderAdminActionComponent (view) {
    let Component = ADMINVIEWS[view]
    return (
      <div>
        <a onClick={() => this.changeView(null)}>Retour</a>
        <Component />
      </div>
    )
  }

  renderAdminActionsList () {
    return (
      <div>
        <a onClick={() => this.changeView('agencies')}>Modifications d’agences</a>
        <br />
        <a onClick={() => this.changeView('informations')}>Modifications d’informations</a>
        <br />
        <a onClick={() => this.changeView('addedSchools')}>Ajouts</a>
        <br />
        <a onClick={() => this.changeView('deletedSchools')}>Suppressions</a>
      </div>
    )
  }

  render () {
    let { view } = this.state
    if (view !== null) {
      return this.renderAdminActionComponent(view)
    } else {
      return this.renderAdminActionsList()
    }
  }
}
