import React from 'react';

import Board from './board';
import * as  players from 'globals';

export default class Game extends React.Component {
    render() {

        let board = [, , players.circle, players.square];

        return (
            <Board board={board} />
        );
    }
}