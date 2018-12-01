import React, { Component } from 'react';
import Board from './component/Board'
import './App.css';

class GameOfLife extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default GameOfLife;
