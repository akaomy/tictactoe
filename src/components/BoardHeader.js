import React from 'react';
import '../App.css';

export default function BoardHeader() {
  return (
      <section className="board-header">
          <h1>Tic Tac Toe</h1>
          <span>player 1 score:</span>
          <span>player 2 score:</span>
          <span>tie:</span>
          <span>time:</span>
      </section>
  );
}
