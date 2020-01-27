const operations = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_OPERATION':
            if (state.operation) {
                const tempResult = getResult(state.operation,
                    parseFloat(state.firstNumber),
                    parseFloat(state.inputText))
                return {...state,
                    inputText: "",
                    firstNumber: tempResult,
                    operation: action.operation}
            } else {
                return {...state,
                    inputText: "",
                    firstNumber: state.inputText ? state.inputText : state.firstNumber,
                    operation: action.operation}
            }
        case 'CLEAR':
            return {...state,
                inputText: "",
                firstNumber: "",
                operation: ""}
        case 'CONCAT':
            return {...state,
                inputText: String(state.inputText) + String(action.number)}
        case 'PERFORM_OPERATION':
            const result = getResult(state.operation,
                parseFloat(state.firstNumber),
                parseFloat(state.inputText))
            return {...state,
                inputText: "",
                firstNumber: result,
                operation: ""}
        default:
            return state
    }
}

const initialState = {
    inputText: "",
    firstNumber: "",
    operation: ""
}

const getResult = (operation, firstNumber, secondNumber) => {
    var result = 0
    switch (operation) {
        case '/':
            result = divide(firstNumber, secondNumber)
            break
        case '*':
            result = multiply(firstNumber, secondNumber)
            break
        case '+':
            result = addition(firstNumber, secondNumber)
            break
        case '-':
            result = substraction(firstNumber, secondNumber)
            break
        default:
            result = 0
    }
    if(result % 1 !== 0) {
        return result.toFixed(2)
    } else {
        return result
    }
}

const divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber
}

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber
}

const addition = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber
}

const substraction = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber
}

export default operations