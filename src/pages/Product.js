import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
//import {} from 'react-apollo'
import client from '../apollo/client'
import { getAllCategories, getProduct } from '../apollo/queries'


class ProductPage extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    getProduct(id)
      .then(res => this.setState({ product: res.data.product }))
  }

  render() {
    const product = this.state.product
    return (
      <div>
        <h1>{product?.name}</h1>
        {/* {
          this.state.data && cats.map(e => e.name)
        } */}
      </div>
    )
  }
}

export default withRouter(ProductPage)