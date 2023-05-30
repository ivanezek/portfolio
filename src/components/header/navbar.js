import React from 'react'
import "./navbar.css"
import { FaHome, FaUserAlt, FaCode, FaBriefcase  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Navbar = () => {
  return (
    <nav>
       <div class="wrapper">
         <a href='#home' className="icon effect">
            <p className='tooltip'>Inicio</p>
            <span> <FaHome /></span>
         </a>
         <a class="icon effect" href="#about">
            <p class="tooltip">
               Sobre mi
            </p>
            <span><FaUserAlt /></span>
         </a>
         <a class="icon effect" href="#stack">
         <p class="tooltip">
               Tecnologías
            </p>
            <span><FaCode /></span>
         </a>
         <a href="#portfolio" class="icon effect">
            <p class="tooltip">
               Portfolio
            </p>
            <span><FaBriefcase /></span>
         </a>
         <a href="#contact" class="icon effect">
         <p class="tooltip">
               Contacto
            </p>
            <span><MdEmail /></span>
         </a>
      </div>
    </nav>
  )
}

export default Navbar