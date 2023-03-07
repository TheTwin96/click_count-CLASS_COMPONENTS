import React from 'react';
import '../style_sheets/Button.css';

class Button extends React.Component {
    render () {
        return (
            <button 
                className={ this.props.isClickButton ? "click_button" : "restar_button" } 
                onClick={this.props.manageClick}>{ this.props.text }
            </button>
        );
    }
}

export default Button;
