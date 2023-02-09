import React from 'react'
import "./navbar.css"
import { FaHome, FaUserAlt,  } from "react-icons/fa";
import { MdComputer, MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
       <div class="wrapper">
         <div class="icon effect"> 
            <div class="tooltip">
               Inicio
            </div>
            <span> <FaHome /></span>
         </div>
         <div class="icon effect">
            <div class="tooltip">
               Sobre mi
            </div>
            <span><FaUserAlt /></span>
         </div>
         <div class="icon effect">
            <div class="tooltip">
               Tecnologías
            </div>
            <span><MdComputer /></span>
         </div>
         <div class="icon effect">
            <div class="tooltip">
               Portfolio
            </div>
            <span><MdEmail /></span>
         </div>
         <div class="icon effect">
            <div class="tooltip">
               Contacto
            </div>
            <span><MdEmail /></span>
         </div>
      </div>
    </nav>
  )
}

export default Navbar