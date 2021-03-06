import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import {SearchBar} from './Components/SearchBar';
import {ProductTable} from './Components/ProductTable';
import {ProductRow} from './Components/ProductRow';
import {ProductCategoryRow} from './Components/ProductCategoryRow';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      filterText: '',
      inStockOnly: false,
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText){
    console.log("come 1 ");
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly){
    this.setState({
      inStockOnly: inStockOnly
    });
  }
  render() { 
    return (
      <div>
        <SearchBar
          filterText= {this.state.filterText}
          inStockOnly= {this.state.inStockOnly}
          onFilterTextChange= {this.handleFilterTextChange}
          onInStockChange = {this.handleInStockChange}
         />
        <ProductTable 
          products= {this.props.products} 
          filterText= {this.state.filterText}
          inStockOnly= {this.state.inStockOnly}
        />
      </div>
    );
  }
}

ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('root'));
registerServiceWorker();
