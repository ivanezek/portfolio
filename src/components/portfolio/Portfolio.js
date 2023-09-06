import React from 'react'
import "./portfolio.css"
import { BsFillCheckCircleFill } from "react-icons/bs";
import Data from "../../data/Data"
import { useState, useEffect } from 'react';

function Portfolio() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(Data[0]); // Estado que almacena el proyecto elegido
  const [activeClass, setActiveClass] = useState(Data[0].id); // Estado que determina si el boton para elegir el proyecto está activo o no
  const [isMobile, setIsMobile] = useState(false); // Estado que chequea si el usuario está en mobile o desktop

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Se setea el max-width para el switch de las imagenes segun si es mobile o desktop


    const handleResize = (e) => {
      setIsMobile(e.matches); // Funcion que actualiza el estado de isMobile segun el tamaño de pantalla
    };

    mediaQuery.addEventListener('change', handleResize); // Evento para detectar el cambio de ancho de pantalla
    handleResize(mediaQuery); // Ejecuta handleResize segun el ancho seteado en la variable mediaQuery

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  const handleClick = (id) => {
    const proyecto = Data.find((proyecto) => proyecto.id === id); // Aplica un find y encuentra el proyecto correspondiente al ID
    setProyectoSeleccionado(proyecto); // actualiza el proyecto
    setActiveClass(id); // actualiza id
  };

  const getImagen = () => {
    if (isMobile) {
      return proyectoSeleccionado.imagenMobile; // si isMobile == true, devuelve la img correspondiente
    }
    return proyectoSeleccionado.imagen; // si isMobile == false devuelve img desktop
  };

  return (
    <div id='portfolio'>
      <div className='container reveal'>
        <h2 className='portfolio-heading'>Recent works</h2>
        <div className='portfolio-items'>
          <div className='container-list'>
            <div className='work-list'>
              {Data.map((proyecto) => (
                <button
                  key={proyecto.id}
                  onClick={() => handleClick(proyecto.id)}
                  className={activeClass === proyecto.id ? 'active-btn' : ''}
                >
                  <BsFillCheckCircleFill />
                  {proyecto.nombre}
                </button>
              ))}
            </div>
          </div>
          <div className='work-display'>
            <div className='url'>
              <a href={proyectoSeleccionado.url} target='_blank' rel='noopener noreferrer'>
                {proyectoSeleccionado.url}
              </a>
            </div>
            <div className='work-info'>
              <div className='work-description'>
                <a href={proyectoSeleccionado.url} target='_blank' rel='noopener noreferrer'>
                  <h2>{proyectoSeleccionado.nombre}</h2>
                </a>
                <p>{proyectoSeleccionado.descripcion}</p>
              </div>
              <div className='work-demo'>
                <a href={proyectoSeleccionado.url} target='_blank' rel='noopener noreferrer'>
                  <img src={getImagen()} alt='Demo del trabajo' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;