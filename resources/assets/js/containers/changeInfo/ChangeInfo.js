import React, { Component } from 'react'
import axios from 'axios'

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
    let url = this.props.location.pathname.substring(0, 24)
    let requestUrl = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api' : '/public/api') + url
    axios.get(requestUrl)
      .then(school => {
        this.setState({ school: school.data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  _handleWaypoint (scrolledPast) {
    this.setState({ scrolledPast: scrolledPast })
  }

  handleSubmission (school) {
    let codeUai = this.state.school[0]['code_uai']
    let requestUrl2 = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/etablissements/' : '/public/api/etablissements/') + codeUai
    axios.put(requestUrl2, school)
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
    let { isFormSent, school } = this.state
    let nom = school && school[0]['nom']
    let codeUai = school && school[0]['code_uai']
    return (
      <PageComponent>
        <TopSection
          title={nom + ' - ' + codeUai}
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
