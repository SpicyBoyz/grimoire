import React, { Component } from 'react';
import './App.css';

import List from './components/List/List';
import Form from './components/Form/Form';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [
                {
                    color: 'rgb(148, 0, 211)',
                    title: 'Eyrin',
                    text: 'Elf Bard',
                },
                {
                    color: 'rgb(95, 194, 150)',
                    title: 'Click',
                    text: 'Kenku Cleric',
                },
                {
                    color: 'rgb(63, 81, 181)',
                    title: 'Höf Dawndew',
                    text: 'Half-Elf Monk',
                },
                {
                    color: 'rgb(240, 93, 5)',
                    title: 'Har Dawndew',
                    text: 'Half-Orc Barbarian',
                },
                {
                    color: 'rgb(255, 170, 0)',
                    title: 'Trix',
                    text: 'Tiefling Warlock',
                },
                {
                    color: 'rgb(0, 188, 212)',
                    title: 'Fold',
                    text: 'Human Warlock',
                },
            ],
        };

        this.addPlayer = this.addPlayer.bind(this);
    }

    addPlayer(player) {
        this.setState({
            players: [...this.state.players, player],
        });
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="column">
                        <h1>Initiative</h1>
                        <List players={this.state.players} />
                    </div>
                    <div className="column">
                        <h1>Add Character</h1>
                        <Form addPlayer={this.addPlayer} />
                        <div className="quick-select">
                            <h2>Quick Select</h2>
                            <div className="buttons">
                                <button>Clear all</button>
                                <button>Spicy Boyz</button>
                                <button>Deacon's Decoys</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
