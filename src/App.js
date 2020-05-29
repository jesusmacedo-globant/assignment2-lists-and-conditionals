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
        let query = [...this.state.query];
        query.splice(index, 1);

        this.setState({
            query: query.join(''),
            queryLength: query.length,
        });
    };

    render() {
        let chars = null;
        const current = [...this.state.query];

        if (this.state.queryLength > 0) {
            chars = (
                <ul>
                    {current.map((char, index) => {
                        return (
                            <Char
                                key={index}
                                char={char}
                                onClick={this.handleOnClick.bind(this, index)}
                            />
                        );
                    })}
                </ul>
            );
        }

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
                <Validation
                    className="App-intro"
                    length={this.state.queryLength}
                />
                {chars}
            </div>
        );
    }
}

export default App;
