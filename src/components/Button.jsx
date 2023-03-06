import React from 'react';
import '../style_sheets/Button.css';

function Button({ text, isClickButton, manageClick }) {
    return (
        <button className={ isClickButton ? "click_button" : "restar_button" } onClick={manageClick}>{ text }</button>
    );
}

export default Button;
