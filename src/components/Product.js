import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Product extends Component {
  render() {
    const {name, prices, shop, id} = this.props
    const currentPrice = prices.find(e => e.currency.symbol === shop.currency)
    const final = {
      price: currentPrice.amount,
      label: currentPrice.currency.label,
      symbol: currentPrice.currency.symbol
    }

    return (
      <div className='Product'>{name}: 
        <b>
          <small> {final.symbol}</small>
          {final.price}
        </b>
        <Link to={`/product/${id}`}>See product</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(Product)
