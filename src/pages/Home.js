import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Categories from '../components/Categories';

import Products from '../components/Products';

export default class HomePage extends Component {
  render() {

    // const { counter } = this.props
    

    return (
      <div>
        <h1>Home</h1>
        {/* <h2>{ counter.count }</h2> */}
        {/* <Categories /> */}
        <Products />
      </div>
    )
  }
}


// const mapStateToProps = (state) => ({...state})

// export default connect(mapStateToProps)(HomePage)