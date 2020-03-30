import React, { Component } from 'react'

class Table extends Component {
  state = {
    itemsPerPage: 3,
    currentPage: 1
  }

  getItemsByPageNumber = dataArray => {
    const endIndex = this.state.currentPage * this.state.itemsPerPage;
    const startIndex = endIndex - this.state.itemsPerPage;

    return dataArray.slice(startIndex, endIndex)
  }

  handleChange = (field, value) => {
    this.setState({ [field]: value })
  }

  render() {
    return (
      <div>
        <table>
          {
            Array.isArray(this.props.dataSet) &&
            this.props.dataSet.length > 0 && 
            this.getItemsByPageNumber(this.props.dataSet).map(element => {
              return (
                <tr>
                  <td>{element.name}</td>
                  <td>{element.description}</td>
                  <td><button>Забронировать</button></td>
                </tr>
              )
            })
          }
        </table>
        <div>
          <ul>
            {
              [...Array(Math.ceil(this.props.dataSet.length / this.state.itemsPerPage))].map((e, i) => {
                return (
                  <li onClick={() => this.handleChange('currentPage', i + 1)}>{i + 1}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Table
