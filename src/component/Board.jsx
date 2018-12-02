import React, { Component } from 'react'
import './Board.css'
import { 
    createArray, 
    updatedArray, 
    bacteria, 
    updateGrid, 
    randomSquareSelection 
} from '../utils/index'
import { fooPattern1, fooPattern2 } from '../utils/examplePatterns'

class Board extends Component {

    state = {
        grid: updateGrid(createArray(30), [...fooPattern1, ...fooPattern2]),
        game: false
    }

    render() {
        const text = !this.state.game ? 'Start' : 'Stop'
        const { grid } = this.state
        return (
            <div className="Board">
                {grid.map((item, i) => {
                    return (
                        <div key={'i'+ i} className="Rows">
                            {item.map((square, j) => {
                                return (
                                    <div 
                                    key={'j'+ j} 
                                    className="Cols" 
                                    style={{background: this.changeBackground(square)}}>
                                    </div>
                                )
                            })}
                        </div>
                        )
                    })}
                    <button onClick={() => this.handleClick()}>{text}</button>
                    <button onClick={() => this.resetBoard()}>Reset</button>
                    <button onClick={() => this.randomisedSquares()}>Random</button>
            </div>
        )
    }

    changeBackground = index => index === 1 ? '#6d7780' : '#34495e'

    handleClick = () => {
        this.setState({
            game: !this.state.game
        })
    }

    randomisedSquares = () => {
        const grid = randomSquareSelection(30)
        this.setState({
            grid
        })
    }
    
    resetBoard = () => {
        this.setState({
            grid: updateGrid(createArray(30), [...fooPattern1, ...fooPattern2])
        })
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.game !== prevState.game && this.state.game) {
            const changeMovements = setInterval(() => {
                const grid1 = updatedArray(this.state.grid)
                const newArray = bacteria(grid1)
                const grid = updateGrid(createArray(30), newArray)
                this.setState({
                    grid,
                    changeMovements
                })
            }, 80)
        }
        if (this.state.game !== prevState.game && !this.state.game) {
            clearInterval(this.state.changeMovements)
        }
    }
}

export default Board