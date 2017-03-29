import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable'
import ProductService from './services/ProductsService'

class App extends Component {
    constructor(productService) {
        super();
        let _productService = productService;
        this.state = {
            products: []
        }
    }

    getProducts() {
        var updateProductsList = this.updateProductsList;
        this._productService.getProducts(
            updateProductsList,
            null,
            null
        );
    }

    updateProductsList(_products) {
        this.setState({
            products: _products
        });
    }

    render() {
        return (
            <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Products UI</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>

            <div className="container">
                    <div>
                        <ProductTable products={this.state.products} />
                </div>
            </div>
            </div>
        );
    }
}

export default App;
