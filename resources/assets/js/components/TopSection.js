import React, { Component } from 'react'

import renderHTML from 'react-render-html'

export default class TopSection extends Component {
  handleClick () {
    window.history.back()
  }

  render () {
    let { title, text, smallText, scrolledPast } = this.props
    return (
      <div className='top-section-box'>
        <div className='container'>
          <div className='row'>

            {
              title && <div className='top-section-title'>
                {title}
              </div>
            }

            {
              text && <div className={'col-sm-8 top-section-text-box' + (scrolledPast ? ' top-section-text-box-expand' : '')}>
                <div className={'top-section-text' + (smallText ? ' top-section-text_small' : '')}>
                  {renderHTML(text)}
                </div>
              </div>
            }

            {
              text && <div className={'col-sm-3' + (!title ? ' top-section-button-box-lower' : '')}>
                <div
                  className='my-button'
                  onClick={() => { this.handleClick() }}
                >
                  Retour
                </div>
              </div>
            }

          </div>
        </div>
      </div>
    )
  }
}
