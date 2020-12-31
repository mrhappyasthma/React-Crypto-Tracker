import React, { Component } from 'react';

import NavBar from './components/NavBar.js'
import PriceChart from './components/PriceChart.js'

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <PriceChart />
      </div>
    );
  }

}

export default App;