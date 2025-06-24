import React, { useState, useEffect } from 'react';
import './Home.css';
import avatar from "../../assets/avatar.jpg";
import { motion } from "framer-motion"

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
    window.location.href = 'https://drive.google.com/file/d/11TvtwBzNfWO5ESCoXeap5Vqq58w2RoV5/view?usp=sharing';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // empieza abajo y oculto
      animate={{ opacity: 1, y: 0 }} // aparece y sube
      transition={{ duration: 1.2 }}
    >
      <div className='containerHome' id='Home'>
        <div className='rowHome'>
          <div className='colHome'>
            <div className="texto-animated">
              <span className="texto-cambiar1">Hola, soy <br /></span>
              <span className="texto-cambiar">{textos[indice]}</span>
            </div>
            <div>
              <p className='TextoHomep'>Apasionado por la tecnología, la música, los videojuegos y las motos.</p>
              <button className="botonesHome1" onClick={scrollToContact}><span>Contactame</span></button>
              <button className='botonesHome2' onClick={handleDownloadClick}><span>Mira mi CV</span></button>
            </div>
          </div>
          <div className='divImg colHome'>
            <img src={avatar} alt="Avatar" className="img-fluid1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
