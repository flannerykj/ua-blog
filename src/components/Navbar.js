import React, { Component } from 'react';
import logo from '../media/ua-logo.png';
import {Icon} from 'react-fa';

class Navbar extends Component {
  render() {
    return(
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href='/' className='navbar-item'>
          <img src={logo} style={{marginRight: '10px'}}/>
         UA Development Blog
        </a>
      </div>
    </nav>
    )
  }
}

export default Navbar;

