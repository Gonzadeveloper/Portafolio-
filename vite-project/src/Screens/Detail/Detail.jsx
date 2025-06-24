import { useParams } from "react-router-dom"
import './Detail.css'
import { IconDeploy2, IconGithub2, IconYoutube2 } from "../../Utils/Icons/Icons";
import TechGroup from "../../Componets/TechGroup/TechGroup"

function Detail ({ proyectosData }){
    const { id } = useParams()
    const proyecto = proyectosData.find(p => p.id === parseInt(id));

    if (!proyecto) return <p>No se encontró el proyecto.</p>;

    const parseToArray = (input) => {
    if (!input) return [];
    if (Array.isArray(input)) return input;
    if (typeof input === 'string') {
        return input.split(',').map(s => s.trim()).filter(Boolean);
    }
    return [];
    };

    const frameworks = parseToArray(proyecto.Frameworks);
    const librerias = parseToArray(proyecto.librerias); 
    const lenguajes = parseToArray(proyecto.lenguajes);
    const otras = parseToArray(proyecto.otrasHerramientas);
    
    return (
        <section className="grid-layout">
            <div className="divImgD">
                <img src={proyecto.img} alt="" />
            </div>
            <div className="divName">
                <h2>{proyecto.nombre}</h2>

                <div style={{ marginTop: "auto" }}>
                    <TechGroup title="Frameworks" items={frameworks} className="techGroup"/>
                    <TechGroup title="Librerías" items={librerias} className="techGroup"/>
                    <TechGroup title="Lenguajes" items={lenguajes} className="techGroup"/>
                    <TechGroup title="Otras herramientas" items={otras} className="techGroup"/>
                    <h4 className="detallesh4"><strong>Estado:</strong> {proyecto.progress}</h4>
                    <h4 className="detallesh4"><strong>Proposito:</strong> {proyecto.purpose}</h4>
                    <h4 className="detallesh4"><strong>Fecha:</strong> {proyecto.date}</h4>
                </div>
            </div>
            <div className="divDescription">
                <h3>Mi participacion en el proyecto</h3>
                <p>{proyecto.miParticipacion}</p>
                <h3>Detalles sobre el proyecto</h3>
                <p>{proyecto.descripcionLarga}</p>
            </div>
            <div className="divLinks">
                <h4>Links al Proyecto </h4>
                <div>
                    <a 
                      href={proyecto.linkYoutube || '#'} 
                      className={`iconYDetail`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-disabled={!proyecto.linkYoutube} 
                    > <IconYoutube2 />
                    </a>
                    <a href={proyecto.linkGit} className="iconGDetail" > <IconGithub2/></a>
                    <a href={proyecto.linkDeploy} className="iconDDetail" > <IconDeploy2/></a>
                </div>
            </div>
        </section>
    )
}

export default Detail;