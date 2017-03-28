import React, { Component } from 'react';
import DetailButton from './DetailButton';

class ProductRow extends React.Component {
    render() {
        return (
            <div className="board-row">
                {this.props.product} <DetailButton label="View" onClick={() => console.log(this.props.product)}/>
            </div>
        );
    }
}

export default ProductRow;