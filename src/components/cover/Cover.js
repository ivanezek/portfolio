import "./cover.css"
import AvatarComputer from "../../assets/pic_1.svg"
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const cover = () => {
  return (
    <div id="home" className='cover-container'>
          <div class="container">
          <div class="row cover">
            <div class="col">
              <h1 className='heading-text'>Hola! Soy Iván</h1>
              <div className='text-animation'>
                <h2 className="start">
                    <span className="middle1">Frontend </span>
                    <span className="middle2">Wordpress</span>
                    <span className="end2">Developer</span>
                </h2>
              </div>
              <button type="button" class="btn cv-button">
                <a href='../../assets/ivan_rosales_cv.pdf' download>Descargar CV</a>
              </button>
              <button type="button" class="btn cv-button">
                <a href='mailto:ivanrosaleset24@gmail.com' target="_blank" rel="noopener noreferrer">Contactar</a>
              </button>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/ivanrosales-/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin/>
                </a>
                <a href="https://github.com/ivanezek" target="_blank" rel="noopener noreferrer">
                <BsGithub/>
                </a>
              </div>
            </div>
            <div class="col">
              <img className="avatar" src={AvatarComputer} alt='computer-me'/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default cover