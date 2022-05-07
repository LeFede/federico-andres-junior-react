import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Categories from './Categories'
import Currencies from './Currencies'
import Logo from './Logo'

import '../styles/Navbar.scss'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='Navbar'>
        <div className='container'>
          <Categories />
          <Logo />
          <Currencies />
        </div>
      </nav>
    )
  }
}
