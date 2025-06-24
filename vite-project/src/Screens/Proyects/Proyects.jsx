import "./Proyects.css";
import Card from '../../Componets/Card/Card';

function Proyects({ proyectosData }) {
  return (
    <div className="cards-container">
      <h1 id='Proyects' className='proyects1'>Proyectos</h1>
      <div className="green-lineCard"></div>
      <div className="custom-grid">
        {proyectosData.map((proyecto) => (
          <Card key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
}

export default Proyects;
