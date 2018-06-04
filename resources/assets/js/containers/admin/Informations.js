import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'

export default class Informations extends Component {
  constructor (props) {
    super(props)
    this.state = {
      infoChanges: null
    }
  }

  componentDidMount () {
    let requestUrl = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/admin/informations' : '/public/api/admin/informations')
    axios.get(requestUrl)
    .then(response => {
      this.setState({
        infoChanges: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render () {
    let { infoChanges } = this.state
    if (infoChanges) {
      return (
        <div>
          <ReactTable
            sortable
            filterable
            data={
              infoChanges.map(school => {
                return ({
                  uaiCode: school.code_uai,
                  schoolType: school.type_etablissement,
                  name: school.nom,
                  address: school.adresse,
                  postalCode: school.code_postal,
                  city: school.commune,
                  department: school.departement,
                  region: school.region,
                  academy: school.academie,
                  phone: school.telephone,
                  money: school.ca,
                  memo: school.memo,
                  upToDate: school.up_to_date,
                  modificationDate: school.date_modification,
                  ip: school.ip_modification
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
                Header: 'Type établissement',
                accessor: 'schoolType',
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
                Header: 'Adresse',
                accessor: 'address',
                width: 240
              },
              {
                Header: 'Code postal',
                accessor: 'postalCode'
              },
              {
                Header: 'Commune',
                accessor: 'city',
                width: 179
              },
              {
                Header: 'Département',
                accessor: 'department',
                width: 200
              },
              {
                Header: 'Région',
                accessor: 'region',
                width: 200
              },
              {
                Header: 'Académie',
                accessor: 'academy',
                width: 170,
                filterMethod: (filter, row) => {
                  return row[filter.id].indexOf(filter.value) > -1 || row[filter.id].toLowerCase().indexOf(filter.value) > -1
                }
              },
              {
                Header: 'Téléphone',
                accessor: 'phone',
                width: 170
              },
              {
                Header: 'Recettes annuelles',
                accessor: 'money',
                width: 200
              },
              {
                Header: 'Mémo',
                accessor: 'memo',
                width: 400
              },
              {
                Header: 'Infos à jour',
                accessor: 'upToDate',
                width: 165
              },
              {
                Header: 'Date modification',
                accessor: 'modificationDate',
                width: 165
              },
              {
                Header: 'Adresse IP',
                accessor: 'ip',
                width: 145
              }
            ]}
          />
        </div>
      )
    }
    return null
  }
}
