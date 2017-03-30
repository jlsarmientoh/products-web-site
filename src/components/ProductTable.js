import React from 'react';
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
    renderRow(i) {
        const product = this.props.products[i];
        return <ProductRow key={product.Id} id={product.Id} product={product} />
    }
    render() {
        if (this.props.products.length > 0) {
            let rows = [];

            for (let i = 0; i < this.props.products.length; i++) {
                rows.push(this.renderRow(i));
            }

            return (<div>{rows}</div>);
        } else {
            return null;
        }
    }
}

export default ProductTable;