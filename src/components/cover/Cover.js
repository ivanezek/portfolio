import "./cover.css"
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import videoBackground from "../../assets/bg.mp4"
import resume from "../../assets/ivan_rosales_resume.pdf"



const cover = () => {



  return (
    <div id="home" className='cover-container'>
      <video autoPlay loop muted plays-inline className="back-video">
        <source src={videoBackground} type="video/mp4"></source>
      </video>
          <div className="container">
          <div className="cover">
              <h2 className='heading-text'>Hello! My name is</h2>
              <h1 className="heading-name">IVÁN ROSALES</h1>
              <div className='text-animation'>
                <h2 className="start">
                    <span className="middle1">Frontend</span>
                    <span className="middle2">Wordpress</span>
                    <span className="end2">Developer</span>
                </h2>
              </div>
              <div className="buttons-container">
                  <a href={resume} download="Iván Rosales - Resume" className="btn cv-button">Download resume</a>
                  <a href='mailto:ivanrosaleset24@gmail.com' target="_blank" rel="noopener noreferrer" className="btn cv-button">Contact me</a>
              </div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/ivanrosales-/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin/>
                </a>
                <a href="https://github.com/ivanezek" target="_blank" rel="noopener noreferrer">
                <BsGithub/>
                </a>
                <a href="https://instagram.com/ivanrosales.tech" target="_blank" rel="noopener noreferrer">
                <BsInstagram/>
                </a>
              </div>
          </div>
        </div>
      </div>
  )
}

export default cover