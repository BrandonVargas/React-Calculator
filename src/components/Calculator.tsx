import React from 'react'
import ActionButton from './ActionButton'
import Screen from './Screen'
import '../css/App.css';
import CSS from 'csstype';
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import {InitialState, RootDispatcher} from "../store/root-reducer";

interface CalculatorProps {}

interface StateProps {
    inputText: string
    firstNumber: string
}

const gridStyle: CSS.Properties = {
    width: "auto",
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "repeat(4, 100px)",
    gridTemplateRows: "100px 100px 100px",
    gridAutoFlow: "row"
}

const Calculator: React.FC<CalculatorProps> = () => {
    const {inputText, firstNumber} = useSelector<InitialState, StateProps>((state: InitialState) => {
        return{
            inputText: state.inputText,
            firstNumber: state.firstNumber
        }
    }, shallowEqual)
    const dispatch = useDispatch()
    const rootDispatcher = new RootDispatcher(dispatch)

    return (
        <div style={gridStyle}>
            <Screen key="screen" screenStyle="display" text= {inputText ? inputText: firstNumber} />

            <ActionButton text="Clear" buttonStyle="button symbol delete" onClick={() => rootDispatcher.clear()}/>
            <ActionButton text="/" buttonStyle="button symbol" onClick={() => rootDispatcher.setOperation("/")}/>

            <ActionButton text="7" buttonStyle="button number" onClick={() => rootDispatcher.concatNumber("7")}/>
            <ActionButton text="8" buttonStyle="button number" onClick={() => rootDispatcher.concatNumber("8")}/>
            <ActionButton text="9" buttonStyle="button number" onClick={() => rootDispatcher.concatNumber("9")}/>
            <ActionButton text="*" buttonStyle="button symbol" onClick={() => rootDispatcher.setOperation("*")}/>

            <ActionButton text="4" buttonStyle="button number" onClick={() => rootDispatcher.concatNumber("4")}/>
            <ActionButton text="5" buttonStyle="button number" onClick={() => rootDispatcher.concatNumber("5")}/>
            <ActionButton text="6" buttonStyle="button number" onClick={() => rootDispatcher.concatNumber("6")}/>
            <ActionButton text="+" buttonStyle="button symbol" onClick={() => rootDispatcher.setOperation("+")}/>

            <ActionButton text="1" buttonStyle="button number" onClick={() => rootDispatcher.concatNumber("1")}/>
            <ActionButton text="2" buttonStyle="button number" onClick={() => rootDispatcher.concatNumber("2")}/>
            <ActionButton text="3" buttonStyle="button number" onClick={() => rootDispatcher.concatNumber("3")}/>
            <ActionButton text="-" buttonStyle="button symbol" onClick={() => rootDispatcher.setOperation("-")}/>

            <ActionButton text="0" buttonStyle="button number zero" onClick={() => rootDispatcher.concatNumber("0")}/>
            <ActionButton text="." buttonStyle="button number" onClick={() => rootDispatcher.concatNumber(".")}/>
            <ActionButton text="=" buttonStyle="button symbol" onClick={() => rootDispatcher.getResult()}/>
        </div>
    )
}
export default Calculator