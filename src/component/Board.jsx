import React, { Component } from 'react'
import './Board.css'
import { createArray, updatedArray, bacteria, updateGrid } from '../utils/index'
import { caretPattern } from '../utils/examplePatterns'

class Board extends Component {

    state = {
        grid: updateGrid(createArray(10), caretPattern)
    }

    render() {
        const { grid } = this.state
        return (
            <div className="Board">
                {grid.map((item, i) => {
                    return (
                        <div key={'i'+i} className="Rows">
                            {item.map((square, j) => {
                                return (
                                    <div key={'j'+j} className="Cols" style={{background: this.changeBackground(square)}}>
                                    
                                    </div>
                                )
                            })}
                        </div>
                        )
                    })}
                    <button onClick={() => this.handleClick()}>Click me</button>
            </div>
        )
    }

    changeBackground = index => index === 1 ? '#6d7780' : '#34495e'

    handleClick = () => {
        const grid1 = updatedArray(this.state.grid)
        const newArray = bacteria(grid1)
        const grid = updateGrid(createArray(10), newArray)
        this.setState({
            grid
        })
    }
}

export default Board