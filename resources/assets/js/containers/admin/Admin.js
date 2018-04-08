import React, { Component } from 'react'
import { withCookies } from 'react-cookie'

import PageComponent from '../../components/PageComponent'
import TopSection from '../../components/TopSection'
import FormSection from '../../components/FormSection'
import AdminForm from './AdminForm'

class Admin extends Component {
  handleSubmission () {
    const { cookies } = this.props
    if (true) {
      cookies.set('admin', 'true', { maxAge: 30 })
    }
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
            ? <div className={'admin-form'}>
              <AdminForm handleSubmission={this.handleSubmission.bind(this)} />
            </div>
            : <p>hola</p>
          }
        </FormSection>
      </PageComponent>
    )
  }
}

export default withCookies(Admin)
