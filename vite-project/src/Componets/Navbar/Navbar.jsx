import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          {/* Logo HOME visible solo en desktop */}
          <Link to="/" className="linknav desktop-only">
            <span className="nav-logo">Home</span>
          </Link>

          {/* Botón hamburguesa */}
          <button
            className={`nav-toggle ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="nav-toggle-icon"></span>
          </button>
        </div>

        {/* Menú desplegable */}
        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {/* HOME visible solo en mobile */}
          <Link to="/" className="linknav mobile-only">
            <span className="nav-link">Home</span>
          </Link>
          <a className="nav-link" href="#About">Sobre mí</a>
          <a className="nav-link" href="#Proyects">Proyectos</a>
          <a className="nav-link" href="#Contact">Contacto</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;