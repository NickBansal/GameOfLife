const checker = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]

export const createArray = rows => {
    const arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = Array(rows).fill(0)
    }
    return arr;
}

export const updateGrid = (grid, changedArray) => {
    changedArray.forEach(item => {
        grid[item[0]][item[1]] = 1
    })
    return grid
}

export const bacteria = (grid) => {
    const result = []
    for (let i = 0; i < grid.length; i++) {
        let newGrid = grid.slice()
        result.push(checkAmountOfNeighbours(newGrid.splice(i, 1)[0], newGrid))
    }
    const aliveCells = grid.filter((item, index) => result[index] === 2 || result[index] === 3)
    const regenCells = regenerateCells(grid)
    return removeDuplicates([...aliveCells, ...regenCells])
    .filter((item => item[0] >= 0 && item[1] >= 0))
    .filter(item => item[0] < 30 && item[1] < 30)
    .sort(Comparator)
}

export const checkAmountOfNeighbours = (singleCell, remainingCells)  => {
    let neighbours = 0
    checker.forEach(item => {
        let newArray = []
        newArray.push(item[0] + singleCell[0], item[1] + singleCell[1])
        if (remainingCells.some(eachItem => eachItem[0] === newArray[0] && eachItem[1] === newArray[1])) {
            neighbours++
        }
    })
    return neighbours
}

export const regenerateCells = (grid) => {
    const result = []
    grid.forEach(cell => {
        checker.forEach(item => {
            const newArray = []
            newArray.push(item[0] + cell[0], item[1] + cell[1])
            if ((checkAmountOfNeighbours(newArray, grid)) === 3) {
                result.push(newArray)
            }
        })
    })
    return removeDuplicates(result).sort(Comparator)
}

export const Comparator = (a, b) => {
    if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    else if (a[0] === b[0]) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
    }
    return 0;
}

export const removeDuplicates = array => Array.from(new Set(array.map(JSON.stringify)), JSON.parse)

export const updatedArray = grid => {
    const result = []
    grid.forEach((col, i) => {
        col.forEach((row, j) => {
            if (row === 1) {
                result.push([i, j])
            }
        })
    })
    return result
}

