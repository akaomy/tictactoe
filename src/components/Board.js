import React from 'react';
import '../App.css';
import Square from './Square';

export default function Board() {
    const squares = [0,0,0,0,0,0,0,0,0];
    return (
        <ul className="board">
            {squares.map(i => {
                return <Square />
            })}
        </ul>
    )
}