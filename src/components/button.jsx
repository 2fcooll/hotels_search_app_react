import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <button className='button' onClick={this.props.handler}>{this.props.title}</button>
    )
  }
}

export default Button
