import React from 'react'
import PropTypes from 'prop-types'

const Screen = ({text, style}) => {
    return (
        <input type="text" className={style} defaultValue={text}/>
    )
}

Screen.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
}

export default Screen