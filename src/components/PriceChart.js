import React, { Component } from 'react';

import DataSourceCaption from './DataSourceCaption';
import PriceChartTableBody from './PriceChartTableBody';
import PriceChartTableHeader from './PriceChartTableHeader';

class PriceChart extends Component {

  render() {
	return (
      <div className="container-fluid mt-5 w-50 p-3">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <table className="table table-striped table-hover table-fixed table-bordered text-monospace">
              <DataSourceCaption />
              <PriceChartTableHeader />
			  <PriceChartTableBody />
            </table>
          </main>
        </div>
      </div>
	);
  }

}

export default PriceChart;