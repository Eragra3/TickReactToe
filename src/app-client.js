import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/game.js';
import * as players from 'globals';

window.onload = () => {
    var lel = "2";
    ReactDOM.render(
        <Game />,
        document.getElementById('root')
    );
};