import React from 'react';

import './List.css';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.sortPlayers = this.sortPlayers.bind(this);
  }
  sortPlayers() {
    // sort by value
    let initiativeOrderArray = this.props.players.sort(function(a, b) {
      return a.initiative - b.initiative;
    });

    this.setState({
      deaconsDecoys: initiativeOrderArray.reverse(),
    });
  }

  render() {
    return (
      <div>
        {this.props.players.map(function(record, index) {
          return (
            <div className="player-item" key={index}>
              <div className="player-name">{record.title}</div>
              <span className="player-title">{record.text}</span>
              <input
                className="player-initiative"
                type="text"
                placeholder={record.initiative}
              />
            </div>
          );
        })}
        <button onClick={this.sortPlayers}>Sort</button>
      </div>
    );
  }
}

export default List;
