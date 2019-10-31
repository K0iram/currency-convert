import React, { Component } from 'react';
import './App.css'

import Select from './Select'
import Total from './Total'
import { getAllRates, getBasedRates } from './API'


class App extends Component {
  state = {
    rates: {},
    fromAmount: '',
    total: '',
    startCurr: 'USD',
    endCurr: 'EUR'
  }

  componentDidMount() {
    getAllRates().then(res => this.setState({rates: res.data.rates}))
  }

  onStartChange = e => {
    this.setState({startCurr: e.target.value})
  }

  onEndChange = e => {
    this.setState({endCurr: e.target.value})
  }

  onAmountChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  calcExchange = (start, end) => {
    const { fromAmount } = this.state
    getBasedRates(start)
      .then(res => {
        const { rates } = res.data
        this.setState({total: rates[end] * fromAmount}) 
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Currency Converter</h1>
  
        <input onChange={this.onAmountChange} type="number" name="fromAmount"/>
        <Select selectValue={this.state.startCurr} onChange={this.onStartChange} rates={this.state.rates}/>
        <span>To</span>
        <Select selectValue={this.state.endCurr} onChange={this.onEndChange} rates={this.state.rates}/>
        <button onClick={this.calcExchange(this.state.startCurr, this.state.endCurr)}>Convert</button>
        <Total total={this.state.total}/>
      </div>
    );
  }
}

export default App;
