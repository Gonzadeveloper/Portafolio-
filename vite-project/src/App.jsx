import { useState } from 'react'
import Cards from './Componets/Cards'
import IconGitHub from "./assets/github.png"
import IconLinkeind from "./assets/linkedin.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Style.css"

function App() {
  
  return (

    <div className='container'>
            <div className="card mb-3">
        <img src="https://d2a5isokysfowx.cloudfront.net/wp-content/uploads/2022/08/que-es-un-desarrollador-web.png" class="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text p1"> Hola mi nombre es Gonzalo, soy un desarrollador web full stack y aqui vas a encontrar todos mis proyectos. Puedes cliquear en ellos para ver mas informacion tecnica de los mismos</p>
          <a href="https://github.com/Gonzadeveloper" className="btn btn-light IconGA">Mi Github <img src={IconGitHub} className="icono-btn" /></a>
          <a href="https://ar.linkedin.com/in/gonzalo-cayssials-610bb5254" className="btn btn-light IconL">Mi Linkedin <img src={IconLinkeind} className="icono-btn" /></a>
        </div>
      </div>
      <Cards/>
    </div>

  )
}

export default App
