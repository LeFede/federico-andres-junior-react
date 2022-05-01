import React, { Component } from 'react'
import { connect } from 'react-redux';

export class SingleProduct extends Component {
  render() {
    const {props} = this
    const {shop, prices, name, description, inStock, category, gallery, attributes} = props
    
    const currentPrice = prices.find(e => e.currency.symbol === shop.currency);
    const final = {
      price: currentPrice.amount,
      label: currentPrice.currency.label,
      symbol: currentPrice.currency.symbol
    }

    console.log(gallery)

    return (
      <div>
        <h1>{name}</h1>
        <h2><small>{final.symbol}</small> {final.price} ({final.label})</h2>
        <h2>{category}</h2>
        <h2>{inStock ? 'In stock' : 'No stock'}</h2>
        <p>{description}</p>
        {gallery.map(e => <div key={e}><img src={e}/></div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(SingleProduct)