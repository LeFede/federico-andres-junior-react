import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeCategory } from '../features/shop'

import '../styles/Category.scss'

export class Category extends Component {

  handleClick = (e) => {
    const {changeCategory, name} = this.props
    changeCategory(name)
  }

  render() {
    const {handleClick, props} = this
    const {name, shop} = props
    const {selectedCategory} = shop
    console.log(selectedCategory)
    return (
      <div className={`Category ${selectedCategory === name ? 'selected' : ''}`} onClick={handleClick}>
        <p>{name.toUpperCase()}</p>
      </div>
    )
  }
}

const mapStatetoProps = (state) => ({...state})

const mapDispatchToProps = {
  changeCategory
}

export default connect(mapStatetoProps, mapDispatchToProps)(Category)