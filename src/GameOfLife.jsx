import React, { Component } from 'react';
import Board from './component/Board'
import './App.css';

class GameOfLife extends Component {
  render() {
    return (
      <div className="App">
        <h1>Game of Life</h1>
        <Board />
      </div>
    );
  }
}

export default GameOfLife;
