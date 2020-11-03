import React, { Component } from 'react';
import Portfolio from '../components/Portfolio'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.props.boughtStocks.map(stock => <Portfolio name={stock.name} price={stock.price} id={stock.id} sell={this.props.sell}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
