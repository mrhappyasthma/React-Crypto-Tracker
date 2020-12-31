import React, { Component } from 'react';

import chart from '../img/chart.png';

import keys from '../keys.json';

const axios = require('axios');

class NavBar extends Component {

  constructor(props) {
	  super(props);
	  this.state = {
      globalMarketCap: '',
      loading: true
    };
  }
  
  async componentDidMount() {
	  this.fetchData();
  }
  
  /** Fetches the global crypto market cap from Coinpaprika API. */
  fetchData = () => {
	  axios({
	    "method": "GET",
	    "url": "https://coinpaprika1.p.rapidapi.com/global",
	    "headers": {
	    	"content-type": "application/octet-stream",
	    	"x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
	      "x-rapidapi-key": keys["X-RapidAPI-Key"],
	  	  "useQueryString": true
	    }
    }).then((response) => {
      const globalData = response.data;
      this.setState({globalMarketCap: globalData.market_cap_usd});
      this.setState({loading: false});
    }).catch((error) => {
      console.log(error);
    });
  }
  
  /** Helper function (called from `render()`). Returns the global crypto market div. */
  globalCrypto(loading) {
    if (loading) {
      return <div id="loader" className="nav-item text-nowrap d-none d-sm-none d-sm-block">Loading...</div>
    }
    return <div id="global crypto market" className="nav-item text-nowrap d-none d-sm-none d-sm-block">
             <small>Global crypto market:</small> <a className="text-white" href="https://coinpaprika.com/market-overview/" target="_blank" rel="noopener noreferrer">
               ${(this.state.globalMarketCap).toLocaleString("en-US")}
             </a>
           </div>
  }

  /** Renders the UI. */
  render() {
	  return (
	    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow text-monospace text-white">
        <div className="navbar-brand col-sm-3 col-md-2 mr-0">
          <img src={chart} width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp;React Crypto Tracker
        </div>
        { this.globalCrypto(this.state.loading) }
      </nav>
	  );
  }

}

export default NavBar;