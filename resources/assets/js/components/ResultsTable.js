import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import ResultsSection from './ResultsSection'
import Table from './Table'
import InfoModal from './InfoModal'

export default class ResultsTable extends Component {
  render () {
    const { schools, isAgencySearch, isAgencyView } = this.props
    let COLUMNNAMES = ['Code UAI', 'UAI agence', 'Nom', 'Commune', 'Département', 'Région', 'Académie', '']
    if (isAgencySearch) {
      COLUMNNAMES.splice(0, 1)
    }
    if (isAgencyView) {
      COLUMNNAMES.splice(1, 1)
      COLUMNNAMES.splice(3, 4)
      COLUMNNAMES.push('Recettes annuelles', 'Infos à jour le :', '')
    }

    return (
      <div>
        <ResultsSection>
          <Table
            columnNames={COLUMNNAMES}
          >
            {
              schools.map(item => {
                return (
                  <tr key={item.code_uai}>

                    {
                      !isAgencySearch && <td>{item.code_uai}</td>
                    }

                    {
                      !isAgencyView && <td>
                        <NavLink
                          className='my-button my-small-button my-button_blue-bg'
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
                        className='my-button my-small-button my-button_blue-bg'
                        to={'/etablissements/0750680G/changer-agence'}
                      >
                      Changer&nbsp;d’agence
                      </NavLink>
                    </td>

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
