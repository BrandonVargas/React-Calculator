import React from 'react'
import PropTypes from 'prop-types'

const Screen = ({text, screenStyle}) => {
    return (
        <input type="text" className={screenStyle} defaultValue={text}/>
    )
}

Screen.propTypes = {
    text: PropTypes.string.isRequired,
    screenStyle: PropTypes.string.isRequired,
}

export default Screen