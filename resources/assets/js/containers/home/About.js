import React, { Component } from 'react'

import AboutParagraph from './AboutParagraph'

// import map from '../../img/map.jpg'
// import mapWithMan from '../../img/map_with_man.jpeg'

export default class About extends Component {
  componentDidMount () {
    this.timer = setInterval(function () {
      // let degrees = (window.pageYOffset / 5)
      let degrees = (window.pageYOffset / 4)
      document.getElementById('img1').style.transform = 'translate(0, ' + degrees + 'px)'
      document.getElementById('img2').style.transform = 'translate(0, ' + degrees + 'px)'
    }, 10)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div className='about-box'>
        <img id='img1' alt='map' src={'map'} />
        <img id='img2' alt='map' src={'mapWithMan'} />

        <div className='container'>
          <div id='about-columns' className='row about-colums'>

            <div className='col-sm-6 about-column about-left-column'>
              <AboutParagraph
                title='Une information claire et rapidement accessible…'
                para1='Le site <span className="highlight">Open Carte Comptable</span> offre la possibilité de rechercher des agences comptables et établissements (consulter la composition des agences et les informations des établissements). Vous pouvez voir les statistiques par académie en cliquant <a href="/#/statistiques">ici</a>.'
                para2='En présentant une cartographie nationale des regroupements comptables, cet outil est particulièrement utile à l&rsquo;agent qui va muter et souhaite <span className="highlight">connaître le détail des agences des établissements qui l&rsquo;intéressent</span>.'
              />
              <AboutParagraph
                title='Réenchanter l&rsquo;administration des établissements scolaires'
                para1='Ce site a été réalisé par la startup d&rsquo;État <a href="https://openacademie.beta.gouv.fr/">Open Académie</a>. Notre mission est de <span className="highlight">faciliter le quotidien des agents administrateurs des établissements scolaires</span>, dont nous faisons nous-mêmes partie. Nous croyons pour cela en la philosophie de la donnée et du logiciel libres.'
                para2='Source des données concernant les établissements : <a href="http://www.data.gouv.fr/fr/">data.gouv.fr</a>'
              />
            </div>

            <div className='col-sm-6 about-column about-right-column'>
              <AboutParagraph
                title='…mise à jour par la communauté '
                para1='Votre établissement a changé d&rsquo;agence ? Une information n&rsquo;est plus à jour ? Vous pouvez <span className="highlight">modifier simplement les données d&rsquo;Open Carte Comptable</span>, tout comme vous pouvez <a href="/#/ajouter-etablissement">ajouter un établissement</a>.'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
