import { IconLinkedin, IconGit, IconTiktok, IconMail, IconInstagram } from "../../Utils/Icons/Icons";
import "./Contact.css";


function Contact() {

  return (
    <div className="divContact" id="Contact">
      <div className="rowContact">
        <div className="colContact">
          <h3>Hagamos conexión</h3>
          <div className="green-line"></div>
          <p>
            Hey, llegaste al final, ¿qué esperas para darme más detalles sobre tu proyecto? Seguro puedo ayudarte a
            potenciar esa idea. Te dejo algunos de los canales para que acerques tu propuesta.
          </p>
          <div className="contendorIconos">
            <div className="divIcono">
              <a href="https://github.com/Gonzadeveloper" className="IconosContact">
                <IconGit />
              </a>
            </div>
            <div className="divIcono">
              <a href="https://www.linkedin.com/in/gonzalo-cayssials-610bb5254/" className="IconosContact">
                <IconLinkedin />
              </a>
            </div>
            <div className="divIcono">
              <a href="mailto:gonzaloncayssials@gmail.com" className="IconosContact">
                <IconMail/>
              </a>
            </div>
            <div className="divIcono">
              <a href="https://www.tiktok.com/@hellogonza8" className="IconosContact">
                <IconTiktok/>
              </a>
            </div>
            <div className="divIcono">
              <a href="https://www.instagram.com/hellogonza/" className="IconosContact">
                <IconInstagram/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;