import React, { Component } from 'react';

export class SearchBar extends Component{
    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e){
        //console.log(this.props);
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e){
        this.props.onInStockChange(e.target.checked)
    }
    render(){
      return(
        <form>
          <input
                type="text" 
                placeholder= "Search.."
                value = {this.props.filterText}
                onChange= {this.handleFilterTextChange}
            />                
          <p>
            <input 
                type= "checkbox"
                checked = {this.props.inStockOnly}
                onChange = {this.handleInStockChange}
            />
                  {' '}
              Only Show products in Stock
          </p>
        </form>
      );
    }
  }