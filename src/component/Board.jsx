import React, { Component } from 'react'
import './Board.css'
import { createArray, updatedArray, bacteria, updateGrid } from '../utils/index'
import { fooPattern } from '../utils/examplePatterns'

class Board extends Component {

    state = {
        grid: updateGrid(createArray(20), fooPattern),
        game: false
    }

    render() {
        const text = !this.state.game ? 'Start' : 'Stop'
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
                    <button onClick={() => this.handleClick()}>{text}</button>
                    <button onClick={() => this.resetBoard()}>Reset</button>
            </div>
        )
    }

    changeBackground = index => index === 1 ? '#6d7780' : '#34495e'

    handleClick = () => {
        this.setState({
            game: !this.state.game
        })
    }
    
    resetBoard = () => {
        this.setState({
            grid: updateGrid(createArray(20), fooPattern), 
            game: false
        })
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.game !== prevState.game && this.state.game) {
            const changeMovements = setInterval(() => {
                const grid1 = updatedArray(this.state.grid)
                const newArray = bacteria(grid1)
                const grid = updateGrid(createArray(20), newArray)
                this.setState({
                    grid,
                    changeMovements
                })
            }, 100)
        }
        if (this.state.game !== prevState.game && !this.state.game) {
            clearInterval(this.state.changeMovements)
        }
    }
}

export default Board