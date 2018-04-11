import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import SimpleReactValidator from 'simple-react-validator'

const ERROR_MESSAGES = {
  min: 'Le code UAI doit contenir 7 chiffres et une lettre',
  max: 'Le code UAI doit contenir 7 chiffres et une lettre',
  required: 'Ce champ est requis',
  alpha_num: 'Le code UAI doit contenir 7 chiffres et une lettre',
  code_uai: 'Le code UAI doit contenir 7 chiffres et une lettre',
  memo: 'Les informations complémentaires ne doivent pas dépasser 5 caractères',
  nom: 'Le nom ne doit pas dépasser 70 caractères',
  commune: 'La commune ne doit pas dépasser 50 caractères',
  code_postal: 'Le code postal ne doit pas dépasser 6 caractères',
  departement: 'Le département ne doit pas dépasser 50 caractères',
  adresse: 'L’adresse ne doit pas dépasser 70 caractères',
  telephone: 'Le téléphone doit être un numéro valide'
}

export default class Form extends Component {
  constructor (props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleSubmission = this.handleSubmission.bind(this)
    this.validator = new SimpleReactValidator({
      code_uai: {
        message: '',
        rule: function (val) {
          return this._testRegex(val.substring(7), /[A-Za-z]/) && this._testRegex(val.substring(0, 7), /[0-9]+/)
        }
      },
      memo: {
        message: '',
        rule: function (val) {
          return val.length <= 100
        }
      },
      nom: {
        message: '',
        rule: function (val) {
          return val.length <= 70
        }
      },
      commune: {
        message: '',
        rule: function (val) {
          return val.length <= 50
        }
      },
      code_postal: {
        message: '',
        rule: function (val) {
          return val.length <= 6
        }
      },
      departement: {
        message: '',
        rule: function (val) {
          return val.length <= 50
        }
      },
      adresse: {
        message: '',
        rule: function (val) {
          return val.length <= 70
        }
      },
      telephone: {
        message: '',
        rule: function (val) {
          return this._testRegex(val, /(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)/)
        }
      }
    })
  }

  componentDidMount () {
    if (this.props.form === 'changeInfoForm') {
      this.setState({
        info: ''
      })
    }
  }

  handleInputChange (e) {
    let value = e.target.value
    let field = e.target.name
    this.setState({
      [field]: value
    })
  }

