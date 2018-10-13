import React from 'react';

import './List.css';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.sortPlayers = this.sortPlayers.bind(this);
        this.handleInitiativeChange = this.handleInitiativeChange.bind(this);
    }

    handleInitiativeChange(event, player) {
        this.props.handleInitiativeChange(event.target.value, player);
        this.sortPlayers();
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
                {this.props.players.map((player, index) => (
                    <div className="player-item" key={index}>
                        <div className="player-name">{player.title}</div>
                        <span className="player-title">{player.text}</span>
                        <input
                            className="player-initiative"
                            type="text"
                            placeholder={player.initiative}
                            onBlur={event =>
                                this.handleInitiativeChange(event, player)
                            }
                        />
                    </div>
                ))}
                <button onClick={this.sortPlayers}>Sort</button>
            </div>
        );
    }
}

export default List;
