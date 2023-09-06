import React from 'react'
import { BsLinkedin, BsTelephoneInboundFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import "./contact.css";



const Contact = () => {
    return (
      <>
        <div className='fade-backgr'></div>
        <div id='contact'>
          <div className="container">
            <h2 className='contact-heading'>Contact</h2>
              <div className="contact-container reveal">
                <div className="contact-text">
                    <div className='contact-social'>
                        <a className='item-social' href='https://www.linkedin.com/in/ivanrosales-/' target="_blank">
                            <BsLinkedin />
                            <p>LinkedIn</p>
                        </a>
                        <a className='item-social' href='mailto:ivanrosaleset24@gmail.com' target="_blank">
                            <SiGmail />
                            <p>Email</p>
                        </a>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </>
  
    )
  }
  
  export default Contact