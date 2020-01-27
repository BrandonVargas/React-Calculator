import React from 'react'
import PropTypes from 'prop-types'

const ActionButton = ({ onClick, text, buttonStyle}) => {
    return(
        <button
            onClick= {onClick}
            className={buttonStyle}
            value={text}>
                {text}
        </button>
    )
}

ActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string.isRequired,
}

export default ActionButton