import React from 'react';
import '../App.css'
const Cell = props => {
    return (
        <div className="cell">
            {props.value}
        </div>
    )
}

export default Cell;