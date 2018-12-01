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
                    <button onClick={() => this.handleClick()}>Start</button>
            </div>
        )
    }

    changeBackground = index => index === 1 ? '#6d7780' : '#34495e'

    handleClick = () => {
        this.setState({
            game: !this.state.game
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { game } = this.state
        if (game !== prevState.game) {
            if (game) {
                setInterval(() => {
                    const grid1 = updatedArray(this.state.grid)
                    const newArray = bacteria(grid1)
                    const grid = updateGrid(createArray(20), newArray)
                    this.setState({
                        grid,
                    })
                }, 100)
            }
        }
    } 
}

export default Board