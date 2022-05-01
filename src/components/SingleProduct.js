import React, { Component } from 'react'
import { connect } from 'react-redux';
import Attribute from './Attribute';

export class SingleProduct extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     selected: 0
  //   }
  // }

  render() {
    const {props} = this
    const {id, shop, prices, name, description, inStock, category, gallery, attributes} = props
    
    const currentPrice = prices.find(e => e.currency.symbol === shop.currency);
    const final = {
      price: currentPrice.amount,
      label: currentPrice.currency.label,
      symbol: currentPrice.currency.symbol
    }

    //console.log(attributes)
    // console.log(this.state)
    // const changeSelectedAttribute = (index) => this.setState({...this.state, selected: index})

    return (
      <div className='SingleProduct'>
        <h1 className='product-title'>{name}</h1>
        <div className='product-attributes'>
          {
            attributes.map(e => {
              return (
                <Attribute  key={e.id} productId={id} name={e.name} items={e.items}/>
              )
            }
          
          )}
          <div className='product-buttons'><button> + </button><button> - </button></div>

        </div>
        <h2 className='product-price'><small>{final.symbol}</small> {final.price} ({final.label})</h2>
        <h2 className='product-category'>{category}</h2>
        <h2 className='product-stock'>{inStock ? 'In stock' : 'No stock'}</h2>
        <p className='product-description'>{description}</p>
        {gallery.map(e => <div key={e}><img src={e}/></div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(SingleProduct)