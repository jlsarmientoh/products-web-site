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
            <form onSubmit={this.handleSubmit} method="post" className="basic-grey">
                <h1>
                    <span>Please fill the fields below.</span>
                </h1>
                             
                <label>
                    <span>Name: </span>
                    <input type="text" name="Name" required onChange={this.handleInputChange} />
                </label>

                <label>
                    <span>ProductNumber: </span>
                    <input type="text" required name="ProductNumber" onChange={this.handleInputChange} />
                </label>

                <label>
                    <span>Color: </span>
                    <input type="text" name="Color" onChange={this.handleInputChange} />
                </label>
                
                <label>
                    <span>StandardCost: </span>
                    <input type="number" name="StandardCost" min="0" onChange={this.handleInputChange} />
                </label>
                
                <label>
                    <span>ListPrice: </span>
                    <input type="number" name="ListPrice" min="0" onChange={this.handleInputChange} />
                </label>

                <label>
                    <span>Size: </span>
                    <input type="text" name="Size" maxLength="5" onChange={this.handleInputChange} />
                </label>

                <label>
                    <span>Weight: </span>
                    <input type="number" name="Weight" min="0" onChange={this.handleInputChange} />
                </label>
                
                <label>
                    <span>SellStartDate: </span>
                    <input type="date" name="SellStartDate" required onChange={this.handleInputChange} />
                </label>
                
                <label>
                    <span>SellEndDate: </span>
                    <input type="date" name="SellEndDate" required onChange={this.handleInputChange} />
                </label>
                
                <label>
                    <span>DiscontinuedDate: </span>
                    <input type="date" name="DiscontinuedDate" required onChange={this.handleInputChange} />
                </label>
                
                <label>
                    <span>ThumbNailPhoto: </span>
                    <input type="text" name="ThumbNailPhoto" onChange={this.handleInputChange} />
                </label>

                <label>
                    <span>&nbsp;</span>
                    <input type="submit" className="button" value="Create" />
                </label>
            </form>
        );
    }
}

export default ProductForm;