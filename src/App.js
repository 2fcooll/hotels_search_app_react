import React, { Component } from 'react'
import './App.css'
import Button from './components/button'
import Select from './components/select'
import Table from './components/table'

class App extends Component {
  render() {
    return (
      <div>
        <Button title={'Очистить фильтры'} />
        <div>
          <label>Страна</label>
          <Select options={['Амстердам', 'Вена', 'Прага']} />
        </div>
        <div>
          <label>Тип</label>
          <Select options={['Отель', 'Апартаменты']} disabledSearch multiple />
        </div>
        <div>
          <label>Звёзды</label>
          <div>
            <label>
              <input type='checkbox' />
              1 звезда
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' />
              2 звезда
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' />
              3 звезда
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' />
              4 звезда
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' />
              5 звезда
            </label>
          </div>
        </div>
        <div>
          <label>Количество отзывов от</label>
          <input type='text' />
        </div>
        <div>
          <label>Цена до</label>
          <input type='range' min='0' max='100500' />
        </div>
        <Button title={'Применить фильтры'} />
        <div>
          <Table dataSet={[]} />
        </div>
      </div>
    )
  }
}

export default App
