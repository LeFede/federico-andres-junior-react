import React, { Component } from 'react'
import { connect } from 'react-redux';

import { changeCurrency } from '../features/shop';
import { getCurrencies } from '../apollo/queries';
import { getFromLocal } from '../features/localStorage';

import '../styles/Currencies.scss'

export class Currencies extends Component {
  constructor() {
    super()
    this.state = {
      selectedCurrency: getFromLocal('currency') ?? '$',
      currencies: [],
      showCurrencies: false,
    }
  }

  showDropdown = () => {
    const {state} = this
    const {showCurrencies} = state
    this.setState({
      ...state,
      showCurrencies: !showCurrencies
    })
  }

  componentDidMount = () => {
    const {state} = this
    getCurrencies()
      .then(({data}) => this.setState({...state, currencies: data.currencies}))
      .catch(err => console.log(err))
  }

  handleClick = (e) => {
    const {outerText} = e.target
    const {props, state} = this
    if (outerText === state.selectedCurrency) return

    const { changeCurrency } = props
    const curr = outerText
    changeCurrency(curr)
    this.setState({...state, selectedCurrency: curr})
  }
  render() {
    const {handleClick, state, props, showDropdown} = this
    const {currencies, showCurrencies} = state
    const selectedCurrency = state.selectedCurrency//props.shop?.currency

    return (
      <div className='Currencies flex group-right'>
        <div><b onClick={showDropdown}>{selectedCurrency}</b>
          <div className={`dropdown ${showCurrencies ? 'show' : 'hide'}`}>
            {currencies.map(e => <div key={e.label} label={e.label} onClick={handleClick}>{e.symbol}</div>)}
          </div>
        </div>
        
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})

const mapDispatchToProps = {
  changeCurrency,
}

export default connect(mapStateToProps, mapDispatchToProps)(Currencies)