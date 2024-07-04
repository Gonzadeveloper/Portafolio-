import IconGitHub from "../../assets/github.png"
import IconLinkeind from "../../assets/linkedin.png"

function Present (){

    return(
        <div className='container'>
            <div className="card mb-3">
            <img src="https://d2a5isokysfowx.cloudfront.net/wp-content/uploads/2022/08/que-es-un-desarrollador-web.png" class="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text p1"> ¡Hola soy <span className='span1'>Gonzalo</span>! un <span className='span1'>desarrollador web full stack</span> aquí vas a encontrar todos mis proyectos. Puedes cliquear en ellos para ver más informacion tecnica de los mismos y <span className='span1'>Tecnologías</span> con las que fueron realizados</p>
                <a href="https://github.com/Gonzadeveloper" className="btn btn-light IconGA">Mi Github <img src={IconGitHub} className="icono-btn" /></a>
                <a href="https://ar.linkedin.com/in/gonzalo-cayssials-610bb5254" className="btn btn-light IconL">Mi Linkedin <img src={IconLinkeind} className="icono-btn" /></a>
            </div>
            </div>
        </div>
    )
}

export default Present