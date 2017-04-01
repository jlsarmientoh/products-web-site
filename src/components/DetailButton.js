import React from 'react';

class DetailButton extends React.Component {
    render() {
        return (
            <a href="#" onClick={this.props.onClick}>{this.props.label}</a>
        );
    }
}

export default DetailButton;