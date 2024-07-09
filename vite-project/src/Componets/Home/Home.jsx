import React, { useState, useEffect } from 'react';
import './Home.css'; // Asegúrate de importar correctamente tu archivo CSS
import avatar from "../../assets/avatar.jpg"

function Home() {
  const textos = ["Gonzalo", "Desarrollador web full stack"];
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % textos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []); // Este efecto se ejecutará solo una vez al montar el componente

  return (
    <div className='container containerHome' id='Home'>
      <div className='div1'>
        <div className="texto-animated">
          <span className="texto-cambiar1">Hola, soy <br /></span>
          <span className="texto-cambiar">{textos[indice]}</span>
        </div>
        <div>
          <p className='TextoHomep'>Apasionado por la tecnologia, la musica, los videojuegos y las motos.</p>

          <button className='botonesHome1'><span>Contactame</span></button>

          <button className='botonesHome2'><span>Descarga mi CV</span></button>

        </div>
      </div>
      <div className='div2'>
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}

export default Home;