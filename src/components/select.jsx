import React, { Component } from 'react'

class Select extends Component {
  state = {
    isOpen: false,
    valueOfSelect: this.props.multiple ? [] : '',
    valueOfSearch: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.valueOfSelect !== this.state.valueOfSelect) {
      this.props.getValue(this.state.valueOfSelect)
    }
  }

  handleChange = (field, value) => {
    this.setState({ [field]: value })
  }

  handleToggle = (field) => {
    this.setState(prevState => ({ [field]: !prevState[field] }))
  }

  handleMultipleSelect = value => {
    const valueOfSelect = JSON.parse(JSON.stringify(this.state.valueOfSelect))
    const indexOfValue = valueOfSelect.indexOf(value)

    if (~indexOfValue) {
      valueOfSelect.splice(indexOfValue, 1)
    } else {
      valueOfSelect.push(value)
    }

    this.setState({ valueOfSelect })
  }

  render() {
    return (
      <div>
        <div className='selectPlaceholder' onClick={() => this.handleToggle('isOpen')}>
          {Array.isArray(this.state.valueOfSelect) ? this.state.valueOfSelect.join(',') : this.state.valueOfSelect}
          <span>&#x25bc;</span>
        </div>
        {
          this.state.isOpen
            ? (
              <ul className='dropDown'>
                {
                  this.props.disabledSearch
                    ? null
                    : (
                        <li className='dropDown__item'>
                          <input value={this.state.valueOfSearch} onChange={e => this.handleChange('valueOfSearch', e.target.value)} />
                        </li>
                      )
                }
                {
                  this.props.options.length > 0 &&
                  this.props.options
                    .filter(option => new RegExp(this.state.valueOfSearch, 'gi').test(option))
                    .map(option => {
                      return (
                        <li className='dropDown__item' onClick={() => this.props.multiple ? this.handleMultipleSelect(option) : this.handleChange('valueOfSelect', option)}>
                          {option}
                          {
                            this.props.multiple && ~this.state.valueOfSelect.indexOf(option)
                              ? (
                                  <span>&#x2714;</span>
                                )
                              : null
                          }
                        </li>
                      )
                    })
                }
              </ul>
              )
            : null
        }
      </div>
    )
  }
}

export default Select
