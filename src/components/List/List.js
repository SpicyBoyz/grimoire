import React from 'react';

import './List.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleInitiativeChange = this.handleInitiativeChange.bind(this);
  }

  handleInitiativeChange(event, player) {
    let initiative = event.target.value;

    this.props.handleInitiativeChange(initiative, player);
    event.preventDefault();
  }

  render() {
    return (
      <ul className="player-list">
        {this.props.players.map((player, index) => (
          <li
            className={'player-item ' + (index === 0 ? 'current-turn' : '')}
            key={index}
          >
            <div className="player-info">
              <div className="player-name">{player.title}</div>
              <span className="player-title">{player.text}</span>
            </div>
            <form id="initiative">
              <input
                className="player-initiative"
                type="text"
                placeholder={player.dexterity}
                value={player.initiative}
                onChange={event => this.handleInitiativeChange(event, player)}
              />
            </form>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
