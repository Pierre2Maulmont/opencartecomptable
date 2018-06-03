import React, { Component } from 'react'
import axios from 'axios'

export default class Agencies extends Component {
  constructor (props) {
    super(props)
    this.state = {
      agencyChanges: []
    }
  }

  componentDidMount () {
    let requestUrl = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/admin/agencies' : '/public/api/admin/agencies')
    axios.get(requestUrl)
    .then(agencyChanges => {
      console.log(agencyChanges)
      this.setState({
        agencyChanges
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render () {
    let { agencyChanges } = this.state
    if (agencyChanges) {
      return (
        <div>donc.
        </div>
      )
    }
    return null
  }
}
