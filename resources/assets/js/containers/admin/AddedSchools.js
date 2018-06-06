import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'

export default class AddedSchools extends Component {
  constructor (props) {
    super(props)
    this.state = {
      addedSchools: null
    }
  }

  componentDidMount () {
    let requestUrl = (window.env === 'production' ? 'https://opencartecomptable.herokuapp.com/api/admin/addedSchools' : '/public/api/admin/addedSchools')
    axios.get(requestUrl)
    .then(response => {
      this.setState({
        addedSchools: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render () {
    let { addedSchools } = this.state
    if (addedSchools) {
      return (
        <div>
          <ReactTable
            sortable
            filterable
            data={
              addedSchools.map(school => {
                return ({
                  uaiCode: school.code_uai,
                  agencyUai: school.code_uai_agence_comptable,
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
                  addedDate: school.date_ajout,
                  ip: school.ip_ajout
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
                Header: 'Code UAI agence',
                accessor: 'agencyUai',
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
                width: 600
              },
              {
                Header: 'Date ajout',
                accessor: 'addedDate',
                width: 240
              },
              {
                Header: 'IP ajout',
                accessor: 'ip',
                width: 165
              }
            ]}
          />
        </div>
      )
    }
    return null
  }
}
