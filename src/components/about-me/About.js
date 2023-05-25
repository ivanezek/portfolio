import React from 'react'
import "./about.css"
import AvatarAbout from "../../assets/pic_3.svg"




function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 90;

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
    <>
      <div className='fade-backgr'></div>
      <div id='about'>
        <div className="container">
            <div className="row about-me reveal">
              <div className="col about-text">
                <h2>Sobre mi</h2>
                <p className='about-me-p bio'>Mi nombre es Iván Rosales, tengo 22 años y soy de Buenos Aires, Argentina.</p>
                <p className='about-me-p bio'>Soy un desarrollador Frontend con +1 año de experiencia, trabajando activamente en diferentes proyectos aplicando multiples enfoques y tecnologías desde React hasta Wordpress con Elementor.
                </p>
                <p className='about-me-p bio'>Me dedico a la construcción de sitios web optimizados para su visualización en diferentes dispositivos, ofreciendo una experiencia eficiente y atractiva para el usuario. 
                </p>
              </div>
              <div className="col">
                <div className='avatar-about'>
                  <img src={AvatarAbout} alt="About me"/>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>

  )
}

export default About