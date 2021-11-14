import React from 'react';
import '@styles/notfound.css';
import notf from '@logos/dead.png'; 

const NotFound = () => {
  return (
    <main className="notfound">
      <section className="notfound_content">
        <h1>404 - ERROR</h1>        
        <img className="notfound_image" src={notf} alt="Logo App" />
        <hr/>
        <h4>Recurso no encontrado</h4>
      </section>
    </main>
  );
};

export default NotFound;
