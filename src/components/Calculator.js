import React from 'react'
import ActionButton from './ActionButton'
import Screen from './Screen'
import '../css/App.css';
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { clear } from '../actions'
import { concatNumber } from '../actions'
import { setOperation } from '../actions'
import { performOperation } from '../actions'

const Calculator = () => {
    const state = useSelector(state => (state.operations), shallowEqual)
    const dispatch = useDispatch()
    return (
        <div className="grid-container">
            <Screen key="screen" screenStyle="display" text= {state.inputText ? state.inputText: state.firstNumber} />

            <ActionButton text="Clear" buttonStyle="button symbol delete" onClick={() => dispatch(clear())}/>
            <ActionButton text="/" buttonStyle="button symbol" onClick={() => dispatch(setOperation("/"))}/>

            <ActionButton text="7" buttonStyle="button number" onClick={() => dispatch(concatNumber(7))}/>
            <ActionButton text="8" buttonStyle="button number" onClick={() => dispatch(concatNumber(8))}/>
            <ActionButton text="9" buttonStyle="button number" onClick={() => dispatch(concatNumber(9))}/>
            <ActionButton text="*" buttonStyle="button symbol" onClick={() => dispatch(setOperation("*"))}/>

            <ActionButton text="4" buttonStyle="button number" onClick={() => dispatch(concatNumber(4))}/>
            <ActionButton text="5" buttonStyle="button number" onClick={() => dispatch(concatNumber(5))}/>
            <ActionButton text="6" buttonStyle="button number" onClick={() => dispatch(concatNumber(6))}/>
            <ActionButton text="+" buttonStyle="button symbol" onClick={() => dispatch(setOperation("+"))}/>

            <ActionButton text="1" buttonStyle="button number" onClick={() => dispatch(concatNumber(1))}/>
            <ActionButton text="2" buttonStyle="button number" onClick={() => dispatch(concatNumber(2))}/>
            <ActionButton text="3" buttonStyle="button number" onClick={() => dispatch(concatNumber(3))}/>
            <ActionButton text="-" buttonStyle="button symbol" onClick={() => dispatch(setOperation("-"))}/>

            <ActionButton text="0" buttonStyle="button number zero" onClick={() => dispatch(concatNumber(0))}/>
            <ActionButton text="." buttonStyle="button number" onClick={() => dispatch(concatNumber("."))}/>
            <ActionButton text="=" buttonStyle="button symbol" onClick={() => dispatch(performOperation())}/>
        </div>
    )
}
export default Calculator