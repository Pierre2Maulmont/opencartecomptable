import React, { Component } from 'react'
import axios from 'axios'

import PageComponent from '../../components/PageComponent'
import TopSection from '../../components/TopSection'
import FormSection from '../../components/FormSection'
import AddSchoolForm from './AddSchoolForm'

export default class AddSchool extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      scrolledPast: false,
      isFormSent: false,
      failure: false
    })
    this._handleWaypoint = this._handleWaypoint.bind(this)
    this.handleSubmission = this.handleSubmission.bind(this)
  }

  _handleWaypoint (scrolledPast) {
    this.setState({ scrolledPast: scrolledPast })
  }

  handleSubmission (school) {
    let requestUrl = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/etablissements' : '/public/api/etablissements')
    axios.post(requestUrl, school)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            isFormSent: true
          })
          console.log(response)
        } else {
          this.setState({
            isFormSent: true,
            failure: true
          })
          console.log(response)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    let { isFormSent, failure } = this.state
    return (
      <PageComponent>
        <TopSection
          title='Ajouter un établissement'
          text='Renseignez les champs ci-dessous :'
          scrolledPast={this.state.scrolledPast}
        />

        <FormSection
          form={'add-school' + (isFormSent ? ' form-section-box_add-school_reduced' : '')}
          >

          <div className={'add-school-form' + (isFormSent ? ' add-school-form-hide' : '')}>
            <AddSchoolForm
              _handleWaypoint={this._handleWaypoint}
              handleSubmission={this.handleSubmission}
            />
            <p className='required-fields'>* Informations requises</p>
          </div>

          <div className={'add-school-form-sent' + (isFormSent ? ' add-school-form-sent-show' : '')}>
            Etablissement ajouté à la base! Merci pour votre contribution
            {
              failure && 'bug'
            }
          </div>

        </FormSection>
      </PageComponent>
    )
  }
}
