import React from 'react'
import "./portfolio.css"
import { BsFillCheckCircleFill } from "react-icons/bs";
import Data from "../../data/Data"
import { useState } from 'react';


function Portfolio(){

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(Data[0]);
  const [activeClass, setActiveClass] = useState(Data[0].id)


  const handleClick = (id) => {
    const proyecto = Data.find((proyecto) =>proyecto.id === id);
    setProyectoSeleccionado(proyecto);
    setActiveClass(id)
  }

  return (
    <div id='portfolio'>
      <div className='container reveal'>
        <h2 className='portfolio-heading'>Algunos de mis trabajos</h2>
        <div className='portfolio-items'>
          <div className='container-list'>
            <div className='work-list'>
                {Data.map((proyecto) => (
                  <button key={proyecto.id} onClick={() => handleClick(proyecto.id)} className={activeClass === proyecto.id ? 'active-btn' : ''}>
                    <BsFillCheckCircleFill />
                    {proyecto.nombre}
                  </button>
                ))}
            </div>
          </div>
          <div className='work-display'>
            <div className='url'>
                  <a href={proyectoSeleccionado.url} target="_blank">
                    {proyectoSeleccionado.url}
                  </a>
            </div>
            <div className='work-info'>
              <div className='work-description'>
                <h2>
                  {proyectoSeleccionado.nombre}
                </h2>
                <p>
                  {proyectoSeleccionado.descripcion}
                </p>
              </div>
              <div className='work-demo'>
                <img src={proyectoSeleccionado.imagen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio