import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable'
import ProductForm from './components/ProductForm'
import TableActions from './components/TableActions';
import ProductService from './services/ProductsService'

class App extends Component {
    constructor(props) {
        super(props);
        this.productService = new ProductService();
        this.state = {
            products: [],
            showForm: false,
            fromIndex: 1,
            resultSize: 10,
            totalResults: 0
        };

        this.updateProductsList = this.updateProductsList.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.hanldeCreateNew = this.hanldeCreateNew.bind(this);
        this.hanldeCloseForm = this.hanldeCloseForm.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.initialize();
    }

    initialize() {
        this.getProducts(this.state.fromIndex, this.state.resultSize);
    }

    getProducts(fromIndex, size) {
        this.productService.getProducts(
            fromIndex,
            size,
            this.updateProductsList,
            null,
            null
        );
    }

    updateProductsList(_products) {
       this.setState({
           products: _products.Results,
           totalResults: _products.TotalResults
        });
    }

    handleFormSubmit(product) {
        this.productService.createProduct(
            product,
            function () { alert('Product created') },
            function () { alert('Product NOT created') },
            this.hanldeCloseForm
        );


    }

    handleChangePage(fromIndex, size) {
        debugger
        this.getProducts(fromIndex, size);
    }

    hanldeCreateNew() {
        const showForm = true;
        this.setState(
            {
                showForm: showForm
            }
        );
    }

    hanldeCloseForm() {
        const showForm = false;
        this.setState(
            {
                showForm: showForm
            }
        );
    }

    renderProductForm() {
        if (this.state.showForm) {
            return <ProductForm onFormSubmit={this.handleFormSubmit} onFormCancel={this.hanldeCloseForm} />
        } else {
            return null;
        }
    }

    renderTableActions() {
        if (this.state.products.length > 0) {
            return <TableActions size={10} total={this.state.totalResults} onChangePage={this.handleChangePage} onCreateNew={this.hanldeCreateNew} />
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Products UI</h2>
            </div>
            <p className="App-intro">
                Scroll down to see the list of products.
            </p>

            <div className="container">
                    <div>
                        {this.renderProductForm()}
                    </div>
                    <br />
                    {this.renderTableActions()}
                    <div>
                        <ProductTable products={this.state.products} />
                    </div>
            </div>
            </div>
        );
    }
}

export default App;
