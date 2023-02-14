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
              <div className="col">
                <h2>Sobre mi</h2>
                <p className='about-me-p bio'>Mi nombre es Iván Rosales, tengo 22 años y soy de Buenos Aires, Argentina.</p>
                <p className='about-me-p bio'>Empecé en 2021 a capacitarme sobre el Desarrollo Frontend, adquiriendo conocimientos de diferentes academias y cursos para poder formarme como profesional.
                </p>
                <p className='about-me-p bio'>Conseguí mi primer trabajo en <a href='https://www.happyagencies.com/'>Happy Agencies</a>, lugar donde pude aprender mucho sobre HubSpot y poner en práctica mis conocimientos sobre el maquetado de Landing Pages y la creación de diferentes sitios web.
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