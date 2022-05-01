import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeCategory } from '../features/shop'

export class Category extends Component {

  handleClick = (e) => {
    const {changeCategory} = this.props
    const {outerText} = e.target
    changeCategory(outerText)
  }

  render() {
    const {handleClick} = this
    const {name} = this.props
    return (
      <div onClick={handleClick}>{name}</div>
    )
  }
}

const mapDispatchToProps = {
  changeCategory
}

export default connect(undefined, mapDispatchToProps)(Category)