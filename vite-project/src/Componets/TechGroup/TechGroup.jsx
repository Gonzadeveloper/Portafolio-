import techIconMap from "../../Utils/Icons/TechIcons";
import './TechGroup.css'

const TechGroup = ({ title, items }) => {
  if (items.length === 0) return null;

  return (
    <div className="tech-group">
      <h4>{title}</h4>
      <div className="tech-icons">
        {items.map((tech, i) => (
          <div key={i} className="tech-icon" title={tech}>
            {techIconMap[tech] || <span>{tech}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechGroup;