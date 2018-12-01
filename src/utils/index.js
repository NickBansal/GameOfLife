export const createArray = rows => {
    const arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = Array(rows).fill(0)
    }
    return arr;
}

export const updatedArray = (array, changedArray) => {
    changedArray.forEach(item => {
        array[item[0]][item[1]] = 1
    })
    return array
}

