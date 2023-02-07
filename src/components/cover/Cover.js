import "./cover.css"
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import videoBackground from "../../assets/bg.mp4"



const cover = () => {



  return (
    <div id="home" className='cover-container'>
      <video autoPlay loop muted plays-inline className="back-video">
        <source src={videoBackground} type="video/mp4"></source>
      </video>
          <div class="container">
          <div class="cover">
              <h2 className='heading-text'>Hola! Soy</h2>
              <h1 className="heading-name">IVÁN ROSALES</h1>
              <div className='text-animation'>
                <h2 className="start">
                    <span className="middle1">Frontend </span>
                    <span className="middle2">Wordpress</span>
                    <span className="end2">Developer</span>
                </h2>
              </div>
              <div className="buttons-container">
                <button type="button" class="btn cv-button">
                  <a href='../../assets/ivan_rosales_cv.pdf' download>Descargar CV</a>
                </button>
                <button type="button" class="btn cv-button">
                  <a href='mailto:ivanrosaleset24@gmail.com' target="_blank" rel="noopener noreferrer">Contactar</a>
                </button>
              </div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/ivanrosales-/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin/>
                </a>
                <a href="https://github.com/ivanezek" target="_blank" rel="noopener noreferrer">
                <BsGithub/>
                </a>
              </div>
          </div>
        </div>
      </div>
  )
}

export default cover