import React from 'react'

class ActionButton extends React.Component {
    
    handleClick = event => {
        this.props.actionEvent()
    }

    render() {
        return (
            <button 
                onClick= {this.handleClick}
                className={this.props.buttonStyle}
                value={this.props.buttonText}> 
                    {this.props.buttonText} 
            </button>
        )
    }
}

export default ActionButton