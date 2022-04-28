import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement, setTo } from '../features/counter'
import { getFromLocal, getObjectFromLocal } from '../features/localStorage'

export class Counter extends Component {

  render() {
    const { counter, increment, decrement, setTo } = this.props
    return (
      <div>
        <h1>{ counter.count }</h1>
        <div>
          <button onClick={() => increment()}>+</button>
          <button onClick={() => decrement()}>-</button>
          <button onClick={() => setTo(10)}>Set to 10</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})

const mapDispatchToProps = {
  increment,
  decrement,
  setTo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);