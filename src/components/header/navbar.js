import React from 'react'
import "./navbar.css"
import { FaHome, FaUserAlt,  } from "react-icons/fa";
import { MdComputer, MdEmail } from "react-icons/md";


const Navbar = () => {
  return (
    <nav>
        <a href="#home">
            <FaHome />
        </a>
        <a href='#about'>
            <FaUserAlt />
        </a>
        <a href='#portfolio'>
            <MdComputer />
        </a>
        <a href='#contact' className='god'>
            <MdEmail />
        </a>
    </nav>
  )
}

export default Navbar