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
      <div>
        <ul className="player-list">
          {this.props.players.map((player, index) => (
            <li className="player-item" key={index}>
              <div class="player-info">
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
        <button className="action-button" onClick={this.props.handleSort}>
          Sort
        </button>
      </div>
    );
  }
}

export default List;
