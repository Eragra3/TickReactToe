import React from 'react';

import Board from './board';
import PLAYERS from '../globals';

export default class Game extends React.Component {

    constructor() {
        super();

        this.state = {
            board: [
                null, null, null,
                PLAYERS.circle, PLAYERS.square, null,
                null, null, PLAYERS.circle],
            currentPlayer: PLAYERS.circle,
            status: "X",
            error: ''
        }
    }

    render() {
        return (
            <div>
                <div className="game-status">Current player: {this.state.status}</div>
                <div className="error-message">{this.state.error}</div>
            </div> ,
            <Board board={this.state.board} onClick={this.onClick.bind(this)} />
        );
    }

    onClick(id) {

        var error = '';

        if (this.state.board[id] !== null) {
            error = "This tile is already selected";
            this.setState({ error: error })
            return;
        }
        error = '';

        var board = this.state.board.slice();

        board[id] = this.state.currentPlayer

        var currentPlayer = this.switchTurns();
        var status = this.generateStatus();

        this.setState({
            board: board,
            status: status,
            error: error,
            currentPlayer: currentPlayer
        });

        console.log(this.state.board);
    }

    switchTurns() {
        return this.state.currentPlayer === PLAYERS.circle
            ? PLAYERS.square
            : PLAYERS.circle;
    }

    generateStatus(currentPlayer) {
        if (currentPlayer == PLAYERS.circle) {
            return 'X';
        } else {
            return 'O';
        }
    }
}