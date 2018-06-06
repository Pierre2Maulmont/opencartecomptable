import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'

export default class Agencies extends Component {
  constructor (props) {
    super(props)
    this.state = {
      agencyChanges: null
    }
  }

  componentDidMount () {
    let requestUrl = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/admin/agencies' : '/public/api/admin/agencies')
    axios.get(requestUrl)
    .then(response => {
      this.setState({
        agencyChanges: response.data
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
        <div>
          <ReactTable
            sortable
            filterable
            data={
              agencyChanges.map(school => {
                return ({
                  uaiCode: school.code_uai,
                  name: school.nom,
                  academy: school.academie,
                  ip: school.ip,
                  formerUai: school.ancien_code_agence,
                  newUai: school.nouveau_code_agence,
                  date: school.date
                })
              })
            }
            columns={[
              {
                Header: 'Code UAI',
                accessor: 'uaiCode',
                width: 125
              },
              {
                Header: 'Nom',
                accessor: 'name',
                width: 240,
                filterMethod: (filter, row) => {
                  return row[filter.id].indexOf(filter.value) > -1 || row[filter.id].toLowerCase().indexOf(filter.value) > -1
                }
              },
              {
                Header: 'Académie',
                accessor: 'academy',
                width: 165,
                filterMethod: (filter, row) => {
                  return row[filter.id].indexOf(filter.value) > -1 || row[filter.id].toLowerCase().indexOf(filter.value) > -1
                }
              },
              {
                Header: 'Ancienne agence',
                accessor: 'formerUai',
                width: 125
              },
              {
                Header: 'Nouvelle agence',
                accessor: 'newUai',
                width: 125
              },
              {
                Header: 'Date',
                accessor: 'date',
                width: 240
              },
              {
                Header: 'Adresse IP',
                accessor: 'ip',
                width: 125
              }
            ]}
          />
        </div>
      )
    }
    return null
  }
}
