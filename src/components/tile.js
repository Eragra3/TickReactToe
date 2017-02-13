import React from 'react';
import players from 'globals';

const symbols = {
  circle: 'O',
  square: 'S',
  empty: ' '
};

export default class Tile extends React.Component {
  render() {
    var symbol = symbols.empty;
    if (this.props.ownedBy === players.circle) {
      symbol = symbols.circle;
    } else if (this.props.ownedBy === players.square) {
      symbol = symbols.square;
    }

    return (
      <div className="tile" onClick={() => this.props.onClick(this.props.id)}>
        {symbol}
      </div>
    );
  }
}