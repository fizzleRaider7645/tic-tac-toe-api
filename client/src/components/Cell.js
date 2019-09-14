import React from 'react';

const Cell = props => {
    return (
        <button>
            {props.value}
        </button>
    )
}

export default Cell;