import React from 'react'
import AvatarContact from "../../assets/contact.svg"
import { BsLinkedin, BsTelephoneInboundFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import "./contact.css";



const Contact = () => {
    return (
      <>
        <div className='fade-backgr'></div>
        <div id='contact'>
          <div className="container">
            <h2 className='contact-heading'>Contacto</h2>
              <div className="row contact-container reveal">
              <div className="col">
                  <div className='avatar-contact'>
                    <img src={AvatarContact} alt="Contact me"/>
                  </div>
                </div>
                <div className="col contact-text">
                    <h3>Podes contactarme a través de...</h3>
                    <div className='contact-social'>
                        <a className='item-social' href='https://www.linkedin.com/in/ivanrosales-/' target="_blank">
                            <BsLinkedin />
                            <p>LinkedIn</p>
                        </a>
                        <a className='item-social' href='mailto:contacto@ivanrosales.tech' target="_blank">
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