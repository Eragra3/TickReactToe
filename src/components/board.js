import React from 'react';

import Tile from './tile.js'

export default class Board extends React.Component {

    onClick(id) {
        this.props.onClick(id);
    }

    render() {

        const board = this.props.board;
        const onClick = this.onClick.bind(this);

        return (
            <table className="board">
                <tbody>
                    <tr>
                        <td><Tile id={0} ownedBy={board[0]} onClick={onClick} /></td>
                        <td><Tile id={1} ownedBy={board[1]} onClick={onClick} /></td>
                        <td><Tile id={2} ownedBy={board[2]} onClick={onClick} /></td>
                    </tr>
                    <tr>
                        <td><Tile id={3} ownedBy={board[3]} onClick={onClick} /></td>
                        <td><Tile id={4} ownedBy={board[4]} onClick={onClick} /></td>
                        <td><Tile id={5} ownedBy={board[5]} onClick={onClick} /></td>
                    </tr>
                    <tr>
                        <td><Tile id={6} ownedBy={board[6]} onClick={onClick} /></td>
                        <td><Tile id={7} ownedBy={board[7]} onClick={onClick} /></td>
                        <td><Tile id={8} ownedBy={board[8]} onClick={onClick} /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}