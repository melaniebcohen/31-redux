'use strict';

// import './_navbar.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <h1>expense tracker</h1>
        <nav>
          <ul>
            <li><Link to='/'>dashboard</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}