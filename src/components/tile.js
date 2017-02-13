import React from 'react';
import PLAYERS from '../globals';

const symbols = {
  circle: 'O',
  square: 'S',
  empty: ' '
};

export default class Tile extends React.Component {

  onClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    console.log('I render! ${this.props.id}');

    var symbol = symbols.empty;
    if (this.props.ownedBy === PLAYERS.circle) {
      symbol = symbols.circle;
    } else if (this.props.ownedBy === PLAYERS.square) {
      symbol = symbols.square;
    }

    return (
      <div className="tile" onClick={this.onClick.bind(this)}>
        {symbol}
      </div>
    );
  }
}