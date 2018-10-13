import React, { Component } from 'react';
import './reset.css';
import './fonts/stylesheet.css';
import './App.css';

import List from './components/List/List';
import Form from './components/Form/Form';

const spicyBoyz = [
    {
        color: 'rgb(148, 0, 211)',
        title: 'Caudemere Mornsworn',
        text: 'Human Life Cleric',
    },
    {
        color: 'rgb(95, 194, 150)',
        title: 'Bjorr Eageraxe',
        text: 'Dwarf Totem Barbarian',
    },
    {
        color: 'rgb(63, 81, 181)',
        title: 'Nixxe Ella Nackle',
        text: 'Gnome Arcane Trickster Rogue',
    },
    {
        color: 'rgb(240, 93, 5)',
        title: 'Kaleus',
        text: 'Warforged Evocation Wizard',
    },
    {
        color: 'rgb(255, 170, 0)',
        title: 'Monkin Lightfoot',
        text: 'Halfling Swashbuckler Rogue',
    },
    {
        color: 'rgb(0, 188, 212)',
        title: 'Weerdarai Näilo',
        text: 'Elf Gunslinger Fighter',
    },
];

const deaconsDecoys = [
    {
        title: 'Eyrin',
        text: 'Elf Bard',
        initiative: 3,
    },
    {
        title: 'Click',
        text: 'Kenku Cleric',
        initiative: 1,
    },
    {
        title: 'Höf Dawndew',
        text: 'Half-Elf Monk',
        initiative: 4,
    },
    {
        title: 'Har Dawndew',
        text: 'Half-Orc Barbarian',
        initiative: 0,
    },
    {
        title: 'Trix',
        text: 'Tiefling Warlock',
        initiative: 1,
    },
    {
        title: 'Fold',
        text: 'Human Warlock',
        initiative: 1,
    },
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: deaconsDecoys,
        };

        this.addPlayer = this.addPlayer.bind(this);
        this.loadPlayers = this.loadPlayers.bind(this);
        this.updateInitiative = this.updateInitiative.bind(this);
    }

    addPlayer(player) {
        this.setState({
            players: [...this.state.players, player],
        });
    }

    loadPlayers(event) {
        // Loads a set of players based on button click
        const target = event.target;
        let players = [];

        // Reading button text seems inefficient
        if (target.innerText === 'Spicy Boyz') {
            players = spicyBoyz;
        } else if (target.innerText === "Deacon's Decoys") {
            players = deaconsDecoys;
        } else {
            players = [];
        }

        this.setState({
            players: players,
        });
    }

    updateInitiative(initiative, player) {
        // How do we pass the initiative value to the proper player object
    }

    render() {
        return (
            <div className="App">
                <div className="title">
                    <h1>Grimoire</h1>
                </div>
                <div className="container">
                    <div className="column">
                        <h1>Initiative</h1>
                        <List
                            players={this.state.players}
                            handleInitiativeChange={this.updateInitiative}
                        />
                    </div>
                    <div className="column">
                        <h1>Add Character</h1>
                        <Form addPlayer={this.addPlayer} />

                        <div className="quick-select">
                            <h2>Quick Select</h2>
                            <div className="buttons">
                                <button onClick={this.loadPlayers}>
                                    Clear all
                                </button>
                                <button
                                    onClick={this.loadPlayers}
                                    value={spicyBoyz}
                                >
                                    Spicy Boyz
                                </button>
                                <button
                                    onClick={this.loadPlayers}
                                    value={deaconsDecoys}
                                >
                                    Deacon's Decoys
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
