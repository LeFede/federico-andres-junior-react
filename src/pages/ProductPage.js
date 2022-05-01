import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
//import {} from 'react-apollo'
import client from '../apollo/client'
import { getAllCategories, getProduct } from '../apollo/queries'
import SingleProduct from '../components/SingleProduct';


class ProductPage extends Component {
  constructor() {
    super()
    this.state = {}
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    getProduct(id)
      .then(res => this.setState({ product: res.data.product }))
      .catch(err => console.log(err))
  }

  render() {
    const product = this.state.product
    return (
      <div>
        {product 
          ? <SingleProduct {...product}/>
          : <h1>We didn't find anything :(</h1>
        }
        {/* {
          this.state.data && cats.map(e => e.name)
        } */}
      </div>
    )
  }
}

export default withRouter(ProductPage)