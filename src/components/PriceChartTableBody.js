import React, { Component } from 'react';

import btc from '../img/btc.png';
import eth from '../img/eth.png';
import chainlink from '../img/link.png';
import ada from '../img/ada.png';
import xmr from '../img/xmr.png';
import yfi from '../img/yfi.png';
import aave from '../img/aave.png';
import comp from '../img/comp.png';
import uni from '../img/uni.png';
import gnt from '../img/gnt.png';
import cel from '../img/cel.png';

import keys from '../keys.json';

const axios = require('axios');

class PriceChartTableHeader extends Component {

  constructor(props) {
	  super(props);
	  this.state = {
      dataSource: []
    };
  }
  
  async componentDidMount() {
	  this.fetchData();
  }

  /** Fetches the crypto prices by ticker symbol from Coinpaprika API. */
  fetchData = () => {
	  axios({
	    "method": "GET",
	    "url": "https://coinpaprika1.p.rapidapi.com/tickers",
	    "headers": {
	    	"content-type": "application/octet-stream",
	    	"x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
	      "x-rapidapi-key": keys["X-RapidAPI-Key"],
	  	  "useQueryString": true
	    }
    }).then((response) => {
      // Sort the fetched coin data by their rank
	    let coins = response.data.sort((a, b) => a.rank - b.rank);
      
      // Use the Coinpaprika ID as the key, since ticker symbols
      // and names are not unique.
	    const tickerImageDict = {
	      "btc-bitcoin": btc,
	      "eth-ethereum": eth,
	      "link-chainlink": chainlink,
	      "ada-cardano": ada,
	      "xmr-monero": xmr,
	      "yfi-yearnfinance": yfi,
	      "aave-new": aave,
	      "comp-compoundd": comp,
	      "uni-uniswap": uni,
	      "glm-golem": gnt,
        "cel-celsius": cel
	    };
	  
	    // Searching through the coins from Coinpaprika, and if any of them are
      // in the list of tickers that we want to track, append the image to
	    // the corresponding token in our data source.
	    let dataSource = [];
	    for (let i = 0; i < coins.length; i++) {
		  let id = coins[i].id;
	      if (id in tickerImageDict) {
		      dataSource.push(coins[i]);
		      dataSource[dataSource.length - 1]['img'] = tickerImageDict[id];
		    }
	    }
	  
      // Set the state on this component.
	    this.setState({
	      dataSource: dataSource
	    });
	  }).catch((error) => {
      console.log(error);
    });
  }

  /** Renders the UI. */
  render() {
	  return (
      <tbody>
      {this.state.dataSource.map((data, key) => {
        return(
          <tr key={key}>
            <td>{data.rank}</td>
            <td><img src={data.img} width="25" height="25" className="d-inline-block align-top" alt="{data.name}" /></td>
            <td><a target="_blank" rel="noopener noreferrer" href={"https://coinpaprika.com/coin/" + data.id}>{data.name}</a></td>
            <td>${(data.quotes.USD.price).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
            <td>${(data.quotes.USD.market_cap).toLocaleString('en-US')}</td>
          </tr>
        );
      })}
      </tbody>
	  );
  }

}

export default PriceChartTableHeader;