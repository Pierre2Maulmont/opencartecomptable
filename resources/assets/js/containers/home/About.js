import React, { Component } from 'react'

import AboutParagraph from './AboutParagraph'

export default class About extends Component {
  componentDidMount () {
    this.timer = setInterval(function () {
      let degrees = (window.pageYOffset / 4)
      document.getElementById('img1').style.transform = 'translate(0, ' + degrees + 'px)'
      document.getElementById('img2').style.transform = 'translate(0, ' + degrees + 'px)'
      document.getElementById('img3').style.transform = 'translate(0, ' + degrees + 'px)'
    }, 10)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div className='about-box'>
        <div className='img1'>
          <img id='img1' alt='map' src='https://image.ibb.co/h4OZbJ/map.jpg' />
        </div>

        <div className='img2'>
          <img id='img2' alt='map' src='https://image.ibb.co/et7hVd/map_with_man.jpg' />
        </div>

        <div className='img3'>
          <img id='img3' alt='map' src='https://image.ibb.co/kzux0d/map_with_compass.jpg' />
        </div>

        <div className='container about-container'>
          <div id='about-columns' className='row'>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 about-column about-left-column'>
              <AboutParagraph
                title='Une information claire et rapidement accessible…'
                para1='Le site Open Carte Comptable offre la possibilité de <span className="highlight">vérifier la composition des agences comptables</span> et les informations des établissements qui les composent. Vous pouvez également <span className="highlight">consulter les statistiques par académie</span> en cliquant <a href="#/statistiques">ici</a>.'
                para2='Cet outil est particulièrement utile à l&rsquo;agent qui veut muter et souhaite <span className="highlight">connaître le détail d’une agence qui l&rsquo;intéresse</span>. Open Carte Comptable permet aussi de fournir une <span className="highlight">photographie académique et nationale</span> de la mise en oeuvre de la politique de restructuration des agences comptables.'
              />
              <AboutParagraph
                title='Open Carte comptable a été réalisé grâce au soutien de :'
                para1='&bull; l’incubateur des services publiques numériques <a href="">Beta.gouv</a><br>&bull; l’association <a href="">Espac’EPLE</a>'
                para2='Source des données concernant les établissements : <a href="http://www.data.gouv.fr/fr/">data.gouv.fr</a>'
              />
            </div>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 about-column about-right-column'>
              <AboutParagraph
                title='…mise à jour par la communauté '
                para1='Votre établissement a changé d&rsquo;agence ? Une information n&rsquo;est plus à jour ? Vous pouvez <span className="highlight">modifier simplement les données d&rsquo;Open Carte Comptable</span>, tout comme vous pouvez <a href="#/ajouter-etablissement">ajouter un établissement</a>.'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
