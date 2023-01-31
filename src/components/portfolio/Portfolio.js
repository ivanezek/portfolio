import React from 'react'
import Mateazo from "../../assets/mateazo.png"
import "./portfolio.css"

const Portfolio = () => {
  return (
    <div id='portfolio' className='container'>
      <h2>Algunos de mis trabajos</h2>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <img className='mateazo' src={Mateazo}/>
          </div>
          <div className='col'>
            <p>Coderhouse</p>
            <h3>Mateazo</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio