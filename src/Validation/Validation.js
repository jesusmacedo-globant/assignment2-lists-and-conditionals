import React from 'react';

const Validation = (props) => {
    // * improved way of assigning value
    let message = props.length <= 5 ? 'Text too short!' : 'Text long enough';

    return <p className="App-intro">{message}</p>;
};

export default Validation;
