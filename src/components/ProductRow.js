import React from 'react';
import DetailButton from './DetailButton';

class ProductRow extends React.Component {
    render() {
        return (
            <div className="board-row">
                {this.props.product.id} <DetailButton label="View" onClick={() => console.log(this.props.product.id)}/>
            </div>
        );
    }
}

export default ProductRow;