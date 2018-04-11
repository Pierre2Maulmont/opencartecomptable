import React, { Component } from 'react'
import axios from 'axios'

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
    // fetch corresponding school
    let url = this.props.location.pathname.substring(0, 24)
    const requestUrl = 'http://localhost:8888/public/api' + url
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

  handleSubmission (memo) {
    let codeUai = this.state.school[0]['code_uai']
    axios.put('http://localhost:8888/public/api/etablissements/' + codeUai, memo)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            isFormSent: true
          })
        } else {
          console.log(response);
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
