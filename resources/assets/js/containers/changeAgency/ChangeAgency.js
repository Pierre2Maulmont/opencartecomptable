import React, { Component } from 'react'

import PageComponent from '../../components/PageComponent'
import TopSection from '../../components/TopSection'
import FormSection from '../../components/FormSection'
import ChangeAgencyForm from './ChangeAgencyForm'

export default class ChangeAgency extends Component {
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
      code_uai_agence_comptable: '0750680G',
      type_etablissement: 'Lycée',
      nom: 'Arago'
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
          text={'Changez cet établissement d’agence (agence actuelle : ' + school.code_uai_agence_comptable + ')'}
          scrolledPast={this.state.scrolledPast}
        />

        <FormSection
          form={'change-agency' + (isFormSent ? ' form-section-box_change-agency_reduced' : '')}
          >

          <div className={'change-agency-form' + (isFormSent ? ' change-agency-form-hide' : '')}>
            <ChangeAgencyForm
              school={school}
              _handleWaypoint={this._handleWaypoint}
              handleSubmission={this.handleSubmission}
            />
          </div>

          <div className={'change-agency-form-sent' + (isFormSent ? ' change-agency-form-sent-show' : '')}>
            Changement d’agence effectué! Merci pour votre contribution
          </div>

        </FormSection>
      </PageComponent>
    )
  }
}
