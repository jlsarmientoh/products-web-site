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
        alert('A name was submitted');
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit="{this.handleSubmit}">
                <fieldset>
                    <legend>Create New Product</legend>
                    <label for="txName">Name: </label>
                    <input type="text" id="txName" name="Name" />
                    <label for="txProductNumber">ProductNumber: </label>
                    <input type="text" id="txProductNumber" name="ProductNumber" />
                    <label for="txColor">Color: </label>
                    <input type="text" id="txColor" name="Color" />
                    <label for="txStandardCost">StandardCost: </label>
                    <input type="text" id="txStandardCost" name="StandardCost" />
                    <label for="txListPrice">ListPrice: </label>
                    <input type="text" id="txListPrice" name="ListPrice" />
                    <label for="txSize">Size: </label>
                    <input type="text" id="txSize" name="Size" />
                    <label for="txWeight">Weight: </label>
                    <input type="text" id="txWeight" name="Weight" />
                    <label for="txSize">Size: </label>
                    <input type="text" id="txSize" name="Size" />
                    <label for="txSellStartDate">SellStartDate: </label>
                    <input type="text" id="txSellStartDate" name="SellStartDate" />
                    <label for="txSellEndDate">SellEndDate: </label>
                    <input type="text" id="txSellEndDate" name="SellEndDate" />
                    <label for="txDiscontinuedDate">DiscontinuedDate: </label>
                    <input type="text" id="txDiscontinuedDate" name="DiscontinuedDate" />
                    <label for="txThumbNailPhoto">ThumbNailPhoto: </label>
                    <input type="text" id="txThumbNailPhoto" name="ThumbNailPhoto" />
                </fieldset>
                <input type="submit" value="Create"/>
            </form>
        );
    }
}

export default ProductForm;