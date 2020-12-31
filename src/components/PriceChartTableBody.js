import React, { Component } from 'react';

class PriceChartTableHeader extends Component {

  render() {
	return (
      <thead className="thead-dark">
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Logo</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Market Cap</th>
        </tr>
      </thead>
	);
  }

}

export default PriceChartTableHeader;