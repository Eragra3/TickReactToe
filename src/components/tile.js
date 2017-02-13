import React from 'react';
import PLAYERS from '../globals';

const symbols = {
  circle: 'O',
  square: 'X',
  empty: ' '
};

export default class Tile extends React.Component {

  constructor() {
    super();
    this.state = {
      symbol: symbols.empty
    }
  }

  onClick() {
    this.props.onClick(this.props.id);
  }

  render() {

    this.state.symbol = symbols.empty;
    if (this.props.ownedBy === PLAYERS.circle) {
      this.state.symbol = symbols.circle;
    } else if (this.props.ownedBy === PLAYERS.square) {
      this.state.symbol = symbols.square;
    }

    return (
      <div className="tile" onClick={this.onClick.bind(this)}>
        {this.state.symbol}
      </div>
    );
  }
}