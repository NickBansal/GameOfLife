import { 
    createEmptyGameBoard, 
    updatedArray, 
    updateGrid, 
    checkAmountOfNeighbours, 
    regenerateCells, 
    sortArrayValues, 
    removeDuplicates, 
    bacteria
} from '../utils';

const grid1 = [[1, 2], [1, 3], [1, 4]]
const grid2 = [[2, 2], [2, 3], [3, 2], [3, 3]]
const grid3 = [[1, 2], [1, 3], [1, 4], [1, 5]]
const remainingCells = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 2]]

describe('Utils testing', () => {
    test('Fake Test', () => {
        expect(true).toBeTruthy()
    })

    it('Checks that create Array return the correct 2D array', () => {
        expect(createEmptyGameBoard(1)).toEqual([[0]])
        expect(createEmptyGameBoard(2)).toEqual([[0, 0], [0, 0]])
        expect(createEmptyGameBoard(3)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
    })

    it('Picks specific values in an array and updates them', () => {
        const array1 = createEmptyGameBoard(2)
        const array2 = createEmptyGameBoard(3)
        const changedArray1 = [[1, 1]]
        const changedArray2 = [[0, 0], [1, 1]]
        const changedArray3 = [[0, 1], [1, 1]]
        const changedArray4 = [[0, 1], [1, 1], [2, 0]]
        expect(updateGrid(array1, changedArray1)).toEqual([[0, 0], [0, 1]])
        expect(updateGrid(array1, changedArray2)).toEqual([[1, 0], [0, 1]])
        expect(updateGrid(array2, changedArray3)).toEqual([[0, 1, 0], [0, 1, 0], [0, 0, 0]])
        expect(updateGrid(array2, changedArray4)).toEqual([[0, 1, 0], [0, 1, 0], [1, 0, 0]])
    })

    it('Creates an array of all the alive cells', () => {
        const grid1 = [[0, 0], [0, 1]]
        const grid2 = [[1, 0], [0, 1]]
        const grid3 = [[0, 1, 0], [0, 1, 0], [0, 0, 0]]
        expect(updatedArray(grid1)).toEqual([[1, 1]])
        expect(updatedArray(grid2)).toEqual([[0, 0], [1, 1]])
        expect(updatedArray(grid3)).toEqual([[0, 1], [1, 1]])
    })

    // Checking the amount of neighbours for each cell 
    it('Returns the amount of neighbours of a specified cell', () => {
        const singleCell = [0, 0]
        expect(checkAmountOfNeighbours(singleCell, remainingCells)).toEqual(0)
    })
    it('Returns the amount of neighbours of a specified cell', () => {
        const singleCell = [1, 0]
        expect(checkAmountOfNeighbours(singleCell, remainingCells)).toEqual(1)
    })
    it('Returns the amount of neighbours of a specified cell', () => {
        const singleCell = [1, 1]
        expect(checkAmountOfNeighbours(singleCell, remainingCells)).toEqual(3)
    })
    it('Returns the amount of neighbours of a specified cell', () => {
        const singleCell = [2, 3]
        expect(checkAmountOfNeighbours(singleCell, remainingCells)).toEqual(4)
    })


    // Compare arrays within arrays and sort them
    it('Compare arrays within arrays and sort then into order', () => {
        const array = [[1, 3], [1, 1], [1, 2]]
        expect(array.sort(sortArrayValues)).toEqual([[1, 1], [1, 2], [1, 3]])
    })
    it('Compare arrays within arrays and sort then into order', () => {
        const array = [[0, 3], [0, 11], [0, 2]]
        expect(array.sort(sortArrayValues)).toEqual([[0, 2], [0, 3], [0, 11]])
    })
    it('Compare arrays within arrays and sort then into order', () => {
        const array = [[3, 2], [3, 3], [2, 2], [2, 3]]
        expect(array.sort(sortArrayValues)).toEqual([[2, 2], [2, 3], [3, 2], [3, 3]])
    })

    // Calculates the regeneration of dead cells
    it('Cell regeneration to regenerate dead cells with 3 live neighbours', () => {
        expect(regenerateCells(grid1)).toEqual([[0, 3], [2, 3]])
    })
    it('Cell regeneration to regenerate dead cells with 3 live neighbours', () => {
        expect(regenerateCells(grid2)).toEqual(grid2)
    })
    it('Cell regeneration to regenerate dead cells with 3 live neighbours', () => {
        const answer = [[0, 3], [0, 4], [2, 3], [2, 4]]
        expect(regenerateCells(grid3)).toEqual(answer)
    })

    // Removing duplicates from arrays
    it('Will find duplicates in an array and remove them', () => {
        expect(removeDuplicates([1, 1, 2, 3])).toEqual([1, 2, 3])
        expect(removeDuplicates([1, 2, 1, 3, 1])).toEqual([1, 2, 3])
        expect(removeDuplicates([1, 2, 1, 3, 1, 2, 3])).toEqual([1, 2, 3])
        expect(removeDuplicates([[0, 0], [0, 1], [0, 0], [0 ,1]])).toEqual([[0, 0], [0, 1]])
    })

    // Final bacteria result
    it('An input will return a new array of live cells', () => {
        const answer = [[0, 3], [1, 3], [2, 3]]
        expect(bacteria(grid1)).toEqual(answer)
    })
    it('An input will return a new array of live cells', () => {
        expect(bacteria(grid2)).toEqual(grid2)
    })
    it('An input will return a new array of live cells', () => {
        const finalQuestion = [[1, 2], [2, 2], [3, 2]]
        const finalAnswer = [[2, 1], [2, 2], [2, 3]]
        expect(bacteria(finalQuestion)).toEqual(finalAnswer)
    })
    it('An input will return a new array of live cells', () => {
        const finalQuestion = [[2, 1], [2, 2], [2, 3]]
        const finalAnswer = [[1, 2], [2, 2], [3, 2]]
        expect(bacteria(finalQuestion)).toEqual(finalAnswer)
    })
})