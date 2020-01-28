import React from 'react'

interface ButtonProps {
    onClick: () => {},
    text: string,
    buttonStyle: string
}

const ActionButton: React.FC<ButtonProps> = (props) => {
    return(
        <button
            onClick= {props.onClick}
            className={props.buttonStyle}
            value={props.text}>
                {props.text}
        </button>
    )
}

export default ActionButton