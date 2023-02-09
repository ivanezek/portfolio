import React from 'react'
import "./portfolio.css"
import { BsFillCheckCircleFill } from "react-icons/bs";


const Portfolio = () => {

  const proyectos = [
    {
      nombre: 'Mateazo',
      id: 1,
      url: 'https://mateazo.vercel.app/',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem suscipit temporibus molestiae enim, quam earum optio distinctio quae dolorem cumque sit, eos unde! Debitis similique animi molestiae expedita temporibus.',
      imagen: 'assets/mateazo.png' 
    },
    {
      nombre: 'Template de Agencias',
      id: 2,
      url: 'https://templates.happyagencies.com/landing-pages/agencies',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem suscipit temporibus molestiae enim, quam earum optio distinctio quae dolorem cumque sit, eos unde! Debitis similique animi molestiae expedita temporibus.',
      imagen: 'assets/template.png' 
    },
    {
      nombre: 'Diamond Sports Foundation',
      id: 3,
      url: 'https://thediamondsportsfoundation.org/',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem suscipit temporibus molestiae enim, quam earum optio distinctio quae dolorem cumque sit, eos unde! Debitis similique animi molestiae expedita temporibus.',
      imagen: 'assets/dsf.png' 
    },
    {
      nombre: 'Yummy Marketing',
      id: 4,
      url: 'https://www.yummymarketing.com/',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem suscipit temporibus molestiae enim, quam earum optio distinctio quae dolorem cumque sit, eos unde! Debitis similique animi molestiae expedita temporibus.',
      imagen: 'assets/yummy.png' 
    },
    {
      nombre: 'Certified Fleet Services',
      id: 5,
      url: 'https://www.certifiedfleetservices.com/',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem suscipit temporibus molestiae enim, quam earum optio distinctio quae dolorem cumque sit, eos unde! Debitis similique animi molestiae expedita temporibus.',
      imagen: 'assets/cfs.png' 
    },
    
  ]

  const listaProyectos = [];

  for (const proyecto of proyectos) {
    listaProyectos.push(
          <button className={proyecto.id}>
            <BsFillCheckCircleFill/>
            {proyecto.nombre}
          </button>
    );
  }

/* 

{proyectos.map((item, idx) => <Item key={idx} valor={item} />)}

  function Item(props){
    return (
      <>
        
      </>
    )
  }
*/

  return (
    <div id='portfolio' className=''>
      <div className='container reveal'>
        <div className='row'>
          <div className='col'>
            <h2 className='stack-heading'>Algunos de mis trabajos</h2>
            <div className='work-list'>
              {listaProyectos}
            </div>
          </div>
          <div className='col work-display'>
            <div className='url'>
              
            </div>
            <div></div>
            <div className='work-info'>
              <div className='work-description'>
                <h2>
                
                </h2>
              
              </div>
              <div className='work-demo'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio