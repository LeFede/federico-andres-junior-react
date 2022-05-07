import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/Product.scss'

export class Product extends Component {
  render() {
    const {name, prices, shop, id, gallery} = this.props
    const currentPrice = prices.find(e => e.currency.symbol === shop.currency)
    const final = {
      price: currentPrice.amount,
      label: currentPrice.currency.label,
      symbol: currentPrice.currency.symbol
    }

    return (
      <div className='Product'>
        <Link to={`/product/${id}`}>
          <div className='image-container' style={{backgroundImage: `url(${gallery[0]})`}}></div>
        </Link>
        <h2>{name}</h2>
        <b>
          <small> {final.symbol}</small>
          {final.price}
        </b>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(Product)
