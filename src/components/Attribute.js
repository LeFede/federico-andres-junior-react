import React, { Component } from 'react'
import AttributeOptions from './AttributeOptions';

export default class Attribute extends Component {
  constructor() {
    super()
    this.state = {
      selected: 0
    }
  }

  func = (index) => {
    this.setState({...this.state, selected: index})
  }

  render() {
    const {props, handleChange, state, func} = this
    const {productId, name, items} = props
    const {selected} = state
    return (
      <fieldset className='Attribute' >
        <legend>{name}</legend>
        {items.map((e,i) => <AttributeOptions 
          productId={productId} 
          index={i} 
          key={e.value}
          name={name} 
          value={e.value}

          func={func}
          selected={selected}
          />
        )}
      </fieldset>
    )
  }
}
