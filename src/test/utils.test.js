import { createArray, updatedArray, updateGrid, randomSquareSelection } from '../utils';

describe('Utils testing', () => {
    test('Fake Test', () => {
        expect(true).toBeTruthy()
    })

    it('Checks that create Array return the correct 2D array', () => {
        expect(createArray(1)).toEqual([[0]])
        expect(createArray(2)).toEqual([[0, 0], [0, 0]])
        expect(createArray(3)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
    })

    it('Picks specific values in an array and updates them', () => {
        const array1 = createArray(2)
        const array2 = createArray(3)
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

    // it('Creates a grid with randomly selected items', () => {
    //     expect(randomSquareSelection(10)).toEqual([])
    // })
})