import React from 'react';
import "./Cards.css";
import { Link } from 'react-router-dom';
import { IconGithub, IconYoutube, IconDeploy} from '../../Utils/Icons/Icons'

function Cards({ proyectosData }) {

  console.log(proyectosData);
  
  
  return (
    <div className="cards-container" >
      <h1 id='Proyects' className='proyects1'>Proyectos</h1>
        <div className="green-lineCard"></div>
        <div className="row justify-content-center">
          {proyectosData.map((proyecto) => (
            <div key={proyecto.id} className="col-lg-4 col-md-6 col-12 mb-4"> {/* Usa col-12 para móviles */}
              <div className="card" style={{ maxWidth: '23rem' }}>
              <Link to={`/detail/${proyecto.id}}`} className='link'>
                <img src={proyecto.img} className="card-img-top img-hover-effect" alt="..." />
              </Link>
                <div className="card-body">
                  <h5 className="card-title">{proyecto.nombre}</h5>
                  <p className="card-text">{proyecto.descripcion}</p>
                  <a 
                    href={proyecto.linkYoutube || '#'} 
                    className={`btn btn-light iconY ${!proyecto.linkYoutube ? 'disabled' : ''}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-disabled={!proyecto.linkYoutube} 
                  >
                    Youtube <IconYoutube/>
                  </a>
                  <a href={proyecto.linkGit} className="btn btn-light iconG" target="_blank" rel="noopener noreferrer">Github <IconGithub/></a>
                  <a href={proyecto.linkDeploy} className="btn btn-light iconD" target="_blank" rel="noopener noreferrer">Demo <IconDeploy/></a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Cards;