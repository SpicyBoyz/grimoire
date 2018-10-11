import React from 'react';

import './List.css';

class List extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.players);
  }

  _handleUpdate = (evt, updated) => {
    console.log(evt); // tslint:disable-line
    console.log(updated); // tslint:disable-line
    // this.setState({
    //   dataSource: [...updated, {
    //     color: '#FFAA00',
    //     title: 'Added Engineer',
    //     text: 'Added Engineer',
    //   }]
    // })
  };

  render() {
    return (
      <div className="simple">
        {this.props.players.map(function(record, index) {
          return (
            <div className="player-item" key={index}>
              <div className="player-name">{record.title}</div>
              <span className="player-title">{record.text}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
