import React from 'react';

class TableActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: this.props.size,
            total: this.props.total,
            lastPage: Math.ceil(this.props.total / this.props.size),
            currentPage: 1
        };

        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePreviosPage = this.handlePreviosPage.bind(this);
        this.handleFirstPage = this.handleFirstPage.bind(this);
        this.handleLastPage = this.handleLastPage.bind(this);
        this.handleCreateNew = this.handleCreateNew.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleNextPage() {
        if (this.state.currentPage < this.state.lastPage) {
            const nextIndex = this.state.currentPage * this.state.size;
            const newPage = this.state.currentPage + 1;

            this.setState(
                {
                    currentPage: newPage
                }
            );

            this.props.onChangePage(nextIndex, this.state.size);
        }
    }

    handlePreviosPage() {
        if (this.state.currentPage > 1) {
            const nextIndex = (this.state.currentPage * this.state.size) - this.state.size;
            const newPage = this.state.currentPage - 1;

            this.setState(
                {
                    currentPage: newPage
                }
            );

            this.props.onChangePage(nextIndex, this.state.size);
        }
    }

    handleFirstPage() {
        if (this.state.currentPage > 1) {
            const nextIndex = 1;
            const newPage = 1;

            this.setState(
                {
                    currentPage: newPage
                }
            );

            this.props.onChangePage(nextIndex, this.state.size);
        }
    }

    handleLastPage() {
        if (this.state.currentPage <= this.state.lastPage) {
            const nextIndex = this.state.total - this.state.size;
            const newPage = this.state.lastPage;

            this.setState(
                {
                    currentPage: newPage
                }
            );

            this.props.onChangePage(nextIndex, this.state.size);
        }
    }

    handleCreateNew() {
        this.props.onCreateNew()
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;

        this.setState({
            size: value
        });
    }

    render() {
        return (
            <div className="action-bar">
                <div>
                    <button name="first" className="button" onClick={this.handleFirstPage} > First </button>
                    <button name="previous" className="button" onClick={this.handlePreviosPage} >Prev</button>
                    <button name="next" className="button" onClick={this.handleNextPage} >Next</button>
                    <button name="last" className="button" onClick={this.handleLastPage} >Last</button>
                
                    <button name="new" className="button" onClick={this.handleCreateNew} >New</button>
                </div>
                
                <div>
                    <label><span> Page: {this.state.currentPage} Of: {this.state.lastPage} </span></label>
                    <label><span> | Total: {this.state.total} </span></label>
                    <label><span> | Products per Page:</span> </label>
                    <label><span><input type="number" name="size" value={this.state.size} min="1" onChange={this.handleInputChange} /></span></label>
                </div>
            </div>
        );
    }
}

export default TableActions;