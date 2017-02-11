import React from 'react';
import ReactDOM from 'react-dom';

import Tile from './components/tile.js';
import { players } from 'globals';

window.onload = () => {
    ReactDOM.render(
        <Tile ownedBy={players.circle} />,
    );
};