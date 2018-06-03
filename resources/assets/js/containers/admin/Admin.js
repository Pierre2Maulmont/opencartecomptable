import React, { Component } from 'react'
import { withCookies } from 'react-cookie'
import axios from 'axios'

import PageComponent from '../../components/PageComponent'
import TopSection from '../../components/TopSection'
import FormSection from '../../components/FormSection'
import AdminForm from './AdminForm'
import AdminActions from './AdminActions'

class Admin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAdminLogged: false
    }
    this.handleSubmission = this.handleSubmission.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount () {
    const { cookies } = this.props
    let isAdminLogged = cookies.get('admin') === 'true'
    this.setState({
      isAdminLogged
    })
  }

  handleSubmission (adminInput) {
    const { cookies } = this.props
    let requestUrl = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/admin/login' : '/public/api/admin/login')
    axios.post(requestUrl, adminInput)
    .then(response => {
      console.log(response)
      if (response.data.length > 0) {
        cookies.set('admin', 'true', { maxAge: 2700 })
        this.setState({
          isAdminLogged: true
        })
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  logOut () {
    const { cookies } = this.props
    cookies.set('admin', 'false')
    this.setState({
      isAdminLogged: false
    })
  }

  render () {
    let { isAdminLogged } = this.state
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
            isAdminLogged
            ? <div>
              <a onClick={() => this.logOut()} className='admin-logout-btn'>Déconnexion</a>
              <AdminActions />
            </div>
            : <div className='admin-form'>
              <AdminForm handleSubmission={this.handleSubmission} />
            </div>
          }
        </FormSection>
      </PageComponent>
    )
  }
}

export default withCookies(Admin)
