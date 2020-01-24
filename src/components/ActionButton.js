import React from 'react'
import PropTypes from 'prop-types'

const ActionButton = ({ onClick, text, style}) => {
    return(
        <button
            onClick= {onClick}
            className={style}
            value={text}>
                {text}
        </button>
    )
}

ActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
}

export default ActionButton