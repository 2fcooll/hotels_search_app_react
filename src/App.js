import React, { Component } from 'react'
import './App.css'
import Button from './components/button'
import Select from './components/select'
import Table from './components/table'

class App extends Component {
  state = {
    hotels: [],
    hotelCountry: '',
    hotelType: '',
    hotelStarsNumber: [],
    hotelRewiewsFrom: '',
    hotelPriceTo: '',
    hotelsFiltered: []
  }

  componentDidMount() {
    fetch('./hotels.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({ hotels: res.hotels, hotelsFiltered: res.hotels })
    })
  }

  handleChange = (field, value) => {
    this.setState({ [field]: value })
  }

  handleCheckboxToggle = value => {
    const hotelStarsNumber = JSON.parse(JSON.stringify(this.state.hotelStarsNumber))
    const indexOfValue = hotelStarsNumber.indexOf(value)

    if (~indexOfValue) {
      hotelStarsNumber.splice(indexOfValue, 1)
    } else {
      hotelStarsNumber.push(value)
    }

    this.setState({ hotelStarsNumber })
  }

  handleFilterHotels = () => {
    let hotels = JSON.parse(JSON.stringify(this.state.hotels))

    if (this.state.hotelCountry) {
      hotels = hotels.filter(e => e.country === this.state.hotelCountry)
    }

    if (this.state.hotelType) {
      hotels = hotels.filter(e => ~this.state.hotelType.indexOf(e.type))
    }

    if (this.state.hotelStarsNumber.length > 0) {
      hotels = hotels.filter(e => ~this.state.hotelStarsNumber.indexOf(e.stars))
    }

    if (this.state.hotelRewiewsFrom) {
      hotels = hotels.filter(e => e.reviews_amount >= this.state.hotelRewiewsFrom)
    }

    if (this.state.hotelPriceTo) {
      hotels = hotels.filter(e => e.min_price <= this.state.hotelPriceTo)
    }

    this.setState({ hotelsFiltered: hotels })
  }

  handleClearFilters = () => {
    this.setState({
      hotelCountry: '',
      hotelType: '',
      hotelStarsNumber: [],
      hotelRewiewsFrom: '',
      hotelPriceTo: '',
      hotelsFiltered: this.state.hotels
    })
  }

  render() {
    return (
      <div className='flexContainer'>
        <div>
        <Button handler={() => this.handleClearFilters()} title={'Очистить фильтры'} />
        <div>
          <label className='label'>Страна</label>
          <Select
            getValue={value => this.handleChange('hotelCountry', value)}
            options={['Греция', 'Вена', 'Прага']}
          />
        </div>
        <div>
          <label className='label'>Тип</label>
          <Select
            getValue={value => this.handleChange('hotelType', value)}
            options={['Отель', 'Апартаменты']}
            disabledSearch
            multiple
          />
        </div>
        <div>
          <label className='label'>Звёзды</label>
          <div>
            <label className='checkboxLabel'>
              <input
                type='checkbox'
                onChange={() => this.handleCheckboxToggle(1)}
              />
              1 звезда
            </label>
          </div>
          <div>
            <label className='checkboxLabel'>
              <input
                type='checkbox'
                onChange={() => this.handleCheckboxToggle(2)}
               />
               2 звезда
            </label>
          </div>
          <div>
            <label className='checkboxLabel'>
              <input
                type='checkbox'
                onChange={() => this.handleCheckboxToggle(3)}
               />
               3 звезда
            </label>
          </div>
          <div>
            <label className='checkboxLabel'>
              <input
                type='checkbox'
                onChange={() => this.handleCheckboxToggle(4)}
               />
               4 звезда
            </label>
          </div>
          <div>
            <label className='checkboxLabel'>
              <input
                type='checkbox'
                onChange={() => this.handleCheckboxToggle(5)}
               />
               5 звезда
            </label>
          </div>
        </div>
        <div>
          <label className='label'>Количество отзывов от</label>
          <input
            type='text'
            className='inputTypeText'
            value={this.state.hotelRewiewsFrom}
            onChange={e => this.handleChange('hotelRewiewsFrom', e.target.value)}
          />
        </div>
        <div>
          <label className='label'>Цена до</label>
          <input
            className='inputTypeRange'
            type='range'
            min='0'
            max='100500'
            value={this.state.hotelPriceTo}
            onChange={e => this.handleChange('hotelPriceTo', e.target.value)}
          />
          <label className='label'>{this.state.hotelPriceTo}</label>
        </div>
        <Button handler={() => this.handleFilterHotels()} title={'Применить фильтры'} />
        </div>
        <div>
          <Table dataSet={this.state.hotelsFiltered} />
        </div>
      </div>
    )
  }
}

export default App
