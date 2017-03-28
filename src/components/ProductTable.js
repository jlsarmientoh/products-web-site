import React, { Component } from 'react';
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
    render() {
        return (
            <div>
                <ProductRow product="{1}" />
                <ProductRow product="{2}" />
                <ProductRow product="{3}" />
                <ProductRow product="{4}" />
                <ProductRow product="{5}" />
                <ProductRow product="{6}" />
                <ProductRow product="{7}" />
                <ProductRow product="{8}" />
            </div>
        );
    }
}

export default ProductTable;