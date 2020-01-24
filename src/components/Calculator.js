import React from 'react'
import ActionButton from './ActionButton'
import Screen from './Screen'
import '../css/App.css';
import { connect } from 'react-redux'
import { clear } from '../actions'
import { concatNumber } from '../actions'
import { setOperation } from '../actions'
import { performOperation } from '../actions'

class Calculator extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <Screen key="screen" style="display" text= {this.props.operations.inputText ? this.props.operations.inputText: this.props.operations.firstNumber} />

                <ActionButton text="Clear" style="button symbol delete" onClick={() => this.props.clear()}/>
                <ActionButton text="/" style="button symbol" onClick={() => this.props.setOperation("/")}/>

                <ActionButton text="7" style="button number" onClick={() => this.props.concatNumber(7)}/>
                <ActionButton text="8" style="button number" onClick={() => this.props.concatNumber(8)}/>
                <ActionButton text="9" style="button number" onClick={() => this.props.concatNumber(9)}/>
                <ActionButton text="*" style="button symbol" onClick={() => this.props.setOperation("*")}/>

                <ActionButton text="4" style="button number" onClick={() => this.props.concatNumber(4)}/>
                <ActionButton text="5" style="button number" onClick={() => this.props.concatNumber(5)}/>
                <ActionButton text="6" style="button number" onClick={() => this.props.concatNumber(6)}/>
                <ActionButton text="+" style="button symbol" onClick={() => this.props.setOperation("+")}/>

                <ActionButton text="1" style="button number" onClick={() => this.props.concatNumber(1)}/>
                <ActionButton text="2" style="button number" onClick={() => this.props.concatNumber(2)}/>
                <ActionButton text="3" style="button number" onClick={() => this.props.concatNumber(3)}/>
                <ActionButton text="-" style="button symbol" onClick={() => this.props.setOperation("-")}/>

                <ActionButton text="0" style="button number zero" onClick={() => this.props.concatNumber(0)}/>
                <ActionButton text="." style="button number" onClick={() => this.props.concatNumber(".")}/>
                <ActionButton text="=" style="button symbol" onClick={() => this.props.performOperation()}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
      clear: () => dispatch(clear()),
      concatNumber: (number) => dispatch(concatNumber(number)),
      setOperation: (operation) => dispatch(setOperation(operation)),
      performOperation: () => dispatch(performOperation())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)