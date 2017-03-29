import React from 'react';
import DetailButton from './DetailButton';

class ProductRow extends React.Component {
    render() {
        return (
            <div className="board-row">
                {this.props.product.Id} <DetailButton label="View" onClick={() => console.log(this.props.product.Id)}/>
            </div>
        );
    }
}

export default ProductRow;