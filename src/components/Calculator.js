import React from 'react'
import TextButton from './TextButton'
import Screen from './Screen'
import '../css/App.css';
import ActionButton from './ActionButton';

class Calculator extends React.Component {
    state = {
        inputText: "",
        firstNumber: "",
        operation: ""
    }

    setNumber = (number) => {
         const text = this.state.inputText
         this.setState({inputText: text+number})
    }

    setOperation = (symbol) => {
        const currentOperation = this.state.operation
        if (currentOperation) {
            this.getResult()
            this.setState({
                operation: symbol
            })
        } else {
            const text = this.state.inputText ? this.state.inputText : this.state.firstNumber
            this.setState({
                inputText: "",
                firstNumber: text,
                operation: symbol
            })
        } 
   }

    clearText = () => {
        this.setState({
            inputText: "",
            firstNumber: "",
            operation:""})
    }

    getResult = () => {
        var result = 0
        var firstNumber = parseFloat(this.state.firstNumber)
        var secondNumber = parseFloat(this.state.inputText)
        switch(this.state.operation) {
            case "/":
                result = firstNumber/secondNumber
                break
            case "*":
                result = firstNumber*secondNumber
                break
            case "+":
                result = firstNumber+secondNumber
                break
            case "-":
                result = firstNumber-secondNumber
                break
            
        }
        this.setState({
            inputText: "",
            firstNumber:result,
            operation: ""
        })
    }

    render() {
        return (
            <div className="grid-container">
                <Screen key="screen" screenStyle="display" text= {this.state.inputText ? this.state.inputText : this.state.firstNumber} />
                
                <ActionButton key="clear" buttonText="Clear" buttonStyle="button symbol delete" actionEvent={this.clearText}/>
                <TextButton key="/" buttonText="/" buttonStyle="button symbol" actionEvent={this.setOperation}/>

                <TextButton key="7" buttonText="7" buttonStyle="button number" actionEvent={this.setNumber}/>
                <TextButton key="8" buttonText="8" buttonStyle="button number" actionEvent={this.setNumber}/>    
                <TextButton key="9" buttonText="9" buttonStyle="button number" actionEvent={this.setNumber}/>
                <TextButton key="*" buttonText="*" buttonStyle="button symbol" actionEvent={this.setOperation}/>    
                
                <TextButton key="4" buttonText="4" buttonStyle="button number" actionEvent={this.setNumber}/>
                <TextButton key="5" buttonText="5" buttonStyle="button number" actionEvent={this.setNumber}/>
                <TextButton key="6" buttonText="6" buttonStyle="button number" actionEvent={this.setNumber}/>   
                <TextButton key="+" buttonText="+" buttonStyle="button symbol" actionEvent={this.setOperation}/>         
                
                <TextButton key="1" buttonText="1" buttonStyle="button number" actionEvent={this.setNumber}/>
                <TextButton key="2" buttonText="2" buttonStyle="button number" actionEvent={this.setNumber}/>
                <TextButton key="3" buttonText="3" buttonStyle="button number" actionEvent={this.setNumber}/>
                <TextButton key="-" buttonText="-" buttonStyle="button symbol" actionEvent={this.setOperation}/>
            

                <TextButton key="0" buttonText="0" buttonStyle="button number zero" actionEvent={this.setNumber}/>
                <TextButton key="." buttonText="." buttonStyle="button number" actionEvent={this.setNumber}/>
                <ActionButton key="=" buttonText="=" buttonStyle="button symbol" actionEvent={this.getResult}/>                
            </div>
        )
    }
}

export default Calculator