import { fooPattern } from './examplePatterns'

export const createArray = rows => {
    const arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = Array(rows).fill(0)
    }
    return arr;
}

const array = createArray(Array(20).fill(0))

export const updatedArray = (array) => {
    fooPattern.forEach((item, index) => {
        array[index+1][index+1] = 1
    })
}

// console.log(updatedArray(array))
