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
    const requestUrl = 'http://localhost:8888/public/api' + url.pathname
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
    let title = 'Agence : Lycée Arago - 0750680G - 3 établissements'
    let text = 'Département : 75 - Paris | Région : Île-de-France | Académie : Paris<br>Vous pouvez visualiser les informations d’un établissement en cliquant sur son nom'
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
        />
      </PageComponent>
    )
  }
}
