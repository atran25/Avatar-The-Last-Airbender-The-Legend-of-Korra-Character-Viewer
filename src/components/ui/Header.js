import React from 'react'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <header className="flex p-2 m-5 justify-center">
            <img src={logo} alt="" height="250" width="250"/>
        </header>
    )
}

export default Header
