import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import ResultsSection from './ResultsSection'
import Table from './Table'
import InfoModal from './InfoModal'
import DeleteSchool from './DeleteSchool'

export default class ResultsTable extends Component {
  render () {
    const {
      schools,
      isAgencySearch,
      isAgencyView,
      agencyId,
      fetchSchools,
      isAdminLogged
    } = this.props

    let COLUMNNAMES = ['Code UAI', 'UAI agence', 'Nom', 'Commune', 'Département', 'Région', 'Académie', '']

    if (isAgencySearch) {
      COLUMNNAMES.splice(0, 1)
    }
    if (isAgencyView) {
      COLUMNNAMES.splice(1, 1)
      COLUMNNAMES.splice(3, 4)
      COLUMNNAMES.push('Recettes annuelles', 'Infos à jour le :', '')
    }
    if (isAdminLogged) {
      COLUMNNAMES.push('')
    }

    return (
      <div>
        <ResultsSection>
          <Table columnNames={COLUMNNAMES}>
            {
              schools.map(item => {
                return (
                  <tr key={item.code_uai}>

                    {
                      !isAgencySearch && <td>
                        {
                          item.code_uai === agencyId ? <span className='agency'>{item.code_uai}</span> : item.code_uai
                        }
                      </td>
                    }

                    {
                      !isAgencyView && <td>
                        <NavLink
                          className='my-button my-small-button'
                          to={'/agences/' + item.code_uai_agence_comptable}
                        >
                          {item.code_uai_agence_comptable}
                        </NavLink>
                      </td>
                    }

                    <td>
                      <span className='school-name'>
                        <InfoModal
                          modalText={item.nom}
                          school={item}
                          fetchSchools={fetchSchools}
                        />
                      </span>
                    </td>

                    <td>{item.commune}</td>

                    {
                      !isAgencyView && <td>{item.departement}</td>
                    }

                    {
                      !isAgencyView && <td>{item.region}</td>
                    }

                    {
                      !isAgencyView && <td>{item.academie}</td>
                    }

                    {
                      isAgencyView && <td>{item.ca ? item.ca : '-'}</td>
                    }

                    {
                      isAgencyView && <td>{item.up_to_date}</td>
                    }

                    <td>
                      <NavLink
                        className='my-button my-small-button'
                        to={'/etablissements/' + item.code_uai + '/changer-agence'}
                      >
                      Changer&nbsp;d’agence
                      </NavLink>
                    </td>

                    {
                      isAdminLogged && <td>
                        <DeleteSchool
                          codeUai={item.code_uai}
                          fetchSchools={fetchSchools}
                        />
                      </td>
                    }

                  </tr>
                )
              })
            }
          </Table>
        </ResultsSection>
      </div>
    )
  }
}
