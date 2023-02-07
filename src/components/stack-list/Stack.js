import React from 'react'
import "./stack.css"
import { IoLogoHtml5, IoLogoJavascript, IoLogoCss3, IoLogoSass, IoLogoWordpress } from 'react-icons/io'
import {  FaHubspot, FaGithub, FaReact, FaElementor } from 'react-icons/fa'
import { MouseParallaxContainer, MouseParallaxChild  } from "react-parallax-mouse"
import AvatarStacks from "../../assets/pic_4.svg"

const Stack = () => {
  return (
    <div className='stack-container reveal container'>
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
  )
}

export default Stack