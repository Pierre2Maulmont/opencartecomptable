import React, { Component } from 'react'

import PageComponent from '../../components/PageComponent'
import TopSection from '../../components/TopSection'
import FormSection from '../../components/FormSection'
import ChangeInfoForm from './ChangeInfoForm'

export default class ChangeInfo extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      scrolledPast: false,
      isFormSent: false,
      school: ''
    })
    this._handleWaypoint = this._handleWaypoint.bind(this)
    this.handleSubmission = this.handleSubmission.bind(this)
  }

  componentDidMount () {
    const school = {
      code_uai: '0750680G',
      type_etablissement: 'Lycée',
      nom: 'Arago',
      adresse: '4 Place de la Nation',
      code_postal: '75012',
      commune: 'Paris',
      departement: '75 - Paris',
      region: 'Île-de-France',
      academie: 'Paris',
      telephone: '01 43 07 37 40',
      ca: 'Jusqu’à un million €'
    }
    this.setState({
      school: school
    })
  }

  _handleWaypoint (scrolledPast) {
    this.setState({ scrolledPast: scrolledPast })
  }

  handleSubmission () {
    this.setState({
      isFormSent: true
    })
  }

  render () {
    let { isFormSent, school } = this.state
    return (
      <PageComponent>
        <TopSection
          title={school.type_etablissement + ' ' + school.nom + ' - ' + school.code_uai}
          text='Modifiez les informations nécessaires :'
          scrolledPast={this.state.scrolledPast}
        />

        <FormSection
          form={'change-info' + (isFormSent ? ' form-section-box_change-info_reduced' : '')}
          >

          <div className={'change-info-form' + (isFormSent ? ' change-info-form-hide' : '')}>
            <ChangeInfoForm
              school={school}
              _handleWaypoint={this._handleWaypoint}
              handleSubmission={this.handleSubmission}
            />
          </div>

          <div className={'change-info-form-sent' + (isFormSent ? ' change-info-form-sent-show' : '')}>
            Modification effectuée! Merci pour votre contribution
          </div>

        </FormSection>
      </PageComponent>
    )
  }
}
