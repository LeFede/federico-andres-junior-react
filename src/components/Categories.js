import React, { Component } from 'react'
import { getAllCategories } from '../apollo/queries';

import Category from './Category';

export default class Categories extends Component {

  constructor() {
    super() 
    this.state = {
      categories: []
    }
  }

  componentDidMount = () => {
    const { state } = this
    getAllCategories()
      .then(res => this.setState({...state, categories: res.data.categories}))
      .catch(err => console.log(err))
  }
  render() {
    const { state } = this

    return (
      <div className='Categories flex group-left'>
        {state.categories.map(e => <Category key={e.name} name={e.name} />)}
      </div>
    )
  }
}
