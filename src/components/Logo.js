import React, { Component } from 'react'

import logo1 from '../Assets/logo-1.svg';
import logo3 from '../Assets/logo-3.svg';
import logo2 from '../Assets/logo-2.svg';
import logo4 from '../Assets/logo-4.svg';

export default class Logo extends Component {
  render() {
    return (
      <div className='logo'>
        <img src={logo1} />
        <img src={logo2} />
        <img src={logo3} />
        <img src={logo4} />
      </div>
    )
  }
}
