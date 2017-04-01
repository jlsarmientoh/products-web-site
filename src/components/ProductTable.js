import React from 'react';
import ProductRow from './ProductRow'
import ProductDetail from './ProductDetail'

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: {},
            showDeatil: false
        };

        this.handleShowDetail = this.handleShowDetail.bind(this);
        this.handleCloseDetail = this.handleCloseDetail.bind(this);
    }

    handleShowDetail(productItem) {
        console.log(productItem.Id);
        this.setState({
            selectedItem: productItem,
            showDeatil: true
        })
    }

    handleCloseDetail() {
        this.setState({
            selectedItem: {},
            showDeatil: false
        })
    }

    renderRow(i) {
        const product = this.props.products[i];
        return <ProductRow key={product.Id} id={product.Id} product={product} onShowDetail={this.handleShowDetail} onCloseDetail={this.handleCloseDetail}/>
    }

    renderDialog() {
        const open = this.state.showDeatil;
        const product = this.state.selectedItem;
        return <ProductDetail open={open} product={product} onCloseDetail={this.handleCloseDetail}/>
    }
    render() {
        if (this.props.products.length > 0) {
            let rows = [];

            for (let i = 0; i < this.props.products.length; i++) {
                rows.push(this.renderRow(i));
            }
            return (
                <div>
                    <div>{this.renderDialog()}</div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Product Number</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>);
        } else {
            return null;
        }
    }
}

export default ProductTable;