import React, { useState } from 'react'
import { FaReact, FaBars } from "react-icons/fa"
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './navbar.scss'

const data = [
    {
        lable: 'Home',
        to: "/"
    },
    {
        lable: 'About',
        to: "/about"
    },
    {
        lable: 'Skills',
        to: "/skills"
    },
    {
        lable: 'Resume',
        to: "/resume"
    },

    {
        lable: 'Portfolio',
        to: "/portfolio"
    },
    {
        lable: 'Contact',
        to: "/contact"
    },

]

const NavBar = () => {

    const [toggleIcone, setToggleIcone] = useState(false)


const handleToggleIcone = () => {
    setToggleIcone(prevState => !prevState);
}
const handleClose = () => {
    setToggleIcone(false)
}





    return (
        <div>
            <nav className='navbar'>
                <div className='navbar_conatiner'>

                    <Link to={"/"} className='navbar-logo'>
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar-list ${toggleIcone ? 'active': ''} `}>
                    {data.map((item, index) => (
                        <li key={index} className='navbar-list-item'>
                            <Link to={item.to} className='navbar-list-item-link' onClick={handleClose}>{item.lable}</Link>
                        </li>
                    ))}
                </ul>
                <div className='nav-icons'  onClick={handleToggleIcone}>
                    {
                        toggleIcone ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>

        </div>
    )
}

export default NavBar
