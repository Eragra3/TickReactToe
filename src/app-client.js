import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/game';

window.onload = () => {

    ReactDOM.render(
        <Game />,
        document.getElementById('root')
    );
};