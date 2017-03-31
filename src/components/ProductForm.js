import React from 'react';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            ProductNumber: '',
            Color: '',
            StandardCost: 0.0,
            ListPrice: 0.0,
            Size: '',
            Weight: 0.0,
            SellStartDate: '',
            SellEndDate: '',
            DiscontinuedDate: '',
            ThumbNailPhoto: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const newProduct = this.state;

        this.props.onFormSubmit(newProduct);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Create New Product</legend>
                    <label htmlFor="txName">Name: </label>
                    <input type="text" id="txName" name="Name" required onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txProductNumber">ProductNumber: </label>
                    <input type="text" id="txProductNumber" required name="ProductNumber" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txColor">Color: </label>
                    <input type="text" id="txColor" name="Color" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txStandardCost">StandardCost: </label>
                    <input type="text" id="txStandardCost" name="StandardCost" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txListPrice">ListPrice: </label>
                    <input type="text" id="txListPrice" name="ListPrice" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txSize">Size: </label>
                    <input type="text" id="txSize" name="Size" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txWeight">Weight: </label>
                    <input type="text" id="txWeight" name="Weight" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txSize">Size: </label>
                    <input type="text" id="txSize" name="Size" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txSellStartDate">SellStartDate: </label>
                    <input type="date" id="txSellStartDate" name="SellStartDate" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txSellEndDate">SellEndDate: </label>
                    <input type="date" id="txSellEndDate" required name="SellEndDate" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txDiscontinuedDate">DiscontinuedDate: </label>
                    <input type="date" id="txDiscontinuedDate" required name="DiscontinuedDate" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txThumbNailPhoto">ThumbNailPhoto: </label>
                    <input type="text" id="txThumbNailPhoto" required name="ThumbNailPhoto" onChange={this.handleInputChange} />
                </fieldset>
                <input type="submit" value="Create"/>
            </form>
        );
    }
}

export default ProductForm;