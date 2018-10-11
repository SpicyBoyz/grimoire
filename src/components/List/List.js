import React from 'react';

import ReactDragList from 'react-drag-list';
import 'react-drag-list/assets/index.css';

import './List.css';

class List extends React.Component {
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
        <ReactDragList
          dataSource={this.props.players}
          rowKey="title"
          row={(record, index) => (
            <div key={index}>
              <div className="player-name">{record.title}</div>
              <span className="player-title">{record.text}</span>
            </div>
          )}
          handles={false}
          className="player-list"
          rowClassName="player-item"
          onUpdate={this._handleUpdate}
        />
      </div>
    );
  }
}

export default List;
