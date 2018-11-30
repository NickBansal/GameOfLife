import React, { Component } from 'react'
import './Board.css'
import { createArray } from '../utils/index'

class Board extends Component {

    state = {
        grid: createArray(10)
    }

    render() {
        return (
            <div className="Board">
                <button onClick={() => console.log('hello')}>Click me</button>
            </div>
        )
    }

    // handleClick = () => {
    //     const grid = updatedArray(this.state.grid)
    //     this.setState({
    //         grid
    //     })
    // }
}

export default Board