import React from 'react'
import "./about.css"
import AvatarAbout from "../../assets/pic_3.svg"
import AvatarStacks from "../../assets/pic_4.svg"
import { MdDevices, MdLightbulbOutline } from 'react-icons/md'
import { BiRocket } from 'react-icons/bi'
import { IoLogoHtml5, IoLogoJavascript, IoLogoCss3, IoLogoSass, IoLogoWordpress } from 'react-icons/io'
import {  FaBootstrap, FaGithub, FaReact, FaElementor } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'


const About = () => {
  return (
  <div id='about' className='container'>
    <div className="container">
        <div className="row">
          <div className="col">
            <h2>Sobre mi</h2>
            <p className='about-me-p bio'>Mi nombre es Iván Rosales, tengo 21 años y soy de Buenos Aires, Argentina.</p>
            <p className='about-me-p bio'>Empecé en 2021 a interesarme por el mundo del desarrollo y la programación, y decidí anotarme en Coderhouse para capacitarme con el fin de convertirme en un Full Stack Developer.
            </p>
          </div>
          <div className="col">
            <div className='avatar-about'>
              <img src={AvatarAbout} alt="About me"/>
            </div>
          </div>
        </div>
        <div className='web-items'>
          <div className="row">
            <div className="col web-item">
              <MdDevices/>
              <h3>Responsive</h3>
              <p className='about-me-p'>Mis sitios funcionan en cualquier dispositivo, grande o pequeño</p>
            </div>
            <div className="col web-item">
              <MdLightbulbOutline/>
              <h3>Intuitivo</h3>
              <p className='about-me-p'>Fáciles de entender y usar, aplicación intuitiva UX/UI</p>
            </div>
            <div className="col web-item">
              <BiRocket/>
              <h3>Dinámico</h3>
              <p className='about-me-p'>Los sitios web no tienen que ser estáticos, darles vida es mi prioridad!</p>
            </div>
          </div>
        </div>
        <h2 className='stack-heading'>Mi stack de tecnologías</h2>
        <div className='row'>
          <div className='col stack__list'>
            <ul>
              <li>HTML5 <IoLogoHtml5/> </li>
              <li>CSS3 <IoLogoCss3/> </li>
              <li>JAVASCRIPT <IoLogoJavascript/> </li>
              <li>REACT <FaReact/> </li>
              <li>SASS <IoLogoSass/> </li>
              <li>BOOTSTRAP <FaBootstrap/> </li>
              <li>WORDPRESS <IoLogoWordpress/> </li>
              <li>ELEMENTOR <FaElementor/> </li>
              <li>GIT <FaGithub/> </li>
              <li>FIREBASE <SiFirebase/> </li>
            </ul>
          </div>
          <div className='col stack-img'>
              <img src={AvatarStacks} alt="My Stacks"/>
          </div>
        </div>
    </div>
  </div>
  )
}

export default About