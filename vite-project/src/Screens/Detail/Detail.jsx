import { useParams } from "react-router-dom"
import './Detail.css'
import { IconDeploy2, IconGithub2, IconYoutube2 } from "../../Utils/Icons/Icons";

function Detail ({ proyectosData }){
    const { id } = useParams()
    const proyecto = proyectosData.find(p => p.id === parseInt(id));

    if (!proyecto) return <p>No se encontró el proyecto.</p>;
    
    return (
        <section className="grid-layout">
            <div className="divImgD">
                <img src={proyecto.img} alt="" />
            </div>
            <div className="divName">
                <h2>{proyecto.nombre}</h2>

                <div style={{ marginTop: "auto" }}>
                    <h4><strong>Estado:</strong> {proyecto.progress}</h4>
                    <h4><strong>Proposito:</strong> {proyecto.purpose}</h4>
                    <h4><strong>Fecha:</strong> {proyecto.date}</h4>
                </div>
            </div>
            <div className="divDescription">
                <h4>{proyecto.descripcion}</h4>
            </div>
            <div className="divLinks">
                <h4>Links al Proyecto </h4>
                <div>
                    <a 
                      href={proyecto.linkYoutube || '#'} 
                      className={`btn btn-light iconYDetail`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-disabled={!proyecto.linkYoutube} 
                    > <IconYoutube2 />
                    </a>
                    <a href={proyecto.linkGit} className="btn btn-light iconGDetail" target="_blank" rel="noopener noreferrer"> <IconGithub2/></a>
                    <a href={proyecto.linkDeploy} className="btn btn-light iconDDetail" target="_blank" rel="noopener noreferrer"> <IconDeploy2/></a>
                </div>
            </div>
        </section>
    )
}

export default Detail;