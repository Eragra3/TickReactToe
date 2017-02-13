import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/game.js';
import players from 'globals';

window.onload = () => {

    let board = [
        null, null, null,
        players.circle, players.square, null,
        null, null, players.circle
    ];

    let currentPlayer = players.circle;
    let status = "X";
    let error = '';

    ReactDOM.render(
        <div>
            <div className="game-status">Current player: {status}</div>
            <div className="error-message">{error}</div>
            <Game board={board} onClick={onClick} />
        </div>,
        document.getElementById('root')
    );

    function changeTurn() {
        if (currentPlayer === players.circle) {
            currentPlayer = players.square;
        } else {
            currentPlayer = players.circle;
        }
    }

    function onClick(id) {
        if (board[i] !== null) {
            error = "This tile is already selected";
            return;
        }
        error = '';
        if (board[i] === players.circle) {
            currentPlayer = players.square;
            status = 'X';
        } else {
            currentPlayer = players.circle;
            status = 'O';
        }
        board[i] = currentPlayer
    }
};