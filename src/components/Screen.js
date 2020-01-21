import React from 'react'

class Screen extends React.Component {

    render() {
        return (
            <input type="text" className={this.props.screenStyle} value={this.props.text}/>
        )
    }
}

export default Screen