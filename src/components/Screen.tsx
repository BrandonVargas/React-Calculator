import React from 'react'

interface ScreenProps {
    text: string,
    screenStyle: string
}

const Screen: React.FC<ScreenProps> = (props) => {
    return (
        <input type="text" className={props.screenStyle} defaultValue={props.text}/>
    )
}

export default Screen