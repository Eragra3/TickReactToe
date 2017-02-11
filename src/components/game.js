import React from 'react';

import Board from './board';
import players from 'globals';

export default class Game extends React.Component {
    render() {

        let board = [
            null, null, null,
            players.circle, players.square, null,
            null, null, players.circle];

        return (
            <Board board={board} />
        );
    }
}