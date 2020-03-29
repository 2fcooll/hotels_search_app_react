import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        {
          Array.isArray(this.props.dataSet) &&
          this.props.dataSet.length > 0 && 
          this.props.dataSet.map(element => {
            return (
              <tr>
                <td></td>
              </tr>
            )
          })
        }
      </table>
    )
  }
}

export default Table
