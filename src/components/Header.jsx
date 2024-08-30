import React from 'react'
import './Header.scss'

const Header = (props) => {

    const { headerText, icon } = props
    return (
        <div className="header">
            <h2>{headerText}</h2>
            <span>{icon}</span>

        </div>
    )
}

export default Header
