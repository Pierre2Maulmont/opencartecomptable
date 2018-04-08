import React, { Component } from 'react'

import PageComponent from '../../components/PageComponent'
import TopSection from '../../components/TopSection'
import ResultsTable from '../../components/ResultsTable'

export default class Schools extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      schools: []
    })
  }

  componentDidMount () {
    if (this.props.location.pathname === '/etablissements/0750680G') {
      // fetch corresponding school
      this.setState({
        schools: [
          {
            code_uai: '0750680G',
            code_uai_agence_comptable: '0750680G',
            type_etablissement: 'Lycée',
            nom: 'Arago',
            adresse: '4 Place de la Nation',
            code_postal: '75012',
            commune: 'Paris',
            departement: '75 - Paris',
            region: 'Île-de-France',
            academie: 'Paris',
            telephone: '01 43 07 37 40',
            ca: 'Jusqu’à un million €',
            memo: 'Rénovation en cours',
            up_to_date: '2014-01-01'
          }
        ]
      })
    } else if (this.props.location.pathname === '/etablissements') {
      // fetch schools corresponding to search criteria
      this.setState({
        schools: [
          {
            code_uai: '0750680G',
            code_uai_agence_comptable: '0750680G',
            type_etablissement: 'Lycée',
            nom: 'Lycée Arago',
            adresse: '4 Place de la Nation',
            code_postal: '75012',
            commune: 'Paris',
            departement: '75 - Paris',
            region: 'Île-de-France',
            academie: 'Paris',
            telephone: '01 43 07 37 40',
            ca: 'Jusqu’à un million €',
            memo: 'Rénovation en cours',
            up_to_date: '2014-01-01'
          },
          {
            code_uai: '0750676C',
            code_uai_agence_comptable: '0750680G',
            type_etablissement: 'Lycée',
            nom: 'Lycée polyvalent Dorian',
            adresse: '74 avenue Philippe Auguste',
            code_postal: '75011',
            commune: 'Paris',
            departement: '75 - Paris',
            region: 'Île-de-France',
            academie: 'Paris',
            telephone: '01 44 93 81 30',
            ca: 'Jusqu’à deux millions €',
            memo: '',
            up_to_date: '2014-01-01'
          },
          {
            code_uai: '0754528P',
            code_uai_agence_comptable: '0750680G',
            type_etablissement: 'Collège',
            nom: 'Collège Pilâtre de Rozier',
            adresse: '11 rue Bouvier',
            code_postal: '75011',
            commune: 'Paris',
            departement: '75 - Paris',
            region: 'Île-de-France',
            academie: 'Paris',
            telephone: '01 43 56 74 51',
            ca: 'Jusqu’à 500 000 €',
            memo: '',
            up_to_date: '2014-01-01'
          }
        ]
      })
    } else if (this.props.location.pathname === '/agences') {
      // fetch agencies corresponding to search criteria
      this.setState({
        schools: [
          {
            code_uai: '0750680G',
            code_uai_agence_comptable: '0750680G',
            type_etablissement: 'Lycée',
            nom: 'Lycée Arago',
            adresse: '4 Place de la Nation',
            code_postal: '75012',
            commune: 'Paris',
            departement: '75 - Paris',
            region: 'Île-de-France',
            academie: 'Paris',
            telephone: '01 43 07 37 40',
            ca: 'Jusqu’à un million €',
            memo: 'Rénovation en cours',
            up_to_date: '2014-01-01'
          }
        ]
      })
    } else {
      return <div>404 not found</div>
    }
  }

  render () {
    const { schools } = this.state
    let title = ''
    let text = ''
    let isAgencySearch = false
    if (this.props.location.pathname === '/etablissements/0750680G') {
      title = 'Etablissement :'
      text = 'Cliquez sur le bouton "UAI agence" pour obtenir le détail de l’agence de cet établissement<br>Vous pouvez visualiser les informations de l’établissement en cliquant sur son nom'
    } else if (this.props.location.pathname === '/etablissements') {
      title = 'Établissements correspondant à vos critères de recherche :'
      text = 'Cliquez sur le bouton "UAI agence" pour obtenir le détail de l’agence en question<br>Vous pouvez visualiser les informations d’un établissement en cliquant sur son nom'
    } else if (this.props.location.pathname === '/agences') {
      isAgencySearch = true
      title = 'Agences correspondant à vos critères de recherche :'
      text = 'Cliquez sur le bouton "UAI agence" pour obtenir le détail de l’agence en question<br>Vous pouvez visualiser les informations de l’établissement agence en cliquant sur son nom'
    } else {
      return <div>404 not found</div>
    }

    return (
      <PageComponent>
        <TopSection
          title={title}
          text={text}
          smallText
        />
        <ResultsTable
          schools={schools}
          isAgencySearch={isAgencySearch}
        />
      </PageComponent>
    )
  }
}
