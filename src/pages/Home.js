import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Categories from '../components/Categories';

import Products from '../components/Products';

export class HomePage extends Component {
  render() {

    const { shop } = this.props
    const { selectedCategory } = shop
    const category = `${selectedCategory[0].toUpperCase()}${selectedCategory.slice(1)}` 
    return (
      <div className='HomePage page'>
        <h1>{category}</h1>
        {/* <h2>{ counter.count }</h2> */}
        {/* <Categories /> */}
        <Products />
      </div>
    )
  }
}


const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(HomePage)