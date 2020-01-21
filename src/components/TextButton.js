import React from 'react'

class TextButton extends React.Component {

    handleClick = event => {
        this.props.actionEvent(event.currentTarget.value)
    }

    render() {
        return(
            <button 
                onClick= {this.handleClick}
                className={this.props.buttonStyle}
                value={this.props.buttonText}> 
                    {this.props.buttonText} 
            </button>
        )
    }
}

export default TextButton