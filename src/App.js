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
    title: 'Eyrin Tylith',
    text: 'Elf Bard',
    initiative: 0,
    dexterity: '+4',
  },
  {
    title: 'Click',
    text: 'Kenku Cleric',
    initiative: 0,
    dexterity: '+3',
  },
  {
    title: 'Höf Dawndew',
    text: 'Half-Elf Monk',
    initiative: 0,
    dexterity: '+3',
  },
  {
    title: 'Har Dawndew',
    text: 'Half-Orc Barbarian',
    initiative: 0,
    dexterity: '+1',
  },
  {
    title: 'Trix',
    text: 'Tiefling Warlock',
    initiative: 0,
    dexterity: '+1',
  },
  {
    title: 'Fold',
    text: 'Human Warlock',
    initiative: 0,
    dexterity: '+2',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();

    this.state = {
      players: deaconsDecoys,
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.loadPlayers = this.loadPlayers.bind(this);
    this.sortPlayers = this.sortPlayers.bind(this);
    this.advancePlayers = this.advancePlayers.bind(this);
    this.updateInitiative = this.updateInitiative.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    const characterURL = this.input.current.value;
    console.log('A character url was submitted: ' + characterURL);
    this.input.current.value = '';

    // TODO: better error checking for URLs, and a better way to deal with CORS?
    const response = await window.fetch(`https://cors-anywhere.herokuapp.com/${characterURL}/json`);
    const json = await response.json();
    
    const characterRequests = json.campaign.characters.map(async character => {
      const response = await window.fetch(`https://cors-anywhere.herokuapp.com/https://www.dndbeyond.com/character/${character.characterId}/json`);
      return await response.json();
    });
    const characters = await Promise.all(characterRequests);
    console.log(characters);

    const players = characters.map(character => {
      const className = character.classes
        .map(classObject => classObject.definition.name)
        .join('/');
      
      return {
        title: character.name,
        text: `${character.race.fullName} ${className}`,
        initiative: 0,
        dexterity: '',
      }
    });

    this.setState({ players });
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

  sortPlayers() {
    // sort by value
    let initiativeOrderArray = this.state.players.concat().sort(function(a, b) {
      return b.initiative - a.initiative;
    });

    this.setState({
      players: initiativeOrderArray,
    });
  }

  advancePlayers() {
    let initiativeOrderArray = this.state.players.concat();
    let firstPlayer = initiativeOrderArray[0];
    initiativeOrderArray.push(firstPlayer);
    initiativeOrderArray.shift();

    this.setState({
      players: initiativeOrderArray,
    });
  }

  updateInitiative(initiative, player) {
    console.log('Set ' + player.title + ' initiative to ' + initiative);

    // Map the player array
    const players = this.state.players.map(item => {
      // If the item is the passed in player
      if (item.title === player.title) {
        // Update their initiative value
        item.initiative = Number(initiative);
      }
      // Otherwise return as is
      return item;
    });

    this.setState({ players });
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
              handleSort={this.sortPlayers}
              handleAdvance={this.advancePlayers}
              handleInitiativeChange={this.updateInitiative}
            />
          </div>
          <div className="column">
            <h1>Controls</h1>
            <div className="card">
              <div className="buttons u-mb-15">
                <button
                  className="primary-button"
                  onClick={this.advancePlayers}
                >
                  Next
                </button>
                <button className="primary-button" onClick={this.sortPlayers}>
                  Sort
                </button>
              </div>

              <div className="u-mb-15">
                <h2>Quick Select</h2>
                <button onClick={this.loadPlayers}>Clear all</button>
                <button onClick={this.loadPlayers} value={spicyBoyz}>
                  Spicy Boyz
                </button>
                <button onClick={this.loadPlayers} value={deaconsDecoys}>
                  Deekin's Decoys
                </button>
              </div>

              <div className="u-mb-15">
                <h2>Import Character from URL</h2>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Character URL" ref={this.input}/>
                  <button type="submit" className="primary-button">Submit</button>
                </form>
              </div>
            </div>

            <h1>Add Character</h1>
            <Form addPlayer={this.addPlayer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
