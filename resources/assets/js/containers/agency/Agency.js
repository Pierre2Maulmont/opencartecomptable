import React, { Component } from 'react'

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
  }

  render () {
    let { schools } = this.state
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
