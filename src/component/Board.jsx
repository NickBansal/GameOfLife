import React, { Component } from 'react'
import './Board.css'
import { createArray, updatedArray } from '../utils/index'
import { fooPattern, caretPattern } from '../utils/examplePatterns'

class Board extends Component {

    state = {
        grid: createArray(30)
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
        const newUpdate = [...caretPattern, ...fooPattern]
        const grid = updatedArray(this.state.grid, newUpdate)
        this.setState({
            grid
        })
    }
}

export default Board