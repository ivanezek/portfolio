import React from 'react';

function Project({ nombre, id, url, descripcion, imagen }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>ID: {id}</p>
      <p>URL: {url}</p>
      <p>Descripción: {descripcion}</p>
      <img src={imagen} alt={nombre} />
    </div>
  );
}

export default Project;