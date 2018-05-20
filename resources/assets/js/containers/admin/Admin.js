import React, { Component } from 'react'
import { withCookies } from 'react-cookie'
import axios from 'axios'

import PageComponent from '../../components/PageComponent'
import TopSection from '../../components/TopSection'
import FormSection from '../../components/FormSection'
import AdminForm from './AdminForm'

class Admin extends Component {
  handleSubmission (adminInput) {
    const { cookies } = this.props
    let requestUrl = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/admin/login' : '/public/api/admin/login')
    axios.post(requestUrl, adminInput)
    .then(response => {
      console.log(response)
      if (response.data.length > 0) {
        cookies.set('admin', 'true', { maxAge: 2700 })
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  logOut () {
    const { cookies } = this.props
    cookies.set('admin', 'false')
  }

  render () {
    const { cookies } = this.props
    let isAdminLogged = cookies.get('admin') === 'true'
    return (
      <PageComponent>
        <TopSection
          title='Espace admin'
          text=''
          scrolledPast={null}
        />

        <FormSection
          form={'admin'}
          >
          {
            !isAdminLogged
            ? <div className='admin-form'>
              <AdminForm handleSubmission={this.handleSubmission.bind(this)} />
            </div>
            : <div>
              <a onClick={() => this.logOut()}>Déconnexion</a>
              <div>
                <a>Voir les modifications d’agences</a>
              </div>
            </div>
          }
        </FormSection>
      </PageComponent>
    )
  }
}

export default withCookies(Admin)
