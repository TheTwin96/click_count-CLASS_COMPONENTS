import React from 'react';
import '../style_sheets/Counter.css';

function Counter({ clickNumber }) {
    return (
        <div className='counter'>
            { clickNumber }
        </div>
    );
}

export default Counter;