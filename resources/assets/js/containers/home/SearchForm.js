import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

export default class SearchForm extends Component {
  handleClick (searchType) {
    this.props.handleClick(searchType)
  }

  render () {
    let { type, text, currentSearchType, side } = this.props
    let url = (type === 'agencies' ? '/agences' : '/etablissements')
    return (
      <div className={'search-form-' + type + (currentSearchType === type ? ' search-form-' + type + '-expand' : '') + ((currentSearchType !== '' && type === 'agencies') ? ' search-form-agencies-expanded' : '') + ((currentSearchType === 'schools' && type === 'agencies') ? ' search-form-agencies-reduced' : '')}>

        <div className={'search-form-' + type + '-text'}>
          <div className='my-button my-button_blue-bg' onClick={() => this.handleClick(type)}>{text}</div>
        </div>

        <div className={'search-form-content' + (currentSearchType === type ? ' search-form-content-show' : '')}>
          <div className={'search-form-content-title search-form-content-title-' + side}>Renseignez un ou plusieurs critères de recherche :</div>
          <div className={'search-form-content-inputs-' + side}>

            <form method='post'>

              <table>
                <tbody>

                  <tr>
                    <td>
                      <input type='text' id='code_uai' name='code_uai' placeholder='Code UAI' />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <select name='type_etablissement' id='type_etablissement'>
                        <option defaultValue=''>Type d’établissement</option>
                        <option value='Collège'>Collège</option>
                        <option value='Lycée'>Lycée</option>
                        <option value='Lycée professionnel'>Lycée professionnel</option>
                        <option value='Etablissement régional d’enseignement adapté'>Etablissement régional d’enseignement adapté</option>
                        <option value='Lycée agricole'>Lycée agricole</option>
                        <option value='Etablissement scolaire public innovant'>Etablissement scolaire public innovant</option>
                        <option value='Centre de formation d’apprentis'>Centre de formation d’apprentis</option>
                        <option value='GRETA'>GRETA</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <input type='text' id='nom' name='nom' placeholder='Nom' />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <input type='text' id='academie' name='academie' placeholder='Académie' />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <input type='text' id='region' name='region' placeholder='Région' />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <input type='text' id='departement' name='departement' placeholder='Département' />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <input type='text' id='commune' name='commune' placeholder='Commune' />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <NavLink
                        className='my-button my-button_blue-bg'
                        to={url}
                      >
                          Rechercher
                        </NavLink>
                    </td>
                  </tr>

                </tbody>
              </table>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
