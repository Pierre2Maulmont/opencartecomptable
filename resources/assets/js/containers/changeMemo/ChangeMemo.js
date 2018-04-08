import React, { Component } from 'react'

import PageComponent from '../../components/PageComponent'
import TopSection from '../../components/TopSection'
import FormSection from '../../components/FormSection'
import ChangeMemoForm from './ChangeMemoForm'

export default class ChangeMemo extends Component {
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
      nom: 'Arago',
      memo: 'Rénovation en cours',
      type_etablissement: 'Lycée'
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
          text='Ajoutez des informations complémentaires'
          scrolledPast={this.state.scrolledPast}
        />

        <FormSection
          form={'change-memo' + (isFormSent ? ' form-section-box_change-memo_reduced' : '')}
          >

          <div className={'change-memo-form' + (isFormSent ? ' change-memo-form-hide' : '')}>
            <ChangeMemoForm
              school={school}
              _handleWaypoint={this._handleWaypoint}
              handleSubmission={this.handleSubmission}
            />
          </div>

          <div className={'change-memo-form-sent' + (isFormSent ? ' change-memo-form-sent-show' : '')}>
            Modification effectuée! Merci pour votre contribution
          </div>

        </FormSection>
      </PageComponent>
    )
  }
}
