import React from 'react';

const Validation = (props) => {
    let message = null;
    console.info(props.length);

    if (props.length < 5) {
        message = <p>Text too short!</p>;
    } else {
        message = <p>Text long enough</p>;
    }

    return message;
};

export default Validation;
