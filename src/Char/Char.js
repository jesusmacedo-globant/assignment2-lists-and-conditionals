import React from 'react';

const Char = (props) => {
    const styling = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        cursor: 'pointer',
    };

    return (
        <li style={styling} onClick={props.onClick}>
            {props.char}
        </li>
    );
};

export default Char;
