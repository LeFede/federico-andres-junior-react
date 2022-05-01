import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changePreselect } from '../features/shop'

export class AttributeOptions extends Component {

  handleChange = (e) => {
    const {productId, name, value, changePreselect, shop, func, index} = this.props
    const {preselect} = shop
    //console.log(shop.preselect)
    func(index)
    changePreselect({
      id: productId,
      attributeName: name,
      attributeValue: value,
    })
  }


  render() {
    const {props, handleChange} = this
    const {value, name, productId, index, func, selected} = props
    return (
      // <div className='AttributeOptions'>{value}</div>
      <>
        <input type="radio" id={value} name={name} value={value}
          onChange={handleChange} checked={selected === index} />
          <label htmlFor={value}>{value}</label>
      </>
    )
  }
}

const mapStateToProps = (state) => ({...state})

const mapDispatchToProps = {
  changePreselect
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributeOptions)