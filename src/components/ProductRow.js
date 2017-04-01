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
            <div className="board-row">
                {this.props.product.Id} {this.props.product.Name}<DetailButton label="View" onClick={this.handleOnClick}/>
            </div>
        );
    }
}

export default ProductRow;