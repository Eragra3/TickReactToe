import React from 'react';

import Tile from './tile.js'

export default class Board extends React.Component {
    onClick(id) {
        this.onClick(id);
    }

    render() {
        let board = this.props.board;

        return (
            <table className="board">
                <tbody>
                    <tr>
                        <td><Tile id={0} ownedBy={board[0]} onClick={this.onClick} /></td>
                        <td><Tile id={1} ownedBy={board[1]} onClick={this.onClick} /></td>
                        <td><Tile id={2} ownedBy={board[2]} onClick={this.onClick} /></td>
                    </tr>
                    <tr>
                        <td><Tile id={3} ownedBy={board[3]} onClick={this.onClick} /></td>
                        <td><Tile id={4} ownedBy={board[4]} onClick={this.onClick} /></td>
                        <td><Tile id={5} ownedBy={board[5]} onClick={this.onClick} /></td>
                    </tr>
                    <tr>
                        <td><Tile id={6} ownedBy={board[6]} onClick={this.onClick} /></td>
                        <td><Tile id={7} ownedBy={board[7]} onClick={this.onClick} /></td>
                        <td><Tile id={8} ownedBy={board[8]} onClick={this.onClick} /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}