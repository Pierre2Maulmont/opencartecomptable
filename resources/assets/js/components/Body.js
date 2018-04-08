import React, { Component } from 'react'
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

export default class Body extends Component {
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
    return (
      <Route
        key={index}
        exact={routeObject.isExact}
        path={routeObject.path}
        render={(props) => <Component {...props} dynamicTitle={dynamicTitle} />}
      />
    )
  }

  renderRedirect (path, isExact, redirect) {
    return (
      <Route
        exact={isExact}
        path={path}
        render={() => <Redirect to={redirect} />}
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
          {this.renderRedirect('/', false, '/')}
        </Switch>
      </div>
    )
  }
}
