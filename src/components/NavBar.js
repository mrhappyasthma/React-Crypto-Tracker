import React, { Component } from 'react';

import chart from '../img/chart.png';

class NavBar extends Component {

  render() {
	return (
	  <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow text-monospace text-white">
        <img src={chart} width="30" height="30" className="d-inline-block align-top" alt="" />
        React Crypto Tracker
      </nav>
	);
  }

}

export default NavBar;