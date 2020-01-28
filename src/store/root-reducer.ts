import {Action, Reducer, Dispatch} from "redux";

export interface InitialState {
    inputText: string,
    firstNumber: string,
    operation: string
}

export const initialState: InitialState = {
    inputText: "",
    firstNumber: "",
    operation: ""
}

export interface DispatchAction extends Action {
    payload: Partial<InitialState>;
}

export enum ActionType {
    ConcatNumber,
    SetOperation,
    GetResult,
    Clear,
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ConcatNumber: {
            return {...state,
                inputText: state.inputText + action.payload.inputText}
        }
        case ActionType.SetOperation: {
            if (state.operation) {
                const tempResult = getResult(state.operation,
                    parseFloat(state.firstNumber),
                    parseFloat(state.inputText))
                return {...state,
                    inputText: "",
                    firstNumber: String(tempResult),
                    operation: String(action.payload.operation)}
            } else {
                return {...state,
                    inputText: "",
                    firstNumber: state.inputText ? state.inputText : state.firstNumber,
                    operation: String(action.payload.operation)}
            }
        }
        case ActionType.Clear: {
            return {...state,
                inputText: "",
                firstNumber: "",
                operation: ""}
        }
        case ActionType.GetResult: {
            const result = getResult(state.operation,
                parseFloat(state.firstNumber),
                parseFloat(state.inputText))
            return {...state,
                inputText: "",
                firstNumber: String(result),
                operation: ""}
        }
        default: return state
    }
}

const getResult = (operation: string, firstNumber: number, secondNumber: number) => {
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

const divide = (firstNumber: number, secondNumber: number) => {
    return firstNumber / secondNumber
}

const multiply = (firstNumber: number, secondNumber: number) => {
    return firstNumber * secondNumber
}

const addition = (firstNumber: number, secondNumber: number) => {
    return firstNumber + secondNumber
}

const substraction = (firstNumber: number, secondNumber: number) => {
    return firstNumber - secondNumber
}

export class RootDispatcher {
    private readonly dispatch: Dispatch<DispatchAction>

    constructor(dispatch: Dispatch<DispatchAction>){
        this.dispatch = dispatch;
    }

    clear = () => this.dispatch({type: ActionType.Clear, payload: {}})
    concatNumber = (inputText: string) => this.dispatch({type: ActionType.ConcatNumber, payload: {inputText}})
    setOperation = (operation: string) => this.dispatch({type: ActionType.SetOperation, payload: {operation}})
    getResult = () => this.dispatch({type: ActionType.GetResult, payload: {}})
}

