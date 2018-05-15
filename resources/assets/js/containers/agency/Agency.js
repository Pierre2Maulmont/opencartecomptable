import React, { Component } from 'react'
import axios from 'axios'

import TopSection from '../../components/TopSection'
import ResultsTable from '../../components/ResultsTable'
import PageComponent from '../../components/PageComponent'

export default class Agency extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      schools: []
    })
  }

  componentDidMount () {
    // fetch corresponding agency schools
    let url = this.props.location
    const requestUrl = 'https://opencartecomptable.herokuapp.com/api' + url.pathname
    axios.get(requestUrl)
      .then(schools => {
        this.setState({ schools: schools.data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    let { schools } = this.state
    let agencyId = this.props.location.pathname.substring(9, 17)
    let agencyName = ''
    let agencyDepartment = ''
    let agencyRegion = ''
    let agencyAcademy = ''
    Object.keys(schools).map(item => {
      if (schools[item] !== undefined) {
        if (schools[item]['code_uai'] === agencyId) {
          agencyName = schools[item]['nom']
          agencyDepartment = schools[item]['departement']
          agencyRegion = schools[item]['region']
          agencyAcademy = schools[item]['academie']
        }
      }
    })

    let title = 'Agence : ' + agencyName + ' - ' +
      agencyId + ' - ' +
      schools.length + ' établissements'

    let text = 'Département : ' + agencyDepartment +
      ' | Région : ' + agencyRegion +
      ' | Académie : ' + agencyAcademy +
      '<br>Vous pouvez visualiser les informations d’un établissement en cliquant sur son nom'

    return (
      <PageComponent>
        <TopSection
          title={title}
          text={text}
          smallText
        />
        <ResultsTable
          schools={schools}
          isAgencyView
          agencyId={agencyId}
        />
      </PageComponent>
    )
  }
}
