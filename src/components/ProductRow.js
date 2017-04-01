import React from 'react';
import DetailButton from './DetailButton';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.props.onShowDetail(this.props.product);
    }

    render() {
        return (
            <tr className="board-row">
                <td>{this.props.product.ProductNumber}</td>
                <td>{this.props.product.Name}</td>
                <td>{this.props.product.Color}</td>
                <td><DetailButton label="View" onClick={this.handleOnClick} /></td>
            </tr>
        );
    }
}

export default ProductRow;