  handleKeyPress (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.handleSubmission(this.state)
    }
  }

  handleSubmission (userInput) {
    let { handleSubmission } = this.props
    if (this.validator.allValid()) {
      handleSubmission(userInput)
    } else {
      this.validator.showMessages()
      // rerender to show messages for the first time
      this.forceUpdate()
    }
  }

  renderAddSchoolForm () {
    let { _handleWaypoint } = this.props
    return (
      <form>
        <input
          type='text'
          id='code_uai'
          name='code_uai'
          placeholder='Code UAI*'
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.code_uai : '', 'required|code_uai', false, ERROR_MESSAGES)}

        <input
          type='text'
          name='code_uai_agence_comptable'
          id='code_uai_agence_comptable'
          placeholder='Code UAI agence*'
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.code_uai : '', 'required|code_uai', false, ERROR_MESSAGES)}

        <select name='type_etablissement' id='type_etablissement' onChange={this.handleInputChange}>
          <option value=''>Type d’établissement*</option>
          <option value='Collège'>Collège</option>
          <option value='Lycée'>Lycée</option>
          <option value='Lycée professionnel'>Lycée professionnel</option>
          <option value='Etablissement régional d’enseignement adapté'>Etablissement régional d’enseignement adapté</option>
          <option value='Lycée agricole'>Lycée agricole</option>
          <option value='Etablissement scolaire public innovant'>Etablissement scolaire public innovant</option>
          <option value='Centre de formation d’apprentis'>Centre de formation d’apprentis</option>
          <option value='GRETA'>GRETA</option>
        </select>

        <input
          type='text'
          name='nom'
          id='nom'
          placeholder='Nom*'
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.nom : '', 'required|nom', false, ERROR_MESSAGES)}

        <input
          type='text'
          name='adresse'
          id='adresse'
          placeholder='Adresse*'
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.adresse : '', 'required|adresse', false, ERROR_MESSAGES)}

        <input
          type='text'
          name='code_postal'
          id='code_postal'
          placeholder='Code postal*'
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.code_postal : '', 'required|code_postal', false, ERROR_MESSAGES)}

        <input
          type='text'
          name='commune'
          id='commune'
          placeholder='Commune*'
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.commune : '', 'required|commune', false, ERROR_MESSAGES)}

        <Waypoint
          onEnter={() => { _handleWaypoint(true) }}
          onLeave={() => { _handleWaypoint(false) }}
        />

        <input
          type='text'
          name='departement'
          id='departement'
          placeholder='Département*'
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.departement : '', 'required|departement', false, ERROR_MESSAGES)}

        <select name='region' id='region' onChange={this.handleInputChange}>
          <option value=''>Région*</option>
          <option value='Occitanie'>Occitanie</option>
          <option value='Ile-de-France'>Ile-de-France</option>
          <option value='Nouvelle Aquitaine'>Nouvelle Aquitaine</option>
          <option value='Bretagne'>Bretagne</option>
          <option value='Bourgogne-Franche-Comté'>Bourgogne-Franche-Comté</option>
          <option value='Grand Est'>Grand Est</option>
          <option value='Pays de la Loire'>Pays de la Loire</option>
          <option value='Hauts-de-France'>Hauts-de-France</option>
          <option value='Auvergne-Rhône-Alpes'>Auvergne-Rhône-Alpes</option>
          <option value='Centre-Val de Loire'>Centre-Val de Loire</option>
          <option value='Provence-Alpes-Côte d’Azur'>Provence-Alpes-Côte d’Azur</option>
          <option value='Normandie'>Normandie</option>
          <option value='Guadeloupe'>Guadeloupe</option>
          <option value='Corse'>Corse</option>
          <option value='Martinique'>Martinique</option>
          <option value='La Réunion'>La Réunion</option>
          <option value='Guyane'>Guyane</option>
          <option value='Mayotte'>Mayotte</option>
          <option value='Collectivité d’outre-mer'>Collectivité d’outre-mer</option>
        </select>

        <select name='academie' id='academie' onChange={this.handleInputChange}>
          <option value=''>Académie*</option>
          <option value='Lille'>Lille</option>
          <option value='Amiens'>Amiens</option>
          <option value='Rouen'>Rouen</option>
          <option value='Reims'>Reims</option>
          <option value='Nancy-Metz'>Nancy-Metz</option>
          <option value='Strasbourg'>Strasbourg</option>
          <option value='Besançon'>Besançon</option>
          <option value='Dijon'>Dijon</option>
          <option value='Paris'>Paris</option>
          <option value='Créteil'>Créteil</option>
          <option value='Versailles'>Versailles</option>
          <option value='Orléans-Tour'>Orléans-Tour</option>
          <option value='Caen'>Caen</option>
          <option value='Rennes'>Rennes</option>
          <option value='Nantes'>Nantes</option>
          <option value='Poitiers'>Poitiers</option>
          <option value='Limoges'>Limoges</option>
          <option value='Lyon'>Lyon</option>
          <option value='Clermont-Ferrand'>Clermont-Ferrand</option>
          <option value='Grenoble'>Grenoble</option>
          <option value='Aix-Marseille'>Aix-Marseille</option>
          <option value='Nice'>Nice</option>
          <option value='Montpellier'>Montpellier</option>
          <option value='Toulouse'>Toulouse</option>
          <option value='Bordeaux'>Bordeaux</option>
          <option value='Corse'>Corse</option>
          <option value='Guyane'>Guyane</option>
          <option value='Martinique'>Martinique</option>
          <option value='Guadeloupe'>Guadeloupe</option>
          <option value='La Réunion'>La Réunion</option>
          <option value='Mayotte'>Mayotte</option>
          <option value='Saint-Pierre-et-Miquelon'>Saint-Pierre-et-Miquelon</option>
        </select>

        <input
          type='text'
          name='telephone'
          id='telephone'
          placeholder='Téléphone*'
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.telephone : '', 'required|phone', false, ERROR_MESSAGES)}

        <select name='ca' id='ca' onChange={this.handleInputChange}>
          <option value=''>Total recettes annuelles</option>
          <option value='Jusqu’à 500 000 €'>Jusqu’à 500 000 €</option>
          <option value='Jusqu’à un million €'>Jusqu’à un million €</option>
          <option value='Jusqu’à deux millions €'>Jusqu’à deux millions €</option>
          <option value='Plus de deux millions €'>Plus de deux millions €</option>
        </select>

        <textarea
          name='memo'
          id='memo'
          placeholder='Informations complémentaires'
          onChange={this.handleInputChange}
        />
        {this.validator.message('', this.state ? this.state.memo : '', 'memo', false, ERROR_MESSAGES)}

        <div
          className='my-button my-button_blue-bg'
          name='ajouter'
          onClick={() => { this.handleSubmission(this.state) }}
        >
          Ajouter
        </div>
      </form>
    )
  }

  renderChangeAgencyForm () {
    let { _handleWaypoint } = this.props
    return (
      <form>
        <input
          type='text'
          id='code_uai'
          name='new_agency'
          placeholder='UAI nouvelle agence'
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.new_agency : '', 'required|alpha_num|max:8|min:8|code_uai', false, ERROR_MESSAGES)}

        <Waypoint
          onEnter={() => { _handleWaypoint(true) }}
          onLeave={() => { _handleWaypoint(false) }}
        />

        <div
          className='my-button my-button_blue-bg my-nav-button'
          name='modifier'
          onClick={() => { this.handleSubmission(this.state) }}
        >
          Modifier
        </div>
      </form>
    )
  }

  renderAdminForm () {
    let { handleSubmission } = this.props
    return (
      <form>
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <div
          className='my-button my-button_blue-bg'
          name='ajouter'
          onClick={() => { handleSubmission(this.state) }}
        >
          Ajouter
        </div>
      </form>
    )
  }

  renderChangeInfoForm () {
    const { _handleWaypoint, school } = this.props
    let typeEtablissement = school && this.props.school[0]['type_etablissement']
    let nom = school && this.props.school[0]['nom']
    let adresse = school && this.props.school[0]['adresse']
    let codePostal = school && this.props.school[0]['code_postal']
    let commune = school && this.props.school[0]['commune']
    let departement = school && this.props.school[0]['departement']
    let region = school && this.props.school[0]['region']
    let academie = school && this.props.school[0]['academie']
    let telephone = school && this.props.school[0]['telephone']
    let ca = school && this.props.school[0]['ca']
    return (
      <form>
        <select name='type_etablissement' id='type_etablissement' onChange={this.handleInputChange}>
          <option value={typeEtablissement}>{typeEtablissement}</option>
          <option value='Collège'>Collège</option>
          <option value='Lycée'>Lycée</option>
          <option value='Lycée professionnel'>Lycée professionnel</option>
          <option value='Etablissement régional d’enseignement adapté'>Etablissement régional d’enseignement adapté</option>
          <option value='Lycée agricole'>Lycée agricole</option>
          <option value='Etablissement scolaire public innovant'>Etablissement scolaire public innovant</option>
          <option value='Centre de formation d’apprentis'>Centre de formation d’apprentis</option>
          <option value='GRETA'>GRETA</option>
        </select>

        <input
          type='text'
          name='nom'
          id='nom'
          placeholder={nom}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.nom : '', 'nom', false, ERROR_MESSAGES)}

        <input
          type='text'
          name='adresse'
          id='adresse'
          placeholder={adresse}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.adresse : '', 'adresse', false, ERROR_MESSAGES)}

        <input
          type='text'
          name='code_postal'
          id='code_postal'
          placeholder={codePostal}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.code_postal : '', 'code_postal', false, ERROR_MESSAGES)}

        <input
          type='text'
          name='commune'
          id='commune'
          placeholder={commune}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.commune : '', 'commune', false, ERROR_MESSAGES)}

        <Waypoint
          onEnter={() => { _handleWaypoint(true) }}
          onLeave={() => { _handleWaypoint(false) }}
        />

        <input
          type='text'
          name='departement'
          id='departement'
          placeholder={departement}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.validator.message('', this.state ? this.state.departement : '', 'departement', false, ERROR_MESSAGES)}

        <select name='region' id='region' onChange={this.handleInputChange}>
          <option value={region}>{region}</option>
          <option value='Occitanie'>Occitanie</option>
          <option value='Ile-de-France'>Ile-de-France</option>
          <option value='Nouvelle Aquitaine'>Nouvelle Aquitaine</option>
          <option value='Bretagne'>Bretagne</option>
          <option value='Bourgogne-Franche-Comté'>Bourgogne-Franche-Comté</option>
          <option value='Grand Est'>Grand Est</option>
          <option value='Pays de la Loire'>Pays de la Loire</option>
          <option value='Hauts-de-France'>Hauts-de-France</option>
          <option value='Auvergne-Rhône-Alpes'>Auvergne-Rhône-Alpes</option>
          <option value='Centre-Val de Loire'>Centre-Val de Loire</option>
          <option value='Provence-Alpes-Côte d’Azur'>Provence-Alpes-Côte d’Azur</option>
          <option value='Normandie'>Normandie</option>
          <option value='Guadeloupe'>Guadeloupe</option>
          <option value='Corse'>Corse</option>
          <option value='Martinique'>Martinique</option>
          <option value='La Réunion'>La Réunion</option>
          <option value='Guyane'>Guyane</option>
          <option value='Mayotte'>Mayotte</option>
          <option value='Collectivité d’outre-mer'>Collectivité d’outre-mer</option>
        </select>

        <select name='academie' id='academie' onChange={this.handleInputChange}>
          <option value={academie}>{academie}</option>
          <option value='Lille'>Lille</option>
          <option value='Amiens'>Amiens</option>
          <option value='Rouen'>Rouen</option>
          <option value='Reims'>Reims</option>
          <option value='Nancy-Metz'>Nancy-Metz</option>
          <option value='Strasbourg'>Strasbourg</option>
          <option value='Besançon'>Besançon</option>
          <option value='Dijon'>Dijon</option>
          <option value='Paris'>Paris</option>
          <option value='Créteil'>Créteil</option>
          <option value='Versailles'>Versailles</option>
          <option value='Orléans-Tour'>Orléans-Tour</option>
          <option value='Caen'>Caen</option>
          <option value='Rennes'>Rennes</option>
          <option value='Nantes'>Nantes</option>
          <option value='Poitiers'>Poitiers</option>
          <option value='Limoges'>Limoges</option>
          <option value='Lyon'>Lyon</option>
          <option value='Clermont-Ferrand'>Clermont-Ferrand</option>
          <option value='Grenoble'>Grenoble</option>
          <option value='Aix-Marseille'>Aix-Marseille</option>
          <option value='Nice'>Nice</option>
          <option value='Montpellier'>Montpellier</option>
          <option value='Toulouse'>Toulouse</option>
          <option value='Bordeaux'>Bordeaux</option>
          <option value='Corse'>Corse</option>
          <option value='Guyane'>Guyane</option>
          <option value='Martinique'>Martinique</option>
          <option value='Guadeloupe'>Guadeloupe</option>
          <option value='La Réunion'>La Réunion</option>
          <option value='Mayotte'>Mayotte</option>
          <option value='Saint-Pierre-et-Miquelon'>Saint-Pierre-et-Miquelon</option>
        </select>

        <input
          type='text'
          name='telephone'
          id='telephone'
          placeholder={telephone}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />

        <select name='ca' id='ca' onChange={this.handleInputChange}>
          <option selected value={ca}>{ca}</option>
          <option value='Jusqu’à 500 000 €'>Jusqu’à 500 000 €</option>
          <option value='Jusqu’à un million €'>Jusqu’à un million €</option>
          <option value='Jusqu’à deux millions €'>Jusqu’à deux millions €</option>
          <option value='Plus de deux millions €'>Plus de deux millions €</option>
        </select>

        <input
          type='hidden'
          name='info'
        />

        <div
          className='my-button my-button_blue-bg'
          name='modifier'
          onClick={() => { this.handleSubmission(this.state) }}
        >
          Modifier
        </div>
      </form>
    )
  }

  renderChangeMemoForm () {
    const { _handleWaypoint } = this.props
    let memo = this.props.school && this.props.school[0]['memo']
    return (
      <form>
        <textarea
          name='memo'
          id='memo'
          placeholder={memo}
          onChange={this.handleInputChange}
        />

        {this.validator.message('', this.state ? this.state.memo : '', 'memo', false, ERROR_MESSAGES)}

        <Waypoint
          onEnter={() => { _handleWaypoint(true) }}
          onLeave={() => { _handleWaypoint(false) }}
        />

        <div
          className='my-button my-button_blue-bg my-nav-button'
          name='modifier'
          onClick={() => { this.handleSubmission(this.state) }}
        >
          Modifier
        </div>
      </form>
    )
  }

  render () {
    let { form } = this.props
    if (form === 'addSchoolForm') {
      return this.renderAddSchoolForm()
    } else if (form === 'changeAgencyForm') {
      return this.renderChangeAgencyForm()
    } else if (form === 'adminForm') {
      return this.renderAdminForm()
    } else if (form === 'changeInfoForm') {
      return this.renderChangeInfoForm()
    } else if (form === 'changeMemoForm') {
      return this.renderChangeMemoForm()
    }
    return null
  }
}
