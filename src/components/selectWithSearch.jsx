import React, { Component } from 'react'

class SelectWithSearch extends Component {
  state = {
    isOpen: false,
    valueOfSelect: '',
    valueOfSearch: ''
  }

  handleChange = (field, value) => {
    this.setState({ [field]: value })
  }

  handleToggle = (field) => {
    this.setState(prevState => ({ [field]: !prevState[field] }))
  }

  render() {
    return (
      <div>
        <div onClick={() => this.handleToggle('isOpen')}>d{this.state.valueOfSelect}</div>
        {
          this.state.isOpen
            ? (
              <ul>
                <li><input value={this.state.valueOfSearch} onChange={e => this.handleChange('valueOfSearch', e.target.value)} /></li>
                {
                  this.props.options.length > 0 &&
                  this.props.options
                    .filter(option => new RegExp(this.state.valueOfSearch, 'gi').test(option))
                    .map(option => <li onClick={() => this.handleChange('valueOfSelect', option)}>{option}</li>)
                }
              </ul>
              )
            : null
        }
      </div>
    )
  }
}

export default SelectWithSearch
