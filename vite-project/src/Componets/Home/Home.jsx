import React, { useState, useEffect } from 'react';
import './Home.css';
import avatar from "../../assets/avatar.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const textos = ["Gonzalo", "Desarrollador web full stack"];
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % textos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadClick = () => {
    window.location.href = 'https://drive.google.com/file/d/1B3eKiIC0qj8gcfrZ_eVrZwERKY16-Rle/view?usp=drive_link';
  };

  return (
    <div className='container-fluid containerHome' id='Home'>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6'>
          <div className="texto-animated">
            <span className="texto-cambiar1">Hola, soy <br /></span>
            <span className="texto-cambiar">{textos[indice]}</span>
          </div>
          <div>
            <p className='TextoHomep'>Apasionado por la tecnología, la música, los videojuegos y las motos.</p>
            <button className="botonesHome1" onClick={scrollToContact}><span>Contactame</span></button>
            <button className='botonesHome2' onClick={handleDownloadClick}><span>Descarga mi CV</span></button>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <img src={avatar} alt="Avatar" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Home;