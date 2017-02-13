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
            status: "Circle",
            error: '',
            winner: null
        }
    }

    render() {
        return (
            <div>
                <div className="game-status">Current player: {this.state.status}</div>
                <div className="error-message">{this.state.error}</div>
                <Board board={this.state.board} onClick={this.onClick.bind(this)} />
            </div>
        );
    }

    onClick(id) {

        if (this.state.winner !== null) {
            error = "Restart the game first";
            this.setState({ error: error })
            return;
        }

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
        var winner = this.calculateWinner(board);
        var status = this.generateStatus(currentPlayer, winner, board);

        this.setState({
            board: board,
            status: status,
            error: error,
            currentPlayer: currentPlayer,
            winner: winner
        });
    }

    switchTurns() {
        return this.state.currentPlayer === PLAYERS.circle
            ? PLAYERS.square
            : PLAYERS.circle;
    }

    generateStatus(currentPlayer, winner, board) {
        if (!board.some((v) => v === null) && winner !== null) {
            return 'Tie!';
        }

        if (winner !== null) {
            return `The winner is ${winner}!`;
        }

        if (currentPlayer == PLAYERS.square) {
            return 'Square';
        } else {
            return 'Circle';
        }
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}