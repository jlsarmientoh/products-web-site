import React from 'react';

class ProductDetail extends React.Component {

    constructor(props) {
        super(props);
        this.handleCloseDetail = this.handleCloseDetail.bind(this);
    }

    handleCloseDetail() {
        this.props.onCloseDetail();
    }

    render() {
        if (this.props.open) {
            let product = this.props.product;
            return (
                <dialog className="modal" open>
                    <p>Product Details:</p>
                    <p>Name: {product.Name}</p>
                    <p>ProductNumber: {product.ProductNumber}</p>
                    <p>Color: {product.Color}</p>
                    <p>StandardCost: {product.StandardCost}</p>
                    <p>ListPrice: {product.ListPrice}</p>
                    <p>Size: {product.Size}</p>
                    <p>Weight: {product.Weight}</p>
                    <p>SellStartDate: {product.SellStartDate}</p>
                    <p>SellEndDate: {product.SellEndDate}</p>
                    <p>DiscontinuedDate: {product.DiscontinuedDate}</p>
                    <button id="close" onClick={this.handleCloseDetail}>Close</button>
                </dialog>
            );
        } else {
            return null;
        }
    }
}

export default ProductDetail;