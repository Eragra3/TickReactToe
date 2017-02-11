import React from 'react';

import Tile from './tile.js'

export default class Board extends React.Component {
    render() {

        let board = this.props.board;

        var id = 0;

        return (
            <table>
                <tbody>
                    <tr>
                        <td><Tile ownedBy={board[id++]} /></td>
                        <td><Tile ownedBy={board[id++]} /></td>
                        <td><Tile ownedBy={board[id++]} /></td>
                    </tr>
                    <tr>
                        <td><Tile ownedBy={board[id++]} /></td>
                        <td><Tile ownedBy={board[id++]} /></td>
                        <td><Tile ownedBy={board[id++]} /></td>
                    </tr>
                    <tr>
                        <td><Tile ownedBy={board[id++]} /></td>
                        <td><Tile ownedBy={board[id++]} /></td>
                        <td><Tile ownedBy={board[id++]} /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}