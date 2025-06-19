import { useState } from "react";
import { IconLinkedin, IconGit } from "../../Utils/Icons/Icons";
import axios from 'axios'
import "./Contact.css";


function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`${import.meta.env.VITE_ENDPOINT}/send-email`, {
            email,
            subject,
            message
        },
        {
          headers: {
              'apikey': import.meta.env.API_KEY 
            }
        }
        );

        alert('Email enviado con éxito');
    } catch (error) {
        console.error('Error al enviar el email', error);
        alert('Error al enviar el email');
    }
};

  return (
    <div className="container divContact" id="Contact">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Hagamos conexión</h3>
          <div className="green-line"></div>
          <p>
            Hey, llegaste hasta aquí, ¿qué esperas para darme más detalles sobre tu proyecto? Seguro puedo ayudarte a
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
          </div>
        </div>

        <div className="col-12 col-md-6 divForm">
          <form onSubmit={handleSubmit}>
            <h3>Tu Email</h3>
            <input value={email} type="text" placeholder="tuemail@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            <h3>Asunto</h3>
            <input value={subject} type="text" placeholder="Solo di hola"  onChange={(e) => setSubject(e.target.value)} />
            <h3>Mensaje</h3>
            <textarea value={message} name="" id="" placeholder="tu mensaje ...." onChange={(e) => setMessage(e.target.value)} ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;