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
                <h2>About me</h2>
                <p className='about-me-p bio'>My name is Iván Rosales, i'm 22 years old and I live in Buenos Aires, Argentina.</p>
                <p className='about-me-p bio'>Experienced front-end developer with a year's expertise, committed to creating effective teamwork and delivering innovative web experiences with a focus on optimal user engagement. 
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