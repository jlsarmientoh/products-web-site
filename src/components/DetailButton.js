import React from 'react';

class DetailButton extends React.Component {
    render() {
        return (
            <a href="#" className="button" onClick={this.props.onClick}>{this.props.label}</a>
        );
    }
}

export default DetailButton;