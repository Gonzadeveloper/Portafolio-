import React from 'react';
import ProyectosData from '../proyectos.json';
import "./Cards.css";
import IconYoutube from "../assets/youtube.png";
import IconGitHub from "../assets/github.png";
import IconWeb from "../assets/sitio-web.png";

function Cards() {
  return (
    <div className="cards-container">
      <div className="row">
        {ProyectosData.map((proyecto) => (
          <div key={proyecto.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card" style={{ maxWidth: '23rem' }}>
              <img src={proyecto.img} className="card-img-top img-hover-effect" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{proyecto.nombre}</h5>
                <p className="card-text">{proyecto.descripcion}</p>
                <a href={proyecto.linkYoutube} className="btn btn-light iconY" target="_blank" rel="noopener noreferrer">Youtube <img src={IconYoutube} className="icono-btn" alt="Youtube Icon" /></a>
                <a href={proyecto.linkGit} className="btn btn-light iconG" target="_blank" rel="noopener noreferrer">Github <img src={IconGitHub} className="icono-btn" alt="GitHub Icon" /></a>
                <a href={proyecto.linkDeploy} className="btn btn-light iconD" target="_blank" rel="noopener noreferrer">Demo <img src={IconWeb} className="icono-btn" alt="Web Icon" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;