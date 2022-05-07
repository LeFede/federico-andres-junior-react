import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getProductsByCategory } from '../apollo/queries'
import Product from './Product';

export class Products extends Component {

  constructor() {
    super()
    this.state = {
      products: [],
    }
  }

  componentDidMount = () => {
    const {state} = this

    getProductsByCategory(state.selectedCategory)
      .then(({data}) => {
        this.setState({...state, products: data.category.products})
      
      })
      .catch(err => console.log(err))

  }

  componentDidUpdate(prevProps) {
    const {state} = this
    const {selectedCategory} = this.props.shop
    const {selectedCategory: prevSelectedCategory}  = prevProps.shop
    if (prevSelectedCategory === selectedCategory) return
    
    getProductsByCategory(selectedCategory)
      .then(({ data }) => this.setState({ ...state, products: data.category.products }))
      .catch(err => console.log(err))

  }

  render() {
    const {state} = this
    const {products} = state

    return (
      <div className='Products'>
        {products.map(e => <Product key={e.name} {...e}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(Products)