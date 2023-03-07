import React from 'react';
import '../style_sheets/Counter.css';

class Counter extends React.Component {
    render () {
        return (
            <div className='counter'>
                { this.props.clickNumber }
            </div>
        );
    }
}

export default Counter;