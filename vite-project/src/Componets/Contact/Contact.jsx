import IconGitHub from "../../assets/github.png";
import IconLinkedin from "../../assets/linkedin1.png"
import "./Contact.css"

function Contact (){
    return (
        <div className="divContact" id="Contact">
            <div>
                <h3>Hagamos conexión </h3>
                <div className="green-line"></div>
                <p>Hey, llegaste hasta aquí, ¿qué esperas para darme más detalles sobre tu proyecto? Seguro puedo ayudarte a potenciar esa idea. Te dejo algunos de los canales para que acerques tu propuesta.</p>
                <div>
                    <a href="https://github.com/Gonzadeveloper" className="IconosContact">
                        <img src={IconGitHub} alt="Descripción de la imagen"/>
                    </a>
                    <a href="https://www.linkedin.com/in/gonzalo-cayssials-610bb5254/" className="IconosContact">
                        <img src={IconLinkedin} alt="Descripción de la imagen"/>
                    </a>
                </div>
            </div>

            <div className="divForm">
                <form action="" method="post">
                    <h3>Tu Email</h3>
                    <input type="text" placeholder="tuemail@gmail.com"/>
                    <h3>Asunto</h3>
                    <input type="text" placeholder="Solo di hola"/>
                    <h3>Mensaje</h3>
                    <textarea name="" id="" placeholder="tu mensaje ...."></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact