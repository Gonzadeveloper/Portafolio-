import React from 'react';
import "./Cards.css";
import IconYoutube from "../../assets/youtube.png";
import IconGitHub from "../../assets/github.png";
import IconWeb from "../../assets/sitio-web.png";
import PortadaPF from '../../assets/CaratulasProyectos/Landing-page.jpg'
import PortadaPI from '../../assets/CaratulasProyectos/PI-drivers-landingPage.png'
import PortadaChatIA from '../../assets/CaratulasProyectos/CaratulaIA.webp'

function Cards() {

  const ProyectosData = [
    {
      "id": 1,
      "nombre": "Chat IA",
      "descripcion": "Este es un proyecto donde podras usar chat IA local con el modelo llama 3",
      "img": PortadaChatIA,
      "linkGit": "https://github.com/Gonzadeveloper/Chat-IA-local",
      "linkDeploy":"https://chat-ia-local.vercel.app/",
      "linkYoutube":""
    },
    {
      "id": 2,
      "nombre": "Electro emporium",
      "descripcion": "Marketplace orientado a compra y venta de productos de tecnología",
      "img": PortadaPF,
      "linkGit": "",
      "linkDeploy":"https://frontelectroemporium.vercel.app/#/",
      "linkYoutube":""
    },
    {
      "id": 3,
      "nombre": "PI Drivers",
      "descripcion": "En esta app vas a poder ver todos los pilotos de la F1 y ademas crear nuevos!",
      "img": PortadaPI,
      "linkGit": "https://github.com/Gonzadeveloper/PI-drivers",
      "linkDeploy":"https://pi-drivers-two.vercel.app/",
      "linkYoutube":""
    }
  ]

  return (
    <div className="cards-container" >
    <h1 id='Proyects'>Proyectos</h1>
      <div className="green-lineCard"></div>
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