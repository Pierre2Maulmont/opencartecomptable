import React, { Component } from 'react'
import axios from 'axios'

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
      school: '',
      isActiveAgency: false
    })
    this._handleWaypoint = this._handleWaypoint.bind(this)
    this.handleSubmission = this.handleSubmission.bind(this)
  }

  componentDidMount () {
    // fetch corresponding school
    let url = this.props.location.pathname.substring(0, 24)
    const requestUrl = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api' : '/public/api') + url
    axios.get(requestUrl)
      .then(school => {
        if (school.data[0]['code_uai'] === school.data[0]['code_uai_agence_comptable']) {
          let requestUrl2 = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/agences/' : '/public/api/agences/') + school.data[0]['code_uai']
          axios.get(requestUrl2)
          .then(schools => {
            if (schools.data.length > 1) {
              this.setState({
                school: school.data,
                isActiveAgency: true
              })
            }
          })
        }
        this.setState({
          school: school.data
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  _handleWaypoint (scrolledPast) {
    this.setState({ scrolledPast: scrolledPast })
  }

  handleSubmission (agency) {
    let codeUai = this.state.school[0]['code_uai']
    let requestUrl3 = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/etablissements/' : '/public/api/etablissements/') + codeUai
    axios.put(requestUrl3, agency)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            isFormSent: true
          })
        } else {
          this.setState({
            isFormSent: true,
            failure: true
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    let { isFormSent, failure, school, isActiveAgency } = this.state
    let nom = school && school[0]['nom']
    let codeUai = school && school[0]['code_uai']
    let codeUaiAgence = school && school[0]['code_uai_agence_comptable']
    console.log(isActiveAgency)
    return (
      <PageComponent>
        <TopSection
          title={nom + ' - ' + codeUai}
          text={`Changez cet établissement d’agence (agence actuelle : <a href="/public/#/agences/${codeUaiAgence}">` + codeUaiAgence + '</a>)'}
          scrolledPast={this.state.scrolledPast}
        />

        <FormSection
          form={'change-agency' + (isFormSent ? ' form-section-box_change-agency_reduced' : '')}
          >

          {
            !isActiveAgency
            ? <div className={'change-agency-form' + (isFormSent ? ' change-agency-form-hide' : '')}>
              <ChangeAgencyForm
                school={school}
                _handleWaypoint={this._handleWaypoint}
                handleSubmission={this.handleSubmission}
              />
            </div>
            : <div className='unable-to-change-agency'>
              Cet établissement est une agence comptable comprenant
              d’autre(s) établissement(s), vous ne pouvez donc pas l’affecter
              à une autre agence avant d’avoir réaffecté le(s) établissement(s)
              qu’elle contient à leurs nouvelles agences respectives
            </div>
          }

          <div className={'change-agency-form-sent' + (isFormSent ? ' change-agency-form-sent-show' : '')}>
            { !failure && 'Changement d’agence effectué! Merci pour votre contribution'}
            { failure && 'Nous sommes désolés, il semble qu’il y ait eu un problème...' }
          </div>

        </FormSection>
      </PageComponent>
    )
  }
}
