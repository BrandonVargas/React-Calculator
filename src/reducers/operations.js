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
                    firstNumber: state.inputText ? state.inputText : state.firstNumber ,
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
            result = firstNumber / secondNumber
            break
        case '*':
            result = firstNumber * secondNumber
            break
        case '+':
            result = firstNumber + secondNumber
            break
        case '-':
            result = firstNumber - secondNumber
            break
        default:
            result = 0
    }
    return result
}

export default operations