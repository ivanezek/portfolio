import React from 'react'
import "./navbar.css"
import { FaHome, FaUserAlt, FaCode, FaBriefcase  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Navbar = () => {
  return (
    <nav>
       <div className="wrapper">
         <a href='#home' className="icon effect">
            <p className='tooltip'>Home</p>
            <span> <FaHome /></span>
         </a>
         <a className="icon effect" href="#about">
            <p className="tooltip">
               About me
            </p>
            <span><FaUserAlt /></span>
         </a>
         <a className="icon effect" href="#stack">
         <p className="tooltip">
               Skills
            </p>
            <span><FaCode /></span>
         </a>
         <a href="#portfolio" className="icon effect">
            <p className="tooltip">
               Work
            </p>
            <span><FaBriefcase /></span>
         </a>
         <a href="#contact" className="icon effect">
         <p className="tooltip">
               Contact
            </p>
            <span><MdEmail /></span>
         </a>
      </div>
    </nav>
  )
}

export default Navbar