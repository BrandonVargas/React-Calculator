export const setOperation = (operation) => ({
    type: 'SET_OPERATION',
    operation
})

export const performOperation = () => ({
    type: 'PERFORM_OPERATION'
})

export const clear = () => ({
    type: 'CLEAR'
})

export const concatNumber = (number) => ({
    type: 'CONCAT',
    number
})