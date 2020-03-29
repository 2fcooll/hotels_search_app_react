import React, { Component } from 'react'
import './App.css'
import Button from './components/button'
import SelectWithSearch from './components/selectWithSearch'

class App extends Component {
  render() {
    return (
      <div>
        <Button title={'Очистить фильтры'} />
        <SelectWithSearch options={['Амстердам', 'Вена', 'Прага']} />
      </div>
    )
  }
}

export default App
