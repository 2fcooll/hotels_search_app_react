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
    hotelStarsNumber: '',
    hotelRewiewsFrom: '',
    hotelPriceTo: '',
    hotelOneStar: false,
    hotelTwoStar: false,
    hotelThreeStar: false,
    hotelFourStar: false,
    hotelFiveStar: false
  }

  componentDidMount() {
    fetch('./hotels.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({ hotels: res.hotels })
    })
  }

  handleChange = (field, value) => {
    this.setState({ [field]: value })
  }

  render() {
    return (
      <div>
        <Button title={'Очистить фильтры'} />
        <div>
          <label>Страна</label>
          <Select
            getValue={value => this.handleChange('hotelCountry', value)}
            options={['Амстердам', 'Вена', 'Прага']}
          />
        </div>
        <div>
          <label>Тип</label>
          <Select
            getValue={value => this.handleChange('hotelType', value)}
            options={['Отель', 'Апартаменты']}
            disabledSearch
            multiple
          />
        </div>
        <div>
          <label>Звёзды</label>
          <div>
            <label>
              <input
                type='checkbox'
                checked={this.state.hotelOneStar}
                onChange={e => this.handleChange('hotelOneStar', e.target.checked)}
              />
              1 звезда
            </label>
          </div>
          <div>
            <label>
              <input
                type='checkbox'
                checked={this.state.hotelTwoStar}
                onChange={e => this.handleChange('hotelTwoStar', e.target.checked)}
               />
              2 звезда
            </label>
          </div>
          <div>
            <label>
              <input
                type='checkbox'
                checked={this.state.hotelThreeStar}
                onChange={e => this.handleChange('hotelThreeStar', e.target.checked)}
               />
              3 звезда
            </label>
          </div>
          <div>
            <label>
              <input
                type='checkbox'
                checked={this.state.hotelFourStar}
                onChange={e => this.handleChange('hotelFourStar', e.target.checked)}
               />
              4 звезда
            </label>
          </div>
          <div>
            <label>
              <input
                type='checkbox'
                checked={this.state.hotelFiveStar}
                onChange={e => this.handleChange('hotelFiveStar', e.target.checked)}
               />
              5 звезда
            </label>
          </div>
        </div>
        <div>
          <label>Количество отзывов от</label>
          <input
            type='text'
            value={this.state.hotelRewiewsFrom}
            onChange={e => this.handleChange('hotelRewiewsFrom', e.target.value)}
          />
        </div>
        <div>
          <label>Цена до</label>
          <input
            type='range'
            min='0'
            max='100500'
            value={this.state.hotelPriceTo}
            onChange={e => this.handleChange('hotelPriceTo', e.target.value)}
          />
        </div>
        <Button title={'Применить фильтры'} />
        <div>
          <Table dataSet={this.state.hotels} />
        </div>
      </div>
    )
  }
}

export default App
