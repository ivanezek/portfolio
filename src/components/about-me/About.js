import React from 'react'
import "./about.css"
import AvatarAbout from "../../assets/pic_3.svg"
import AvatarStacks from "../../assets/pic_4.svg"
import { IoLogoHtml5, IoLogoJavascript, IoLogoCss3, IoLogoSass, IoLogoWordpress } from 'react-icons/io'
import {  FaHubspot, FaGithub, FaReact, FaElementor } from 'react-icons/fa'
import { MouseParallaxContainer, MouseParallaxChild  } from "react-parallax-mouse"


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const About = () => {
  return (
  <div id='about' className='reveal'>
    <div className="container">
        <div className="row about-me">
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
        <div className='stack-container reveal'>
          <h2 className='stack-heading'>Mi stack de tecnologías</h2>
          <div className='row'>
            <div className='col stack__list'>
            <MouseParallaxContainer className="parallax"
                containerStyle={{
                  width: "100%",
                overflow: "visible",
                }}
                globalFactorX={0.3}
                globalFactorY={0.3}
                resetOnLeave>
                
                <ul>
                <MouseParallaxChild
                factorX={0.9}
                factorY={0.5}
                style={{
                  
                  width: "auto",
                  height: "100%"
                }}
                >
                <li className='item-list'>
                  HTML5
                  <IoLogoHtml5/> 
                </li>
                </MouseParallaxChild> 
                <MouseParallaxChild
                factorX={0.9}
                factorY={0.5}
                style={{
                  
                  width: "auto",
                  height: "100%"
                }}
                >
                <li className='item-list'>
                  CSS
                  <IoLogoCss3/> 
                </li>
                </MouseParallaxChild> 
                <MouseParallaxChild
                factorX={0.9}
                factorY={0.5}
                style={{
                  
                  width: "auto",
                  height: "100%"
                }}
                >
                <li className='item-list'>
                JAVASCRIPT
                  <IoLogoJavascript/> 
                </li>
                </MouseParallaxChild> 
                <MouseParallaxChild
                factorX={0.9}
                factorY={0.5}
                style={{
                  
                  width: "auto",
                  height: "100%"
                }}
                >
                <li className='item-list'>
                REACT JS
                  <FaReact/> 
                </li>
                </MouseParallaxChild> 
                <MouseParallaxChild
                factorX={0.9}
                factorY={0.5}
                style={{
                  
                  width: "auto",
                  height: "100%"
                }}
                >
                <li className='item-list'>
                SASS
                  <IoLogoSass/> 
                </li>
                </MouseParallaxChild> 
                <MouseParallaxChild
                factorX={0.9}
                factorY={0.5}
                style={{
                  
                  width: "auto",
                  height: "100%"
                }}
                >
                <li className='item-list'>
                HUBSPOT
                  <FaHubspot/> 
                </li>
                </MouseParallaxChild> 
                <MouseParallaxChild
                factorX={0.9}
                factorY={0.5}
                style={{
                  
                  width: "auto",
                  height: "100%"
                }}
                >
                <li className='item-list'>
                WORDPRESS
                  <IoLogoWordpress/> 
                </li>
                </MouseParallaxChild> 
                <MouseParallaxChild
                factorX={0.9}
                factorY={0.5}
                style={{
                  
                  width: "auto",
                  height: "100%"
                }}
                >
                <li className='item-list'>
                ELEMENTOR
                  <FaElementor/> 
                </li>
                </MouseParallaxChild> 
                <MouseParallaxChild
                factorX={0.9}
                factorY={0.5}
                style={{
                  
                  width: "auto",
                  height: "100%"
                }}
                >
                <li className='item-list'>
                GIT
                  <FaGithub/> 
                </li>
                </MouseParallaxChild> 
                  </ul>
                </MouseParallaxContainer>
              
            </div>
            <div className='col stack-img'>
                <img src={AvatarStacks} alt="My Stacks"/>
            </div>
          </div>

        </div>
    </div>
  </div>
  )
}

export default About