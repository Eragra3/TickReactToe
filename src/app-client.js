import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/game.js';
import PLAYERS from './globals';

window.onload = () => {

    console.log(PLAYERS)
    let board = [
        null, null, null,
        PLAYERS.circle, PLAYERS.square, null,
        null, null, PLAYERS.circle
    ];

    let currentPlayer = PLAYERS.circle;
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
        if (currentPlayer === PLAYERS.circle) {
            currentPlayer = PLAYERS.square;
        } else {
            currentPlayer = PLAYERS.circle;
        }
    }

    function onClick(id) {
        if (board[id] !== null) {
            error = "This tile is already selected";
            return;
        }
        error = '';
        board[id] = currentPlayer
        if (board[id] === PLAYERS.circle) {
            currentPlayer = PLAYERS.square;
            status = 'X';
        } else {
            currentPlayer = PLAYERS.circle;
            status = 'O';
        }

        console.log(board);
    }
};