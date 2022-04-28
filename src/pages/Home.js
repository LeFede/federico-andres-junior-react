import React, { Component } from 'react'
import { connect } from 'react-redux'

export class HomePage extends Component {
  render() {

    const { counter } = this.props

    return (
      <div>
        <h1>Home</h1>
        <h2>{ counter.count }</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(HomePage)