import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable'
import ProductForm from './components/ProductForm'
import ProductService from './services/ProductsService'

class App extends Component {
    constructor(props) {
        super(props);
        this.productService = new ProductService();
        this.state = {
            products: []
        };

        this.updateProductsList = this.updateProductsList.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.initialize();
    }

    initialize() {
        this.getProducts();
    }

    getProducts() {
        this.productService.getProducts(
            this.updateProductsList,
            null,
            null
        );
    }

    updateProductsList(_products) {
       this.setState({
            products: _products
        });
    }

    handleFormSubmit(product) {
        this.productService.createProduct(
            product,
            function () { alert('Product created') },
            function () { alert('Product NOT created') },
            null
        );
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
                        <ProductForm onFormSubmit={this.handleFormSubmit} />
                    </div>
                    <div>
                        <ProductTable products={this.state.products} />
                    </div>
            </div>
            </div>
        );
    }
}

export default App;
