import React from 'react';
import Board from './components/Board';
import BoardHeader from './components/BoardHeader';
import './App.css';

function App() {
  return (
    <div className="game-container">
      <BoardHeader />
      <Board />
    </div>
  );
}

export default App;
