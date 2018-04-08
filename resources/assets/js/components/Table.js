import React, { Component } from 'react'

export default class Table extends Component {
  render () {
    let { columnNames, children } = this.props
    return (
      <table className='my-table'>
        <thead>
          <tr>
            {
              columnNames.map((item, index) => {
                return (
                  <th key={index}>{item}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    )
  }
}
