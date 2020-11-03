import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    boughtStocks: []
    
  }

  componentDidMount() {
    fetch("http://localhost:4000/stocks")
    .then(r => r.json())
    .then(data => this.setState({stocks: data}))
    
  }

  handlePurchase = (stock) => {
    // console.log(stock)
    this.setState({ boughtStocks: [...this.state.boughtStocks, stock] })
  }

  sellStock = (prop) => {
    // console.log(prop.id)
    // console.log(this.state.boughtStocks[0].id);
   let bought = this.state.boughtStocks.filter(item => item.id !== prop.id)
   this.setState({
     boughtStocks: bought
   })
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} handlePurchase={this.handlePurchase}/>

            </div>
            <div className="col-4">

              <PortfolioContainer boughtStocks={this.state.boughtStocks} sell={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
