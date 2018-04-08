import React, { Component } from 'react'

// import sextant from '../../img/sextant.png'

export default class TopContent extends Component {
  componentDidMount () {
    // this.timer = setInterval(function () {
    //   let degrees = ((window.pageYOffset) / 10) + 30
    //   document.getElementById('sextant').style.transform = 'rotate(' + degrees + 'deg)'
    // }, 10)
  }

  componentWillUnmount () {
    // clearInterval(this.timer)
  }

  render () {
    let { scrolledPast } = this.props
    return (
      <div className='top-content-box'>
        <div className='container'>
          <div className='row'>
            <div className='top-content-title'>Trouvez l&rsquo;information que vous cherchez</div>
            <div className={'col-sm-6 top-content-text-box' + (scrolledPast ? ' top-content-text-box-expand' : '')}>
              <div className='top-content-text'>
                Consultez - et modifiez - le <span className='highlight'>registre national des agences comptables</span> des EPLE de France
              </div>
            </div>
          </div>
        </div>
        <div className='sextant-box'>
          <img id='sextant' className='sextant' src={'sextant'} alt='sextant' />
        </div>
      </div>
    )
  }
}
