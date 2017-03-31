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
                    <input type="number" id="txStandardCost" name="StandardCost" min="0" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txListPrice">ListPrice: </label>
                    <input type="number" id="txListPrice" name="ListPrice" min="0" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txSize">Size: </label>
                    <input type="text" id="txSize" name="Size" maxLength="5" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txWeight">Weight: </label>
                    <input type="number" id="txWeight" name="Weight" min="0" onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txSellStartDate">SellStartDate: </label>
                    <input type="date" id="txSellStartDate" name="SellStartDate" required onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txSellEndDate">SellEndDate: </label>
                    <input type="date" id="txSellEndDate" name="SellEndDate" required onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txDiscontinuedDate">DiscontinuedDate: </label>
                    <input type="date" id="txDiscontinuedDate" name="DiscontinuedDate" required onChange={this.handleInputChange} />
                    <br />
                    <label htmlFor="txThumbNailPhoto">ThumbNailPhoto: </label>
                    <input type="text" id="txThumbNailPhoto" name="ThumbNailPhoto" onChange={this.handleInputChange} />
                </fieldset>
                <input type="submit" value="Create"/>
            </form>
        );
    }
}

export default ProductForm;