import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

export default class ChangeInfoForm extends Component {
  render () {
    const { _handleWaypoint, handleSubmission, school } = this.props
    return (
      <div>
        <form>
          <input type='text' id='code_uai' name='code_uai' placeholder={school.code_uai} />

          <select name='type_etablissement' id='type_etablissement'>
            <option selected value={school.type_etablissement}>{school.type_etablissement}</option>
            <option value='Collège'>Collège</option>
            <option value='Lycée'>Lycée</option>
            <option value='Lycée professionnel'>Lycée professionnel</option>
            <option value='Etablissement régional d’enseignement adapté'>Etablissement régional d’enseignement adapté</option>
            <option value='Lycée agricole'>Lycée agricole</option>
            <option value='Etablissement scolaire public innovant'>Etablissement scolaire public innovant</option>
            <option value='Centre de formation d’apprentis'>Centre de formation d’apprentis</option>
            <option value='GRETA'>GRETA</option>
          </select>

          <input type='text' name='nom' id='nom' placeholder={school.nom} />

          <input type='text' name='adresse' id='adresse' placeholder={school.adresse} />

          <input type='text' name='code_postal' id='code_postal' placeholder={school.code_postal} />

          <input type='text' name='commune' id='commune' placeholder={school.commune} />

          <Waypoint
            onEnter={() => { _handleWaypoint(true) }}
            onLeave={() => { _handleWaypoint(false) }}
          />

          <input type='text' name='departement' id='departement' placeholder={school.departement} />

          <select name='region' id='region'>
            <option selected value={school.region}>{school.region}</option>
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

          <select name='academie' id='academie'>
            <option selected value={school.academie}>{school.academie}</option>
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

          <input type='text' name='telephone' id='telephone' placeholder={school.telephone} />

          <select name='ca' id='ca'>
            <option selected value={school.ca}>{school.ca}</option>
            <option value='Jusqu’à 500 000 €'>Jusqu’à 500 000 €</option>
            <option value='Jusqu’à un million €'>Jusqu’à un million €</option>
            <option value='Jusqu’à deux millions €'>Jusqu’à deux millions €</option>
            <option value='Plus de deux millions €'>Plus de deux millions €</option>
          </select>

          <div
            className='my-button my-button_blue-bg'
            name='modifier'
            onClick={() => { handleSubmission() }}
          >
            Modifier
          </div>
        </form>
      </div>
    )
  }
}
