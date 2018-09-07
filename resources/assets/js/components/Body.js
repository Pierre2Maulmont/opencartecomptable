import React, { Component } from 'react'
import { withCookies } from 'react-cookie'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../containers/home/Home'
import Statistics from '../containers/statistics/Statistics'
import AddSchool from '../containers/addSchool/AddSchool'
import Schools from '../containers/schools/Schools'
import Agency from '../containers/agency/Agency'
import ChangeAgency from '../containers/changeAgency/ChangeAgency'
import ChangeInfo from '../containers/changeInfo/ChangeInfo'
import ChangeMemo from '../containers/changeMemo/ChangeMemo'
import Admin from '../containers/admin/Admin'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = { isAdminLogged: false }
    this.logUnlogAdmin = this.logUnlogAdmin.bind(this)
  }

  // checking whether admin is connected here because we need it site-wide
  componentDidMount () {
    const { cookies } = this.props
    let isAdminLogged = cookies.get('admin') === 'true'
    this.setState({
      isAdminLogged
    })
  }

  logUnlogAdmin (isAdminLogged) {
    this.setState({ isAdminLogged })
  }

  buildRoute (path, isExact, Component, title) {
    let routeObject = {
      'path': path,
      'isExact': isExact,
      'Component': Component,
      'title': title
    }
    return routeObject
  }

  renderRoute (routeObject, index) {
    const dynamicTitle = routeObject.title ? (routeObject.title + ' - Open Carte Comptable') : 'Open Carte Comptable'
    const Component = routeObject.Component
    const { isAdminLogged } = this.state
    return (
      <Route
        key={index}
        exact={routeObject.isExact}
        path={routeObject.path}
        render={
          (props) => <Component
            {...props}
            dynamicTitle={dynamicTitle}
            isAdminLogged={isAdminLogged}
            logUnlogAdmin={this.logUnlogAdmin}
          />
        }
      />
    )
  }

  renderRedirect (path, isExact, redirect) {
    return (
      <Route
        exact={isExact}
        path={path}
        render={
          (props) => <Redirect
            to={redirect + (props.match.params.uai !== undefined ? props.match.params.uai : '')}
          />
        }
      />
    )
  }

  render () {
    const ROUTES = [
      this.buildRoute('/', true, Home, null),
      this.buildRoute('/statistiques', false, Statistics, 'Statistiques'),
      this.buildRoute('/ajouter-etablissement', false, AddSchool, null),
      this.buildRoute('/etablissements', true, Schools, null),
      this.buildRoute('/agences', true, Schools, null),
      this.buildRoute('/etablissements/:uai/changer-agence', false, ChangeAgency, null),
      this.buildRoute('/etablissements/:uai/modifier-informations', false, ChangeInfo, null),
      this.buildRoute('/etablissements/:uai/modifier-informations-complementaires', false, ChangeMemo, null),
      this.buildRoute('/etablissements/:uai', false, Schools, null),
      this.buildRoute('/agences/:uai', false, Agency, null),
      this.buildRoute('/admin', false, Admin, null)
    ]

    return (
      <div>
        <Switch>
          {
            ROUTES.map((item, index) => {
              return (
                this.renderRoute(item, index)
              )
            })
          }
          {this.renderRedirect('/:uai(\\d{7}[A-Z])', true, '/etablissements/')}
          {this.renderRedirect('/', false, '/')}
        </Switch>
      </div>
    )
  }
}

export default withCookies(Body)
