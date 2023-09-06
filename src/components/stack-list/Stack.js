import React from 'react'
import "./stack.css"
import { IoLogoHtml5, IoLogoJavascript, IoLogoCss3, IoLogoSass, IoLogoWordpress } from 'react-icons/io'
import {  FaHubspot, FaGithub, FaReact, FaElementor, FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { MouseParallaxContainer, MouseParallaxChild  } from "react-parallax-mouse"

const Stack = () => {
  return (
    <div id='stack'>
      <div className='stack-container reveal'>
      <h2 className='stack-heading'>Tech Skills</h2>
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
              BOOTSTRAP
              <FaBootstrap/> 
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
              TAILWIND
              <SiTailwindcss/> 
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
      </div>

    </div>
    </div>
  )
}

export default Stack