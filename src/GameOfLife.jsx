import React, { Component } from 'react';
import './App.css';
import {
  createEmptyGameBoard,
  updatedArray,
  bacteria,
  updateGrid,
  randomSquareSelection,
  changeBackground
} from './utils/index'
import { fooPattern1, fooPattern2 } from './utils/examplePatterns'

class GameOfLife extends Component {

  state = {
    grid: updateGrid(createEmptyGameBoard(30), [...fooPattern1, ...fooPattern2]),
    game: true
  }

  render() {
    const text = this.state.game ? 'Start' : 'Stop'
    const { grid } = this.state
    return (
      <div className="App">
        <h1>Game of Life</h1>
        <div className="Board">
          {grid.map((item, i) => {
            return (
              <div key={'i' + i} className="Rows">
                {item.map((square, j) => {
                  return (
                    <div
                      key={'j' + j}
                      className="Cols"
                      style={{ background: changeBackground(square) }}>
                    </div>
                  )
                })}
              </div>
            )
          })}
          <button onClick={() => this.resetBoard()}>Reset</button>
          <button id="Start" onClick={() => this.handleClick()}>{text}</button>
          <button onClick={() => this.randomisedSquares()}>Random</button>
        </div>
      </div>
    );
  }

  handleClick = () => {
    const { game } = this.state
    this.setState({
      game: !game
    })
    if (game) {
      const changeMovements = setInterval(() => {
        const grid1 = updatedArray(this.state.grid)
        const newArray = bacteria(grid1)
        const grid = updateGrid(createEmptyGameBoard(30), newArray)
        this.setState({
          grid,
          changeMovements
        })
      }, 50)
    } else clearInterval(this.state.changeMovements)
  }

  randomisedSquares = () => {
    const grid = randomSquareSelection(30)
    this.setState({
      grid
    })
  }

  resetBoard = () => {
    this.setState({
      grid: updateGrid(createEmptyGameBoard(30), [...fooPattern1, ...fooPattern2])
    })
  }
}

export default GameOfLife;
