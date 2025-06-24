import { Link } from 'react-router-dom';
import { IconGithub, IconYoutube, IconDeploy } from '../../Utils/Icons/Icons';
import './Card.css';

function Card({ proyecto }) {
  return (
    <div className="card-wrapper">
      <div className="cardCustom">
        <Link to={`/detail/${proyecto.id}`} className="link image-overlay-container">
          <img src={proyecto.img} className="card-img-top img-hover-effect" alt="..." />
          <div className="image-overlay-text">Ver detalles</div>
        </Link>
        <div className="cardBody">
          <h5 className="card-title">{proyecto.nombre}</h5>
          <p className="card-text truncated">{proyecto.descripcion}</p>

          <a
            href={proyecto.linkYoutube || '#'}
            className={`iconY ${!proyecto.linkYoutube ? 'disabled' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!proyecto.linkYoutube}
          >
            Youtube <IconYoutube />
          </a>

          <a
            href={proyecto.linkGit}
            className="iconG"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <IconGithub />
          </a>

          <a
            href={proyecto.linkDeploy}
            className="iconD"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo <IconDeploy />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
