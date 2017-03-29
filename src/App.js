import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable'
import ProductService from './services/ProductsService'

class App extends Component {
    constructor() {
        super();
        this.productService = new ProductService();
        this.state = {
            products: []
        };
        this.initialize();
    }

    initialize() {
        this.getProducts();
    }

    getProducts() {
        var updateProductsList = this.updateProductsList.bind(this);
        this.productService.getProducts(
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
