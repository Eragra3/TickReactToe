import React from 'react';

import Board from './board';
import PLAYERS from '../globals';

export default class Game extends React.Component {

    onClick(id) {
        this.board[id] = this.currentPlayer;

        this.props.onClick(id);
    }

    render() {

        this.currentPlayer = PLAYERS.circle;

        const board = [
            null, null, null,
            PLAYERS.circle, PLAYERS.square, null,
            null, null, PLAYERS.circle];
        this.board = board;

        return (
            <Board board={board} onClick={this.onClick.bind(this)} />
        );
    }
}