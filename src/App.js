import React, { Component } from 'react';

import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state = {
        query: '',
        queryLength: 0,
    };

    handleOnChange = (event) => {
        const query = event.target.value.toString().split('');

        this.setState({
            query: query.join(''),
            queryLength: query.length,
        });
    };

    handleOnClick = (index) => {
        let query = this.state.query.split('');
        query.splice(index, 1);

        this.setState({
            query: query.join(''),
            queryLength: query.length,
        });
    };

    render() {
        // * improved way of getting array from string
        const charsList = this.state.query.split('').map((c, index) => {
            return (
                <Char
                    key={index}
                    char={c}
                    onClick={this.handleOnClick.bind(this, index)}
                />
            );
        });

        return (
            <div className="App">
                <header className="App-header">
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChange(event)}
                        value={this.state.query}
                    />
                    <p className="App-title">{this.state.queryLength}</p>
                </header>
                <Validation length={this.state.queryLength} />
                {charsList}
            </div>
        );
    }
}

export default App;
