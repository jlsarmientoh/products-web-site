import React from 'react';
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
    renderRow(i) {
        const product = this.props.products[i];
        return <ProductRow product={product.id} />
    }
    render() {
        if (this.props.products.lenght > 0) {
            let rows = [];

            for (let i = 0; this.props.products.lenght; i++) {
                rows.push(this.renderRow(i));
            }

            return (<div>{rows}</div>);
        } else {
            return null;
        }
    }
}

export default ProductTable;